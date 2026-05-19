const medicos = [
    {id: 1, nome: 'Dr. Jacinto', especialidade: 'Diagnóstico' },
    {id: 2, nome: 'Dr. Cansado', especialidade: 'Cirurgia' }, 
]

const pacientes = [
    {id: 1, nome: 'John Pork', dataNascimento: '1985-01-15' },
    {id: 2, nome: 'Robert Richard', dataNascimento: '1978- 05-29' },
]

let consultas = [
    {id: 1, data: '2026-04-17', idMedico: 1, idPaciente:1, descricao: 'Consulta inicial' },
    {id: 2, data: '2026-04-24', idMedico: 2, idPaciente:1, descricao: 'Seguimento' },
    {id: 3, data: '2026-03-02', idMedico: 1, idPaciente:2, descricao: 'Consulta de Rotina' }
] 

export default { medicos, pacientes, consultas}