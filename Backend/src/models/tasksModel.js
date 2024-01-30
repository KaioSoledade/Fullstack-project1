const connection = require('./connection');

const getAll = async () => {
    const tasks = await connection.execute(~'SELECT * FROM tasks');
    return tasks;
};
module.exports = {
    getAll
};

// (async) significa assíncrona
// (await) significa esperar concluir para poder executar