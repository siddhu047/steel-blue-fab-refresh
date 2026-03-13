import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import MildSteelGrating from "./pages/MildSteelGrating.tsx";
import StainlessSteelGratings from "./pages/StainlessSteelGratings.tsx";
import MSFoundationBolt from "./pages/MSFoundationBolt.tsx";
import ShutterStrip from "./pages/ShutterStrip.tsx";
import PoleClamp from "./pages/PoleClamp.tsx";
import MildSteelClamp from "./pages/MildSteelClamp.tsx";
import PPEKit from "./pages/PPEKit.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        el?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products/mild-steel-grating" element={<MildSteelGrating />} />
          <Route path="/products/stainless-steel-gratings" element={<StainlessSteelGratings />} />
          <Route path="/products/ms-foundation-bolt" element={<MSFoundationBolt />} />
          <Route path="/products/shutter-strip" element={<ShutterStrip />} />
          <Route path="/products/pole-clamp" element={<PoleClamp />} />
          <Route path="/products/mild-steel-clamp" element={<MildSteelClamp />} />
          <Route path="/products/ppe-kit" element={<PPEKit />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;