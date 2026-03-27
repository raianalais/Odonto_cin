import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppProvider } from "@/contexts/AppContext";
import AppLayout from "@/components/AppLayout";
import Dashboard from "@/pages/Dashboard";
import ProfissionaisPage from "@/pages/ProfissionaisPage";
import PacientesPage from "@/pages/PacientesPage";
import AtendimentosPage from "@/pages/AtendimentosPage";
import RelatoriosPage from "@/pages/RelatoriosPage";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AppProvider>
        <BrowserRouter>
          <AppLayout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/profissionais" element={<ProfissionaisPage />} />
              <Route path="/pacientes" element={<PacientesPage />} />
              <Route path="/atendimentos" element={<AtendimentosPage />} />
              <Route path="/relatorios" element={<RelatoriosPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AppLayout>
        </BrowserRouter>
      </AppProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
