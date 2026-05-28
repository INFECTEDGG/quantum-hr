import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Contact from "./pages/Contact.tsx";
import Datenschutz from "./pages/Datenschutz.tsx";
import Impressum from "./pages/Impressum.tsx";
import AboutUs from "./pages/AboutUs.tsx";
import FAQPage from "./pages/FAQPage.tsx";
import MarketingPage from "./pages/MarketingPage.tsx";
import Login from "./pages/Login.tsx";
import AdminDashboard from "./pages/AdminDashboard.tsx";
import CustomerPortal from "./pages/CustomerPortal.tsx";
import Navbar from "@/components/landing/Navbar";
import LandingFooter from "@/components/landing/Footer";
import { Footer as LegalFooter } from "./components/Footer.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";
import RequireAuth from "./components/auth/RequireAuth.tsx";
import { LanguageProvider } from "./lib/i18n.tsx";
import CookieConsentBanner, { CookieControlledAnalytics } from "./components/CookieConsentBanner.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <LanguageProvider>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen bg-background text-foreground">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/ueber-uns" element={<AboutUs />} />
                <Route path="/fragen" element={<FAQPage />} />
                <Route path="/referenzen" element={<MarketingPage pageKey="references" />} />
                <Route path="/lizenzen" element={<MarketingPage pageKey="licenses" />} />
                <Route path="/licences" element={<MarketingPage pageKey="licenses" />} />
                <Route path="/case-studies" element={<MarketingPage pageKey="caseStudies" />} />
                <Route path="/unternehmen" element={<MarketingPage pageKey="company" />} />
                <Route path="/leistungen" element={<MarketingPage pageKey="services" />} />
                <Route path="/serviceleistungen" element={<MarketingPage pageKey="services" />} />
                <Route path="/blog" element={<MarketingPage pageKey="blog" />} />
                <Route path="/shop" element={<MarketingPage pageKey="shop" />} />
                <Route path="/digitale-produkte" element={<MarketingPage pageKey="shop" />} />
                <Route path="/login" element={<Login />} />
                <Route
                  path="/admin"
                  element={
                    <RequireAuth allowedRoles={["admin"]}>
                      <AdminDashboard />
                    </RequireAuth>
                  }
                />
                <Route
                  path="/portal"
                  element={
                    <RequireAuth allowedRoles={["customer"]}>
                      <CustomerPortal />
                    </RequireAuth>
                  }
                />
                <Route path="/kontakt" element={<Contact />} />
                <Route path="/datenschutz" element={<Datenschutz />} />
                <Route path="/impressum" element={<Impressum />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <LandingFooter />
            <LegalFooter />
            <CookieConsentBanner />
            <CookieControlledAnalytics />
          </div>
        </LanguageProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
