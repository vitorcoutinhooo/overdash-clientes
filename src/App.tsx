import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { RubianaRamosPage } from "@/pages/rubianaramos";
import { RubianaRamosBioPage } from "@/pages/rubianaramos-bio";
import { trackPageView } from "@/lib/pixel";

function PixelRouteTracker() {
  const location = useLocation();
  useEffect(() => {
    trackPageView();
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
