let response = { user: {}, error: {} }
const validatorDNI = (dni) => {
    var x = dni.replace(/[A-Za-z-,.()<>!@#$%^&*_=+?]/g, '');
    let format = x

    if (dni.length < 11) return { value: x, boolean: false, format, response };

    let first = x.slice(0, 3)
    let second = x.slice(3, 10)
    let tree = x.slice(x.length - 1)


    if (x.length >= 11) {
        x = `${first}${second}${tree}`
        format = `${first}-${second}-${tree}`
        getDni(x)
    }

    if (format.length - 1 == 11) format = `${first}-${second}`

    return { value: x, boolean: true, format, response }

}
/**
 * 
 * @param {string} x  
 */
const getDni = (x) => {
    fetch(`https://api.adamix.net/apec/cedula/${x}`)
        .then(response => response.json())
        .then(data => {

            return response.user = data

        }).catch(error => {
            return response.error = error
        })
}

