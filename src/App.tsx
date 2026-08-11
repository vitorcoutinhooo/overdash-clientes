import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { RubianaRamosPage } from "@/pages/rubianaramos";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/rubianaramos" element={<RubianaRamosPage />} />
        <Route path="/" element={<Navigate to="/rubianaramos" replace />} />
        <Route path="*" element={<Navigate to="/rubianaramos" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
