const Exemple = () => {
    const token = localStorage.getItem("jwt-token");

    return <di>{JSON.stringify(token)} </di>
}

export default Exemple;