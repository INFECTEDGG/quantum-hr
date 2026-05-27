export type AuthRole = "admin" | "customer";

export type AccountStatus = "active";

export type AuthAccount = {
  id: string;
  name: string;
  email: string;
  company?: string;
  role: AuthRole;
  status: AccountStatus;
  passwordHash: string;
  createdAt: string;
  createdBy: string;
};

export type PublicAccount = Omit<AuthAccount, "passwordHash">;

export type CreateAccountInput = {
  name: string;
  email: string;
  company?: string;
  role: AuthRole;
  password: string;
};

type AuthSession = {
  accountId: string;
  createdAt: string;
};

const ACCOUNTS_KEY = "rawr.auth.accounts.v1";
const SESSION_KEY = "rawr.auth.session.v1";
const HASH_PREFIX = "rawr-demo-auth-v1:";

export const AUTH_CHANGE_EVENT = "rawr-auth-change";
export const DEFAULT_ADMIN_EMAIL = "admin@rawr.de";

const DEFAULT_ADMIN: AuthAccount = {
  id: "rawr-default-admin",
  name: "Maximilian Stephan",
  email: DEFAULT_ADMIN_EMAIL,
  company: "RAWR – Recruitment AI Workforce Revolution GmbH",
  role: "admin",
  status: "active",
  passwordHash: "2244c0660c453d8a3ee0b79213a737249b5cf6596f2062fce0405feb42616bc4",
  createdAt: "2026-05-27T00:00:00.000Z",
  createdBy: "system",
};

const isBrowser = () => typeof window !== "undefined" && typeof window.localStorage !== "undefined";

const normalizeEmail = (email: string) => email.trim().toLowerCase();

const toPublicAccount = ({ passwordHash, ...account }: AuthAccount): PublicAccount => account;

const emitAuthChange = () => {
  if (isBrowser()) {
    window.dispatchEvent(new Event(AUTH_CHANGE_EVENT));
  }
};

const createId = () => {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `acct_${Date.now()}_${Math.random().toString(36).slice(2)}`;
};

const readAccounts = (): AuthAccount[] => {
  if (!isBrowser()) {
    return [DEFAULT_ADMIN];
  }

  const rawAccounts = window.localStorage.getItem(ACCOUNTS_KEY);
  if (!rawAccounts) {
    window.localStorage.setItem(ACCOUNTS_KEY, JSON.stringify([DEFAULT_ADMIN]));
    return [DEFAULT_ADMIN];
  }

  try {
    const accounts = JSON.parse(rawAccounts) as AuthAccount[];
    if (!Array.isArray(accounts)) {
      throw new Error("Invalid account store");
    }

    const hasDefaultAdmin = accounts.some((account) => account.id === DEFAULT_ADMIN.id);
    if (!hasDefaultAdmin) {
      const nextAccounts = [DEFAULT_ADMIN, ...accounts];
      window.localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(nextAccounts));
      return nextAccounts;
    }

    return accounts;
  } catch {
    window.localStorage.setItem(ACCOUNTS_KEY, JSON.stringify([DEFAULT_ADMIN]));
    window.localStorage.removeItem(SESSION_KEY);
    return [DEFAULT_ADMIN];
  }
};

const writeAccounts = (accounts: AuthAccount[]) => {
  if (!isBrowser()) {
    return;
  }

  window.localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(accounts));
  emitAuthChange();
};

const readSession = (): AuthSession | null => {
  if (!isBrowser()) {
    return null;
  }

  const rawSession = window.localStorage.getItem(SESSION_KEY);
  if (!rawSession) {
    return null;
  }

  try {
    return JSON.parse(rawSession) as AuthSession;
  } catch {
    window.localStorage.removeItem(SESSION_KEY);
    return null;
  }
};

const writeSession = (session: AuthSession) => {
  if (!isBrowser()) {
    return;
  }

  window.localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  emitAuthChange();
};

export const hashPassword = async (password: string) => {
  if (!crypto.subtle) {
    throw new Error("auth.error.cryptoUnsupported");
  }

  const data = new TextEncoder().encode(`${HASH_PREFIX}${password}`);
  const digest = await crypto.subtle.digest("SHA-256", data);

  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
};

export const getAccounts = (): PublicAccount[] => readAccounts().map(toPublicAccount);

export const getCurrentUser = (): PublicAccount | null => {
  const session = readSession();
  if (!session) {
    return null;
  }

  const account = readAccounts().find(
    (storedAccount) => storedAccount.id === session.accountId && storedAccount.status === "active",
  );

  if (!account) {
    logout();
    return null;
  }

  return toPublicAccount(account);
};

export const login = async (email: string, password: string) => {
  const account = readAccounts().find((storedAccount) => normalizeEmail(storedAccount.email) === normalizeEmail(email));

  if (!account || account.status !== "active") {
    throw new Error("auth.error.invalidCredentials");
  }

  const passwordHash = await hashPassword(password);
  if (passwordHash !== account.passwordHash) {
    throw new Error("auth.error.invalidCredentials");
  }

  writeSession({
    accountId: account.id,
    createdAt: new Date().toISOString(),
  });

  return toPublicAccount(account);
};

export const logout = () => {
  if (!isBrowser()) {
    return;
  }

  window.localStorage.removeItem(SESSION_KEY);
  emitAuthChange();
};

export const createAccount = async (input: CreateAccountInput) => {
  const currentUser = getCurrentUser();
  if (!currentUser || currentUser.role !== "admin") {
    throw new Error("auth.error.adminOnly");
  }

  const name = input.name.trim();
  const email = normalizeEmail(input.email);
  const company = input.company?.trim();
  const password = input.password.trim();

  if (name.length < 2) {
    throw new Error("auth.error.nameShort");
  }

  if (!email.includes("@")) {
    throw new Error("auth.error.invalidEmail");
  }

  if (password.length < 8) {
    throw new Error("auth.error.passwordShort");
  }

  const accounts = readAccounts();
  const emailExists = accounts.some((storedAccount) => normalizeEmail(storedAccount.email) === email);
  if (emailExists) {
    throw new Error("auth.error.emailExists");
  }

  const account: AuthAccount = {
    id: createId(),
    name,
    email,
    company,
    role: input.role,
    status: "active",
    passwordHash: await hashPassword(password),
    createdAt: new Date().toISOString(),
    createdBy: currentUser.id,
  };

  writeAccounts([...accounts, account]);

  return toPublicAccount(account);
};

export const updateAccountPassword = async (accountId: string, password: string) => {
  const currentUser = getCurrentUser();
  if (!currentUser || currentUser.role !== "admin") {
    throw new Error("auth.error.adminOnly");
  }

  const nextPassword = password.trim();
  if (nextPassword.length < 8) {
    throw new Error("auth.error.passwordShort");
  }

  const accounts = readAccounts();
  const accountIndex = accounts.findIndex((storedAccount) => storedAccount.id === accountId);
  if (accountIndex === -1) {
    throw new Error("auth.error.accountNotFound");
  }

  const nextAccounts = [...accounts];
  nextAccounts[accountIndex] = {
    ...nextAccounts[accountIndex],
    passwordHash: await hashPassword(nextPassword),
  };

  writeAccounts(nextAccounts);

  return toPublicAccount(nextAccounts[accountIndex]);
};
