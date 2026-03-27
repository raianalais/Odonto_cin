import React, { createContext, useContext, useState, useCallback } from 'react';
import { Profissional, Paciente, Atendimento } from '@/types';
import { gerarId } from '@/lib/validators';

interface AppState {
  profissionais: Profissional[];
  pacientes: Paciente[];
  atendimentos: Atendimento[];
  addProfissional: (p: Omit<Profissional, 'id' | 'criadoEm'>) => void;
  updateProfissional: (id: string, p: Omit<Profissional, 'id' | 'criadoEm'>) => void;
  deleteProfissional: (id: string) => { success: boolean; message: string };
  addPaciente: (p: Omit<Paciente, 'id' | 'criadoEm'>) => void;
  updatePaciente: (id: string, p: Omit<Paciente, 'id' | 'criadoEm'>) => void;
  addAtendimento: (a: Omit<Atendimento, 'id' | 'criadoEm'>) => void;
  getProfissional: (id: string) => Profissional | undefined;
  getPaciente: (id: string) => Paciente | undefined;
}

const AppContext = createContext<AppState | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [profissionais, setProfissionais] = useState<Profissional[]>([]);
  const [pacientes, setPacientes] = useState<Paciente[]>([]);
  const [atendimentos, setAtendimentos] = useState<Atendimento[]>([]);

  const addProfissional = useCallback((p: Omit<Profissional, 'id' | 'criadoEm'>) => {
    setProfissionais(prev => [...prev, { ...p, id: gerarId(), criadoEm: new Date().toISOString() }]);
  }, []);

  const updateProfissional = useCallback((id: string, p: Omit<Profissional, 'id' | 'criadoEm'>) => {
    setProfissionais(prev => prev.map(prof => prof.id === id ? { ...prof, ...p } : prof));
  }, []);

  const deleteProfissional = useCallback((id: string): { success: boolean; message: string } => {
    const hasAtendimentos = atendimentos.some(a => a.profissionalId === id);
    if (hasAtendimentos) {
      return { success: false, message: 'Não é possível excluir este profissional pois existem atendimentos vinculados.' };
    }
    setProfissionais(prev => prev.filter(p => p.id !== id));
    return { success: true, message: 'Profissional excluído com sucesso.' };
  }, [atendimentos]);

  const addPaciente = useCallback((p: Omit<Paciente, 'id' | 'criadoEm'>) => {
    setPacientes(prev => [...prev, { ...p, id: gerarId(), criadoEm: new Date().toISOString() }]);
  }, []);

  const updatePaciente = useCallback((id: string, p: Omit<Paciente, 'id' | 'criadoEm'>) => {
    setPacientes(prev => prev.map(pac => pac.id === id ? { ...pac, ...p } : pac));
  }, []);

  const addAtendimento = useCallback((a: Omit<Atendimento, 'id' | 'criadoEm'>) => {
    setAtendimentos(prev => [...prev, { ...a, id: gerarId(), criadoEm: new Date().toISOString() }]);
  }, []);

  const getProfissional = useCallback((id: string) => profissionais.find(p => p.id === id), [profissionais]);
  const getPaciente = useCallback((id: string) => pacientes.find(p => p.id === id), [pacientes]);

  return (
    <AppContext.Provider value={{
      profissionais, pacientes, atendimentos,
      addProfissional, updateProfissional, deleteProfissional,
      addPaciente, updatePaciente,
      addAtendimento, getProfissional, getPaciente,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
