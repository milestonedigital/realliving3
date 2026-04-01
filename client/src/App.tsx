/*
 * REALiving® App Router
 * Design: Organic Modernism — Warm Teal Editorial
 * Routes: Home, Our Services, EAP, BESTology, Blog, Contact, Conference, 404
 */

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import OurServices from "./pages/OurServices";
import EAP from "./pages/EAP";
import BESTology from "./pages/BESTology";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Conference from "./pages/Conference";
import NotFound from "./pages/NotFound";
import ProfessionalCoaching from "./pages/ProfessionalCoaching";
import BlogPost from "./pages/BlogPost";
import EAPLogin from "./pages/EAPLogin";
import AdminLogin from "./pages/AdminLogin";
import AdminPanel from "./pages/AdminPanel";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/our-services" component={OurServices} />
        <Route path="/eap" component={EAP} />
        <Route path="/bestology" component={BESTology} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Route path="/conference" component={Conference} />
        <Route path="/professional-coaching" component={ProfessionalCoaching} />
        <Route path="/blog/:slug" component={BlogPost} />
        <Route path="/eap-login" component={EAPLogin} />
        <Route path="/admin-login" component={AdminLogin} />
        <Route path="/admin" component={AdminPanel} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
