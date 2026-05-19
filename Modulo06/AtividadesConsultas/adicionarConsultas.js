function adicionarConsulta (consultas, novaConsulta, medicos, pacientes) {
console.log(medicos)

    let idMedicoExiste = false
    for(let i = 0; i < medicos.length; i++) {

        if(medicos[i].id === novaConsulta.idMedico ) {
            idMedicoExiste = true
            break
        }
    }
    
    if(!idMedicoExiste) {
        console.log("O id desse médico não está registrado no sistema.")
        return false
    }

    let idPacienteExiste = false
    for(let i = 0; i < pacientes.length; i++) {
        if(pacientes[i].id === novaConsulta.idPaciente ) {
            idPacienteExiste = true
            break
        }
    }

    if(!idPacienteExiste) {
        console.log("O id desse paciente não está registrado no sistema.")
        return false
    }
    
    if (consultas.length > 0) {
        let ultimaConsulta = consultas[consultas.length - 1]
        novaConsulta.id = ultimaConsulta.id + 1
    } else {
        novaConsulta.id = 1
    }

    consultas.push(novaConsulta)
    return true;
}

export default adicionarConsulta