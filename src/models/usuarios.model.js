

const getByEmail = (email) => {
    return db.query("select * from usuarios where email = ?", [email]);
}

const usuarioById = (id) => {
    return db.query("select * from usuarios where id = ?", [id]);
};

const deleteById = (usuarioId) => {
    return db.query("delete from usuarios where id = ?", [usuarioId]);
};

const getById = (usuarioId) => {
    return db.query("select * from usuarios where id = ?", [usuarioId]);
};


const updateById = (
    usuarioId,
    { nombre, email, contraseña }
) => {
    return db.query(
        "update usuarios set nombre = ?, email = ?, contraseña = ? where id = ?",
        [nombre, email, contraseña, usuarioId]
    );
};

const insert = ({
    nombre,
    email,
    contraseña,
}) => {
    return db.query(
        "insert into usuarios (nombre, email, contraseña) values (?, ?, ?)",
        [nombre, email, contraseña]
    );
};

module.exports = {
    getByEmail,
    usuarioById,
    deleteById,
    updateById,
    getById,
    insert,
};
