const Libro = require("../models/libros.model");
const NodeGeocoder = require('node-geocoder');

const options = {
    provider: 'google',
    apiKey: 'AIzaSyBMOcTcAkobrlfKIBOJNz6lDw2R5fJsk_Q',
};




const getAll = async (req, res) => {
    try {
        const [libros] = await Libro.getAllLibros();
        res.json(libros);
    } catch (error) {
        res.json({ fatal: error.message });
    }
};

const getById = async (req, res) => {

    const [libro] = await Libro.libroByid(req.params.libroId);

    if (libro.length === 0) {
        return res.json({ fatal: "no existe este libro" });
    };

    res.json(libro[0]);
};


const remove = async (req, res) => {
    try {
        const { libroId } = req.params;

        const [result] = await Libro.deleteById(libroId);

        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }
};


const update = async (req, res) => {
    try {
        const { libroId } = req.params;
        const [result] = await Libro.updateById(libroId, req.body);
        const [libros] = await Libro.getById(libroId);

        res.json(libros[0])
    } catch (error) {
        res.json({ fatal: error.message })
    }
}


const create = async (req, res) => {
    try {

        const [result] = await Libro.insert(req.body);
        console.log(result)
        const [libros] = await Libro.getById(result.insertId);

        res.json(libros[0])

    } catch (error) {
        res.json({ fatal: error.message });
    }
};



module.exports = {
    getAll,
    getById,
    remove,
    update,
    create,
};
