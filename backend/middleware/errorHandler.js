
const errorHandler = (err, req, res, next)=>{
    let statusCode = res.statusCode? res.statusCode: 500

    switch (statusCode) {
        case 400:
            console.log({title: "Validation Failed", message: err.message, stake: err.stake})
            break;
        
        case 401:
            console.log({title: "Unauthorized Access", message: err.message, stake: err.stake})
            break;

        case 400:
            console.log({title: "Forbidden", message: err.message, stake: err.stake})
            break;

        case 404:
            console.log({title: "Not Found", message: err.message, stake: err.stake})
            break;
    
        default:
            break;
    }

}

module.exports = errorHandler