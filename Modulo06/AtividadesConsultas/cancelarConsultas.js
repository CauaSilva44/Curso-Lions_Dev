function cancelarConsulta(consultas, id) {
    const index = consultas.findIndex(consultas => consultas.id === id)

    if(index !== -1) {
        consultas.splice(index,1)
    }
}

export default cancelarConsulta