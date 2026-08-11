import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { RubianaRamosPage } from "@/pages/rubianaramos";
import { RubianaRamosBioPage } from "@/pages/rubianaramos-bio";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/rubianaramos" element={<RubianaRamosPage />} />
        <Route path="/rubianaramos-bio" element={<RubianaRamosBioPage />} />
        <Route path="/" element={<Navigate to="/rubianaramos" replace />} />
        <Route path="*" element={<Navigate to="/rubianaramos" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
