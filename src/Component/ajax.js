class ajax {
    constructor(username, pass) {
        let conection;
        if (window.XMLHttpRequest) {
            conection = new XMLHttpRequest()
        } else {
            alert('Can not connect to server')
            return
        }
        conection.open("POST", 'https://example.com')

    }
}
export default ajax