import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { RubianaRamosPage } from "@/pages/rubianaramos";
import { RubianaRamosBioPage } from "@/pages/rubianaramos-bio";
import { trackPageView } from "@/lib/pixel";
import { ga4PageView } from "@/lib/ga4";

function PixelRouteTracker() {
  const location = useLocation();
  useEffect(() => {
    trackPageView();
    ga4PageView(location.pathname);
  }, [location.pathname]);
  return null;
}

export function App() {
  return (
    <BrowserRouter>
      <PixelRouteTracker />
      <Routes>
        <Route path="/rubianaramos" element={<RubianaRamosPage />} />
        <Route path="/rubianaramos-bio" element={<RubianaRamosBioPage />} />
        <Route path="/" element={<Navigate to="/rubianaramos" replace />} />
        <Route path="*" element={<Navigate to="/rubianaramos" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
