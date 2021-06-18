const Item = require('../model/Item');
const serializeItems = require('../serializers/ItemSerializer');

const indexItem = (req, res, next) => {
    Item.find()
        .then(items => {
            res.status(200).json({
                items: items
            });
        })
        .catch(err => {
            res.status(500).json(err.json());
        });
};

const createItem = (req, res, next) => {
    let {
        name,
        price,
        stock
    } = req.body;

    Item.create({name, price, stock})
        .then(() => {
            res.status(201).json({
                msg: "success"
            });
        })
        .catch(err => {
            let errors = [];
            console.log(err.errors);
            for (const attr in err.errors) {
                errors.push(err.errors[attr].message);
            }
            res.status(422).json({
                err: errors
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                err: 'internal_error'
            });
        });
};

module.exports = {
    indexItem,
    createItem
}