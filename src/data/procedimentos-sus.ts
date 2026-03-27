import { ProcedimentoSUS } from '@/types';

export const PROCEDIMENTOS_SUS: ProcedimentoSUS[] = [
  // BPA-I
  { codigo: '0101020104', descricao: 'ORIENTAÇÃO DE HIGIENE BUCAL', classificacao: 'BPA-I', requerAnexoImagem: false },
  { codigo: '0101020120', descricao: 'ORIENTAÇÃO DE HIGIENIZAÇÃO DE PROTESES DENTARIAS', classificacao: 'BPA-I', requerAnexoImagem: false },
  { codigo: '0201010526', descricao: 'BIOPSIA DOS TECIDOS MOLES DA BOCA', classificacao: 'BPA-I', requerAnexoImagem: false },
  { codigo: '0204010217', descricao: 'RADIOGRAFIA INTERPROXIMAL (BITE WING)', classificacao: 'BPA-I', requerAnexoImagem: true },
  { codigo: '0204010225', descricao: 'RADIOGRAFIA PERIAPICAL', classificacao: 'BPA-I', requerAnexoImagem: true },
  { codigo: '0301090033', descricao: 'AVALIAÇÃO MULTIDIMENSIONAL DA PESSOA IDOSA', classificacao: 'BPA-I', requerAnexoImagem: false },
  { codigo: '0307010031', descricao: 'RESTAURAÇÃO DE DENTE PERMANENTE ANTERIOR COM RESINA COMPOSTA', classificacao: 'BPA-I', requerAnexoImagem: false },
  { codigo: '0307010074', descricao: 'TRATAMENTO RESTAURADOR ATRAUMATICO (TRA/ART)', classificacao: 'BPA-I', requerAnexoImagem: false },
  { codigo: '0307010082', descricao: 'RESTAURAÇÃO DE DENTE DECIDUO POSTERIOR COM RESINA COMPOSTA', classificacao: 'BPA-I', requerAnexoImagem: false },
  { codigo: '0307010090', descricao: 'RESTAURAÇÃO DE DENTE DECIDUO POSTERIOR COM AMALGAMA', classificacao: 'BPA-I', requerAnexoImagem: false },
  { codigo: '0307010104', descricao: 'RESTAURAÇÃO DE DENTE DECIDUO POSTERIOR COM IONOMERO DE VIDRO', classificacao: 'BPA-I', requerAnexoImagem: false },
  { codigo: '0307010112', descricao: 'RESTAURAÇÃO DE DENTE DECIDUO ANTERIOR COM RESINA COMPOSTA', classificacao: 'BPA-I', requerAnexoImagem: false },
  { codigo: '0307010120', descricao: 'RESTAURAÇÃO DE DENTE PERMANENTE POSTERIOR COM RESINA COMPOSTA', classificacao: 'BPA-I', requerAnexoImagem: false },
  { codigo: '0307010139', descricao: 'RESTAURAÇÃO DE DENTE PERMANENTE POSTERIOR COM AMALGAMA', classificacao: 'BPA-I', requerAnexoImagem: false },
  { codigo: '0307010147', descricao: 'ADEQUAÇÃO DO COMPORTAMENTO DA PESSOA COM DEFICIENCIA', classificacao: 'BPA-I', requerAnexoImagem: false },
  { codigo: '0307010155', descricao: 'ADEQUAÇÃO DO COMPORTAMENTO DE CRIANCAS', classificacao: 'BPA-I', requerAnexoImagem: false },
  { codigo: '0307030075', descricao: 'TRATAMENTO DE LESOES DA MUCOSA ORAL', classificacao: 'BPA-I', requerAnexoImagem: false },
  { codigo: '0309050162', descricao: 'SESSAO DE IMPOSICAO DE MAOS', classificacao: 'BPA-I', requerAnexoImagem: false },
  { codigo: '0404020054', descricao: 'DRENAGEM DE ABSCESSO DA BOCA E ANEXOS', classificacao: 'BPA-I', requerAnexoImagem: false },
  { codigo: '0404020097', descricao: 'EXCISAO E SUTURA DE LESAO NA BOCA', classificacao: 'BPA-I', requerAnexoImagem: false },
  { codigo: '0701070099', descricao: 'PROTESE PARCIAL MANDIBULAR REMOVIVEL', classificacao: 'BPA-I', requerAnexoImagem: false },
  { codigo: '0701070102', descricao: 'PROTESE PARCIAL MAXILAR REMOVIVEL', classificacao: 'BPA-I', requerAnexoImagem: false },
  { codigo: '0701070129', descricao: 'PROTESE TOTAL MANDIBULAR', classificacao: 'BPA-I', requerAnexoImagem: false },
  { codigo: '0701070137', descricao: 'PROTESE TOTAL MAXILAR', classificacao: 'BPA-I', requerAnexoImagem: false },

  // BPA-C
  { codigo: '0101010010', descricao: 'ATIVIDADE EDUCATIVA / ORIENTAÇÃO EM GRUPO NA ATENÇÃO PRIMARIA', classificacao: 'BPA-C', requerAnexoImagem: false },
  { codigo: '0101010028', descricao: 'ATIVIDADE EDUCATIVA / ORIENTAÇÃO EM GRUPO NA ATENÇÃO ESPECIALIZADA', classificacao: 'BPA-C', requerAnexoImagem: false },
  { codigo: '0101020015', descricao: 'AÇÃO COLETIVA DE APLICAÇÃO TOPICA DE FLUOR GEL', classificacao: 'BPA-C', requerAnexoImagem: false },
  { codigo: '0101020031', descricao: 'AÇÃO COLETIVA DE ESCOVAÇÃO DENTAL SUPERVISIONADA', classificacao: 'BPA-C', requerAnexoImagem: false },
  { codigo: '0101020040', descricao: 'AÇÃO COLETIVA DE EXAME BUCAL COM FINALIDADE EPIDEMIOLOGICA', classificacao: 'BPA-C', requerAnexoImagem: false },
  { codigo: '0101020058', descricao: 'APLICAÇÃO DE CARIOSTATICO (POR DENTE)', classificacao: 'BPA-C', requerAnexoImagem: false },
  { codigo: '0101020066', descricao: 'APLICAÇÃO DE SELANTE (POR DENTE)', classificacao: 'BPA-C', requerAnexoImagem: false },
  { codigo: '0101020074', descricao: 'APLICAÇÃO TÓPICA DE FLÚOR (INDIVIDUAL POR SESSÃO)', classificacao: 'BPA-C', requerAnexoImagem: false },
  { codigo: '0101020082', descricao: 'EVIDENCIAÇÃO DE PLACA BACTERIANA', classificacao: 'BPA-C', requerAnexoImagem: false },
  { codigo: '0101020090', descricao: 'SELAMENTO PROVISORIO DE CAVIDADE DENTARIA', classificacao: 'BPA-C', requerAnexoImagem: false },
  { codigo: '0204010179', descricao: 'RADIOGRAFIA PANORAMICA', classificacao: 'BPA-C', requerAnexoImagem: true },
  { codigo: '0301010030', descricao: 'CONSULTA DE PROFISSIONAIS DE NIVEL SUPERIOR NA ATENÇÃO PRIMARIA (EXCETO MEDICO)', classificacao: 'BPA-C', requerAnexoImagem: false },
  { codigo: '0301010048', descricao: 'CONSULTA DE PROFISSIONAIS DE NIVEL SUPERIOR NA ATENÇÃO ESPECIALIZADA (EXCETO MEDICO)', classificacao: 'BPA-C', requerAnexoImagem: false },
  { codigo: '0301010137', descricao: 'CONSULTA/ATENDIMENTO DOMICILIAR', classificacao: 'BPA-C', requerAnexoImagem: false },
  { codigo: '0301010153', descricao: 'PRIMEIRA CONSULTA ODONTOLOGICA PROGRAMATICA', classificacao: 'BPA-C', requerAnexoImagem: false },
  { codigo: '0301060037', descricao: 'ATENDIMENTO DE URGENCIA EM ATENÇÃO BASICA', classificacao: 'BPA-C', requerAnexoImagem: false },
  { codigo: '0301060061', descricao: 'ATENDIMENTO DE URGENCIA EM ATENÇÃO ESPECIALIZADA', classificacao: 'BPA-C', requerAnexoImagem: false },
  { codigo: '0301100039', descricao: 'AFERIÇÃO DE PRESSÃO ARTERIAL', classificacao: 'BPA-C', requerAnexoImagem: false },
  { codigo: '0301100152', descricao: 'RETIRADA DE PONTOS DE CIRURGIAS (POR PACIENTE)', classificacao: 'BPA-C', requerAnexoImagem: false },
  { codigo: '0307010015', descricao: 'CAPEAMENTO PULPAR', classificacao: 'BPA-C', requerAnexoImagem: false },
  { codigo: '0307010058', descricao: 'TRATAMENTO DE NEVRALGIAS FACIAIS', classificacao: 'BPA-C', requerAnexoImagem: false },
  { codigo: '0307020010', descricao: 'ACESSO A POLPA DENTARIA E MEDICAÇÃO (POR DENTE)', classificacao: 'BPA-C', requerAnexoImagem: false },
  { codigo: '0307020029', descricao: 'CURATIVO DE DEMORA C/ OU S/ PREPARO BIOMECANICO', classificacao: 'BPA-C', requerAnexoImagem: false },
  { codigo: '0307020037', descricao: 'TRATAMENTO ENDODONTICO DE DENTE DECIDUO', classificacao: 'BPA-C', requerAnexoImagem: false },
  { codigo: '0307020045', descricao: 'TRATAMENTO ENDODONTICO DE DENTE PERMANENTE BIRRADICULAR', classificacao: 'BPA-C', requerAnexoImagem: false },
  { codigo: '0307020053', descricao: 'TRATAMENTO ENDODONTICO DE DENTE PERMANENTE COM TRES OU MAIS RAIZES', classificacao: 'BPA-C', requerAnexoImagem: false },
  { codigo: '0307020061', descricao: 'TRATAMENTO ENDODONTICO DE DENTE PERMANENTE UNIRRADICULAR', classificacao: 'BPA-C', requerAnexoImagem: false },
  { codigo: '0307020070', descricao: 'PULPOTOMIA DENTARIA', classificacao: 'BPA-C', requerAnexoImagem: false },
  { codigo: '0307020088', descricao: 'RETRATAMENTO ENDODONTICO EM DENTE PERMANENTE BI-RADICULAR', classificacao: 'BPA-C', requerAnexoImagem: false },
  { codigo: '0307020096', descricao: 'RETRATAMENTO ENDODONTICO EM DENTE PERMANENTE COM 3 OU MAIS RAIZES', classificacao: 'BPA-C', requerAnexoImagem: false },
  { codigo: '0307020100', descricao: 'RETRATAMENTO ENDODONTICO EM DENTE PERMANENTE UNI-RADICULAR', classificacao: 'BPA-C', requerAnexoImagem: false },
  { codigo: '0307020118', descricao: 'SELAMENTO DE PERFURAÇÃO RADICULAR', classificacao: 'BPA-C', requerAnexoImagem: false },
  { codigo: '0307030024', descricao: 'RASPAGEM ALISAMENTO SUBGENGIVAIS (POR SEXTANTE)', classificacao: 'BPA-C', requerAnexoImagem: false },
  { codigo: '0307030032', descricao: 'RASPAGEM CORONO-RADICULAR (POR SEXTANTE)', classificacao: 'BPA-C', requerAnexoImagem: false },
  { codigo: '0307030040', descricao: 'PROFILAXIA / REMOCAO DA PLACA BACTERIANA', classificacao: 'BPA-C', requerAnexoImagem: false },
  { codigo: '0307030059', descricao: 'RASPAGEM ALISAMENTO E POLIMENTO SUPRAGENGIVAIS (POR SEXTANTE)', classificacao: 'BPA-C', requerAnexoImagem: false },
  { codigo: '0307040070', descricao: 'MOLDAGEM DENTO-GENGIVAL P/ CONSTRUCAO DE PROTESE DENTARIA', classificacao: 'BPA-C', requerAnexoImagem: false },
  { codigo: '0307040089', descricao: 'REEMBASAMENTO E CONSERTO DE PROTESE DENTARIA', classificacao: 'BPA-C', requerAnexoImagem: false },
  { codigo: '0307040143', descricao: 'ADAPTAÇÃO DE PROTESE DENTARIA', classificacao: 'BPA-C', requerAnexoImagem: false },
  { codigo: '0307040151', descricao: 'AJUSTE OCLUSAL', classificacao: 'BPA-C', requerAnexoImagem: false },
  { codigo: '0307040160', descricao: 'INSTALAÇÃO DE PROTESE DENTARIA', classificacao: 'BPA-C', requerAnexoImagem: false },
  { codigo: '0401010031', descricao: 'DRENAGEM DE ABSCESSO', classificacao: 'BPA-C', requerAnexoImagem: false },
  { codigo: '0401010066', descricao: 'EXCISAO E/OU SUTURA SIMPLES DE PEQUENAS LESOES / FERIMENTOS DE PELE / ANEXOS E MUCOSA', classificacao: 'BPA-C', requerAnexoImagem: false },
  { codigo: '0401010082', descricao: 'FRENECTOMIA/FRENOTOMIA', classificacao: 'BPA-C', requerAnexoImagem: false },
  { codigo: '0404020445', descricao: 'CONTENCAO DE DENTES POR SPLINTAGEM', classificacao: 'BPA-C', requerAnexoImagem: false },
  { codigo: '0404020488', descricao: 'OSTEOTOMIA DAS FRATURAS ALVEOLO-DENTARIAS', classificacao: 'BPA-C', requerAnexoImagem: false },
  { codigo: '0404020615', descricao: 'REDUCAO DE LUXAÇÃO TEMPORO-MANDIBULAR', classificacao: 'BPA-C', requerAnexoImagem: false },
  { codigo: '0404020623', descricao: 'RETIRADA DE MATERIAL DE SINTESE OSSEA / DENTARIA', classificacao: 'BPA-C', requerAnexoImagem: false },
  { codigo: '0414020030', descricao: 'APROFUNDAMENTO DE VESTIBULO ORAL (POR SEXTANTE)', classificacao: 'BPA-C', requerAnexoImagem: false },
  { codigo: '0414020049', descricao: 'CORREÇÃO DE BRIDAS MUSCULARES', classificacao: 'BPA-C', requerAnexoImagem: false },
  { codigo: '0414020057', descricao: 'CORREÇÃO DE IRREGULARIDADES DE REBORDO ALVEOLAR', classificacao: 'BPA-C', requerAnexoImagem: false },
  { codigo: '0414020065', descricao: 'CORREÇÃO DE TUBEROSIDADE DO MAXILAR', classificacao: 'BPA-C', requerAnexoImagem: false },
  { codigo: '0414020073', descricao: 'CURETAGEM PERIAPICAL', classificacao: 'BPA-C', requerAnexoImagem: false },
  { codigo: '0414020081', descricao: 'ENXERTO GENGIVAL', classificacao: 'BPA-C', requerAnexoImagem: false },
  { codigo: '0414020090', descricao: 'ENXERTO OSSEO DE AREA DOADORA INTRABUCAL', classificacao: 'BPA-C', requerAnexoImagem: false },
  { codigo: '0414020120', descricao: 'EXODONTIA DE DENTE DECIDUO', classificacao: 'BPA-C', requerAnexoImagem: false },
  { codigo: '0414020138', descricao: 'EXODONTIA DE DENTE PERMANENTE', classificacao: 'BPA-C', requerAnexoImagem: false },
  { codigo: '0414020146', descricao: 'EXODONTIA MULTIPLA COM ALVEOLOPLASTIA POR SEXTANTE', classificacao: 'BPA-C', requerAnexoImagem: false },
  { codigo: '0414020154', descricao: 'GENGIVECTOMIA (POR SEXTANTE)', classificacao: 'BPA-C', requerAnexoImagem: false },
  { codigo: '0414020162', descricao: 'GENGIVOPLASTIA (POR SEXTANTE)', classificacao: 'BPA-C', requerAnexoImagem: false },
  { codigo: '0414020170', descricao: 'GLOSSORRAFIA', classificacao: 'BPA-C', requerAnexoImagem: false },
  { codigo: '0414020200', descricao: 'MARSUPIALIZAÇÃO DE CISTOS E PSEUDOCISTOS', classificacao: 'BPA-C', requerAnexoImagem: false },
  { codigo: '0414020219', descricao: 'ODONTOSECCAO / RADILECTOMIA / TUNELIZAÇÃO', classificacao: 'BPA-C', requerAnexoImagem: false },
  { codigo: '0414020243', descricao: 'REIMPLANTE E TRANSPLANTE DENTAL (POR ELEMENTO)', classificacao: 'BPA-C', requerAnexoImagem: false },
  { codigo: '0414020278', descricao: 'REMOCAO DE DENTE RETIDO (INCLUSO / IMPACTADO)', classificacao: 'BPA-C', requerAnexoImagem: false },
  { codigo: '0414020294', descricao: 'REMOCAO DE TORUS E EXOSTOSES', classificacao: 'BPA-C', requerAnexoImagem: false },
  { codigo: '0414020359', descricao: 'TRATAMENTO CIRURGICO DE HEMORRAGIA BUCO-DENTAL', classificacao: 'BPA-C', requerAnexoImagem: false },
  { codigo: '0414020375', descricao: 'TRATAMENTO CIRURGICO PERIODONTAL (POR SEXTANTE)', classificacao: 'BPA-C', requerAnexoImagem: false },
  { codigo: '0414020383', descricao: 'TRATAMENTO DE ALVEOLITE', classificacao: 'BPA-C', requerAnexoImagem: false },
  { codigo: '0414020405', descricao: 'ULOTOMIA/ULECTOMIA', classificacao: 'BPA-C', requerAnexoImagem: false },
];

// Códigos que requerem anexo de imagem
export const CODIGOS_COM_IMAGEM = new Set(['0204010217', '0204010225', '0204010179']);

export function procedimentoRequerImagem(codigo: string): boolean {
  return CODIGOS_COM_IMAGEM.has(codigo);
}

export function buscarProcedimento(codigo: string): ProcedimentoSUS | undefined {
  return PROCEDIMENTOS_SUS.find(p => p.codigo === codigo);
}

export function buscarProcedimentos(termo: string): ProcedimentoSUS[] {
  const lower = termo.toLowerCase();
  return PROCEDIMENTOS_SUS.filter(
    p => p.codigo.includes(termo) || p.descricao.toLowerCase().includes(lower)
  );
}
