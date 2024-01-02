const getAllLibros = () => {
    return db.query("select * from Libros");
};

const libroByid = (libroId) => {
    return db.query("select * from Libros where id = ?", [libroId]);
};


const deleteById = (libroId) => {
    return db.query("delete from Libros where id = ?", [libroId]);
};

const getById = (libroId) => {
    return db.query("select * from Libros where id = ?", [libroId]);
};

const updateById = (
    libroId,
    {
        titulo,
        autor,
        imagen,
        genero,
        puntuacion,
        feche_inicio,
        fecha_fin,
        comentarios,
    }
) => {
    return db.query(
        "update Libros set titulo = ?, autor = ?, imagen = ?, genero = ?, puntuacion = ?, feche_inicio = ?, fecha_fin = ?, comentarios= ? where id = ?",
        [
            titulo,
            autor,
            imagen,
            genero,
            puntuacion,
            feche_inicio,
            fecha_fin,
            comentarios,
            libroId,
        ]
    );
};

const insert = ({
    titulo,
    autor,
    imagen,
    genero,
    puntuacion,
    feche_inicio,
    fecha_fin,
    comentarios
}) => {
    return db.query(
        "insert into Libros (titulo, autor, imagen, genero, puntuacion, feche_inicio, fecha_fin, comentarios) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
            titulo,
            autor,
            imagen,
            genero,
            puntuacion,
            feche_inicio,
            fecha_fin,
            comentarios,
        ]
    );
};



module.exports = {
    getAllLibros,
    libroByid,
    deleteById,
    updateById,
    getById,
    insert,
};
