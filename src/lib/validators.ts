export function validarCPF(cpf: string): boolean {
  const cleaned = cpf.replace(/\D/g, '');
  if (cleaned.length !== 11) return false;
  if (/^(\d)\1{10}$/.test(cleaned)) return false;

  let sum = 0;
  for (let i = 0; i < 9; i++) sum += parseInt(cleaned[i]) * (10 - i);
  let remainder = (sum * 10) % 11;
  if (remainder === 10) remainder = 0;
  if (remainder !== parseInt(cleaned[9])) return false;

  sum = 0;
  for (let i = 0; i < 10; i++) sum += parseInt(cleaned[i]) * (11 - i);
  remainder = (sum * 10) % 11;
  if (remainder === 10) remainder = 0;
  if (remainder !== parseInt(cleaned[10])) return false;

  return true;
}

export function formatarCPF(cpf: string): string {
  const cleaned = cpf.replace(/\D/g, '');
  return cleaned.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}

export function validarCNS(cns: string): boolean {
  const cleaned = cns.replace(/\D/g, '');
  if (cleaned.length !== 15) return false;
  // Basic CNS validation: starts with 1, 2, 7, 8, or 9
  return ['1', '2', '7', '8', '9'].includes(cleaned[0]);
}

export function validarRegistroProfissional(registro: string): boolean {
  const cleaned = registro.replace(/\D/g, '');
  return cleaned.length >= 4 && cleaned.length <= 10;
}

export function gerarId(): string {
  return crypto.randomUUID();
}

export function formatarData(data: string): string {
  if (!data) return '';
  const date = new Date(data + 'T00:00:00');
  return date.toLocaleDateString('pt-BR');
}
