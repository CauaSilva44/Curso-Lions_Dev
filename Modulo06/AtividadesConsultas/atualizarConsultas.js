function atualizarConsulta(consultas, id, novosDados, medicos, pacientes) {    
    const index = consultas.findIndex(c => c.id === id)
    if(index === -1) {
        console.log("Consulta não encontrada!")
        return false
    }

    let consulta = consultas[index]

    if(novosDados.idMedico) {
        let medicoExiste = medicos.find(m => m.id === Number(novosDados.idMedico));

        if(!medicoExiste) {
            console.log("Médico não registrado no sistema.")
            return false
        }

        consulta.idMedico = Number(novosDados.idMedico)
    }

    if(novosDados.idPaciente) {
        let pacienteExiste = pacientes.find(p => p.id === Number(novosDados.idPaciente))

        if(!pacienteExiste) {
            console.log("Ṕaciente não registrado no sistema;")
            return false
        }

        consulta.idPaciente = Number(novosDados.idPaciente)
    }


    
    consultas[index].data = novosDados.novaData || consultas[index].data
    consultas[index].idMedico = novosDados.idMedico || consultas[index].idMedico
    consultas[index].idPaciente = novosDados.idPaciente || consultas[index].idPaciente
    consultas[index].descricao = novosDados.descricao || consultas[index.descricao]

    return
}

export default atualizarConsulta