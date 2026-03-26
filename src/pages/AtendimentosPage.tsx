import { useState } from 'react';
import { useApp } from '@/contexts/AppContext';
import { ProcedimentoAtendimento } from '@/types';
import { buscarProcedimentos, buscarProcedimento } from '@/data/procedimentos-sus';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Plus, X, Search } from 'lucide-react';
import { toast } from 'sonner';

export default function AtendimentosPage() {
  const { atendimentos, profissionais, pacientes, addAtendimento, getPaciente, getProfissional } = useApp();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [pacienteId, setPacienteId] = useState('');
  const [profissionalId, setProfissionalId] = useState('');
  const [dataAtendimento, setDataAtendimento] = useState('');
  const [procedimentos, setProcedimentos] = useState<ProcedimentoAtendimento[]>([]);
  const [procSearch, setProcSearch] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [search, setSearch] = useState('');

  const procResults = procSearch.length >= 2 ? buscarProcedimentos(procSearch) : [];

  const filteredAtendimentos = atendimentos.filter(a => {
    const pac = getPaciente(a.pacienteId);
    return pac?.nomeCompleto.toLowerCase().includes(search.toLowerCase()) || a.dataAtendimento.includes(search);
  });

  function addProc(codigo: string) {
    const proc = buscarProcedimento(codigo);
    if (!proc) {
      toast.error('Código SUS inválido.');
      return;
    }
    if (procedimentos.some(p => p.codigoSUS === codigo)) {
      toast.error('Procedimento já adicionado.');
      return;
    }
    setProcedimentos(prev => [...prev, {
      codigoSUS: proc.codigo,
      descricao: proc.descricao,
      classificacao: proc.classificacao,
      quantidade: 1,
    }]);
    setProcSearch('');
  }

  function removeProc(codigo: string) {
    setProcedimentos(prev => prev.filter(p => p.codigoSUS !== codigo));
  }

  function handleSubmit() {
    const e: Record<string, string> = {};
    if (!pacienteId) e.paciente = 'Selecione um paciente';
    if (!profissionalId) e.profissional = 'Selecione um profissional';
    if (!dataAtendimento) e.data = 'Informe a data do atendimento';
    if (procedimentos.length === 0) e.procedimentos = 'Adicione ao menos um procedimento';
    setErrors(e);
    if (Object.keys(e).length > 0) return;

    addAtendimento({ pacienteId, profissionalId, dataAtendimento, procedimentos });
    toast.success('Atendimento registrado com sucesso!');
    setDialogOpen(false);
    setPacienteId('');
    setProfissionalId('');
    setDataAtendimento('');
    setProcedimentos([]);
    setErrors({});
  }

  function openNew() {
    setPacienteId('');
    setProfissionalId('');
    setDataAtendimento(new Date().toISOString().split('T')[0]);
    setProcedimentos([]);
    setErrors({});
    setDialogOpen(true);
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Atendimentos</h1>
          <p className="text-sm text-muted-foreground">Registre atendimentos odontológicos</p>
        </div>
        <Button onClick={openNew} className="gap-2" disabled={pacientes.length === 0 || profissionais.length === 0}>
          <Plus className="h-4 w-4" /> Novo Atendimento
        </Button>
      </div>

      {(pacientes.length === 0 || profissionais.length === 0) && (
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-warning">
              ⚠️ Para registrar atendimentos, cadastre ao menos um profissional e um paciente.
            </p>
          </CardContent>
        </Card>
      )}

      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input placeholder="Buscar atendimentos..." value={search} onChange={e => setSearch(e.target.value)} className="pl-9" />
      </div>

      <Card>
        <CardContent className="p-0">
          {filteredAtendimentos.length === 0 ? (
            <div className="p-8 text-center text-sm text-muted-foreground">Nenhum atendimento registrado.</div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Data</TableHead>
                  <TableHead>Paciente</TableHead>
                  <TableHead className="hidden md:table-cell">Profissional</TableHead>
                  <TableHead>Procedimentos</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredAtendimentos.slice().reverse().map(a => {
                  const pac = getPaciente(a.pacienteId);
                  const prof = getProfissional(a.profissionalId);
                  return (
                    <TableRow key={a.id}>
                      <TableCell>{new Date(a.dataAtendimento + 'T00:00:00').toLocaleDateString('pt-BR')}</TableCell>
                      <TableCell className="font-medium">{pac?.nomeCompleto || '—'}</TableCell>
                      <TableCell className="hidden md:table-cell">{prof?.nomeCompleto || '—'}</TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {a.procedimentos.map(p => (
                            <Badge key={p.codigoSUS} variant={p.classificacao === 'BPA-C' ? 'default' : 'secondary'} className="text-[10px]">
                              {p.classificacao}
                            </Badge>
                          ))}
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Novo Atendimento</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label>Paciente *</Label>
                <Select value={pacienteId} onValueChange={setPacienteId}>
                  <SelectTrigger><SelectValue placeholder="Selecione" /></SelectTrigger>
                  <SelectContent>
                    {pacientes.map(p => <SelectItem key={p.id} value={p.id}>{p.nomeCompleto}</SelectItem>)}
                  </SelectContent>
                </Select>
                {errors.paciente && <p className="mt-1 text-xs text-destructive">{errors.paciente}</p>}
              </div>
              <div>
                <Label>Profissional *</Label>
                <Select value={profissionalId} onValueChange={setProfissionalId}>
                  <SelectTrigger><SelectValue placeholder="Selecione" /></SelectTrigger>
                  <SelectContent>
                    {profissionais.map(p => <SelectItem key={p.id} value={p.id}>{p.nomeCompleto}</SelectItem>)}
                  </SelectContent>
                </Select>
                {errors.profissional && <p className="mt-1 text-xs text-destructive">{errors.profissional}</p>}
              </div>
            </div>

            <div>
              <Label>Data do Atendimento *</Label>
              <Input type="date" value={dataAtendimento} onChange={e => setDataAtendimento(e.target.value)} />
              {errors.data && <p className="mt-1 text-xs text-destructive">{errors.data}</p>}
            </div>

            <div>
              <Label>Procedimentos SUS *</Label>
              <div className="relative">
                <Input
                  placeholder="Buscar por código ou descrição..."
                  value={procSearch}
                  onChange={e => setProcSearch(e.target.value)}
                />
                {procResults.length > 0 && (
                  <div className="absolute z-10 mt-1 max-h-48 w-full overflow-auto rounded-md border border-border bg-card shadow-lg">
                    {procResults.map(p => (
                      <button
                        key={p.codigo}
                        className="flex w-full items-center justify-between gap-2 px-3 py-2 text-left text-sm hover:bg-muted"
                        onClick={() => addProc(p.codigo)}
                      >
                        <span><span className="font-mono text-xs text-muted-foreground">{p.codigo}</span> — {p.descricao}</span>
                        <Badge variant={p.classificacao === 'BPA-C' ? 'default' : 'secondary'} className="shrink-0 text-[10px]">{p.classificacao}</Badge>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              {errors.procedimentos && <p className="mt-1 text-xs text-destructive">{errors.procedimentos}</p>}
            </div>

            {procedimentos.length > 0 && (
              <div className="space-y-2 rounded-md border border-border p-3">
                {procedimentos.map(p => (
                  <div key={p.codigoSUS} className="flex items-center justify-between gap-2 text-sm">
                    <div className="flex-1">
                      <span className="font-mono text-xs text-muted-foreground">{p.codigoSUS}</span>
                      <span className="ml-2">{p.descricao}</span>
                    </div>
                    <Badge variant={p.classificacao === 'BPA-C' ? 'default' : 'secondary'} className="text-[10px]">{p.classificacao}</Badge>
                    <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => removeProc(p.codigoSUS)}>
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                ))}
              </div>
            )}

            <div className="flex justify-end gap-2 pt-2">
              <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancelar</Button>
              <Button onClick={handleSubmit}>Registrar Atendimento</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
