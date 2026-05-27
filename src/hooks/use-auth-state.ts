import { useEffect, useState } from "react";
import {
  AUTH_CHANGE_EVENT,
  getAccounts,
  getCurrentUser,
  logout,
  type PublicAccount,
} from "@/lib/auth";

type AuthState = {
  user: PublicAccount | null;
  accounts: PublicAccount[];
};

const readAuthState = (): AuthState => ({
  user: getCurrentUser(),
  accounts: getAccounts(),
});

export const useAuthState = () => {
  const [state, setState] = useState<AuthState>(() => readAuthState());

  useEffect(() => {
    const refresh = () => setState(readAuthState());

    window.addEventListener(AUTH_CHANGE_EVENT, refresh);
    window.addEventListener("storage", refresh);
    refresh();

    return () => {
      window.removeEventListener(AUTH_CHANGE_EVENT, refresh);
      window.removeEventListener("storage", refresh);
    };
  }, []);

  return {
    ...state,
    refresh: () => setState(readAuthState()),
    logout,
  };
};
