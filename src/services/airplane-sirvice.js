const {StatusCodes} = require('http-status-codes');
const { AirplaneRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');

const airplanerepositry = new AirplaneRepository();
async function createAirplane(data){
    try {
        const airplane = await airplanerepositry.createData(data);
        return airplane;
    } catch (error) {
        console.log(error);
        if(error.name == 'SequelizeValidationError'){
            let explanation = [];
            error.errors.forEach(err => {
                explanation.push(err.message);
            });
            console.log(explanation);
            throw new AppError(explanation,StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create the new airplane object',StatusCodes.INTERNAL_SERVER_ERROR);
        
    }
}

module.exports = {
    createAirplane
}