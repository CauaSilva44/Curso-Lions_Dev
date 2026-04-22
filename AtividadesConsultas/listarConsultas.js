function listarConsultas(consultas, medicos, pacientes) {
    if( consultas.listarConsultas === 0) {
        console.log("Nenhuma consulta agendada.")
        return
    }

    


    consultas.forEach(consultas => {
        let medico = medicos.find(m =>
            m.id === consultas.idMedico);
        let paciente = pacientes.find(p =>
            p.id === consultas.idPaciente);


        console.log(`\nID: ${consultas.id}`)
        console.log(`Data da Consulta: ${consultas.data}`)
        console.log(`ID do Medico: ${medico ? medico.nome : "Não Encontrado"}`)
        console.log(`ID do Paciente: ${paciente? paciente.nome: "Não encontrado"}`) 
        console.log(`Descrição da Consulta: ${consultas.descricao}`)
    });
}

export default listarConsultas