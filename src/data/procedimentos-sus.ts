import { ProcedimentoSUS } from '@/types';

// Representative subset of SUS dental procedures
export const PROCEDIMENTOS_SUS: ProcedimentoSUS[] = [
  // BPA-C (Consolidado) - procedimentos mais simples
  { codigo: '0101010010', descricao: 'Atividade educativa / Orientação em grupo na atenção básica', classificacao: 'BPA-C' },
  { codigo: '0101010028', descricao: 'Atividade educativa / Orientação em grupo na atenção especializada', classificacao: 'BPA-C' },
  { codigo: '0301010030', descricao: 'Consulta de profissionais de nível superior na atenção básica', classificacao: 'BPA-C' },
  { codigo: '0301010072', descricao: 'Consulta odontológica inicial', classificacao: 'BPA-C' },
  { codigo: '0301010080', descricao: 'Consulta de retorno em odontologia', classificacao: 'BPA-C' },
  { codigo: '0101020058', descricao: 'Evidenciação de placa bacteriana', classificacao: 'BPA-C' },
  { codigo: '0101020040', descricao: 'Aplicação tópica de flúor individual', classificacao: 'BPA-C' },
  { codigo: '0101020066', descricao: 'Escovação dental supervisionada', classificacao: 'BPA-C' },
  { codigo: '0307010015', descricao: 'Profilaxia / Remoção de placa bacteriana', classificacao: 'BPA-C' },
  { codigo: '0101020031', descricao: 'Aplicação de selante', classificacao: 'BPA-C' },

  // BPA-I (Individualizado) - procedimentos mais complexos
  { codigo: '0307020037', descricao: 'Restauração de dente decíduo', classificacao: 'BPA-I' },
  { codigo: '0307020045', descricao: 'Restauração de dente permanente anterior', classificacao: 'BPA-I' },
  { codigo: '0307020053', descricao: 'Restauração de dente permanente posterior', classificacao: 'BPA-I' },
  { codigo: '0307030032', descricao: 'Exodontia de dente decíduo', classificacao: 'BPA-I' },
  { codigo: '0307030040', descricao: 'Exodontia de dente permanente', classificacao: 'BPA-I' },
  { codigo: '0307010040', descricao: 'Raspagem, alisamento e polimento subgengival', classificacao: 'BPA-I' },
  { codigo: '0307010058', descricao: 'Raspagem, alisamento e polimento supragengival', classificacao: 'BPA-I' },
  { codigo: '0307040017', descricao: 'Tratamento endodôntico de dente permanente unirradicular', classificacao: 'BPA-I' },
  { codigo: '0307040025', descricao: 'Tratamento endodôntico de dente permanente birradicular', classificacao: 'BPA-I' },
  { codigo: '0307040033', descricao: 'Tratamento endodôntico de dente permanente com 3 ou mais raízes', classificacao: 'BPA-I' },
  { codigo: '0307050011', descricao: 'Cimentação de prótese fixa', classificacao: 'BPA-I' },
  { codigo: '0307050038', descricao: 'Instalação de prótese dentária', classificacao: 'BPA-I' },
  { codigo: '0414020120', descricao: 'Tratamento de alveolite', classificacao: 'BPA-I' },
  { codigo: '0414020138', descricao: 'Tratamento de hemorragia buco-dental', classificacao: 'BPA-I' },
  { codigo: '0307020029', descricao: 'Capeamento pulpar', classificacao: 'BPA-I' },
  { codigo: '0307020010', descricao: 'Acesso à polpa dentária e medicação', classificacao: 'BPA-I' },
  { codigo: '0414020081', descricao: 'Drenagem de abscesso', classificacao: 'BPA-I' },
  { codigo: '0307010023', descricao: 'Moldagem dento-gengival para construção de prótese dentária', classificacao: 'BPA-I' },
  { codigo: '0414020030', descricao: 'Excisão de mucocele', classificacao: 'BPA-I' },
  { codigo: '0414020049', descricao: 'Excisão de rânula', classificacao: 'BPA-I' },
];

export function buscarProcedimento(codigo: string): ProcedimentoSUS | undefined {
  return PROCEDIMENTOS_SUS.find(p => p.codigo === codigo);
}

export function buscarProcedimentos(termo: string): ProcedimentoSUS[] {
  const lower = termo.toLowerCase();
  return PROCEDIMENTOS_SUS.filter(
    p => p.codigo.includes(termo) || p.descricao.toLowerCase().includes(lower)
  );
}
