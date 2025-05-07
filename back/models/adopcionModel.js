var pool = require("./bd");

async function getAdopcion() {
    var query = 'select * from adopcion';
    var rows = await pool.query(query);
    return rows;
}

async function insertAdopcion(obj) {
    try {
        var query = "insert into adopcion set ?";
        var rows = await pool.query(query, [obj])
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function deleteAdopcionById(id) {
    var query = 'delete from adopcion where id = ?';
    var rows = await pool.query(query, [id]);
    return rows;
}


/*Modificacion*/
async function getAdopcionById(id) {
    var query = 'select * from adopcion where id = ?';
    var rows = await pool.query(query, [id]);
    return rows[0];
}

async function modificarAdopcionById(obj, id) {
    try {
        var query = 'update adopcion set ? where id=?';
        var rows = await pool.query(query,[obj, id]);
        return rows;
    } catch (error) {
        throw error;
    }
}

module.exports = { getAdopcion, insertAdopcion, deleteAdopcionById, getAdopcionById, modificarAdopcionById }