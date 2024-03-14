import {read, write} from "../utils/index.js"

export default {
    get: (_, res) => {
        const allFruit = read('fruits.json')
        res.render('fruits.ejs', { allFruit })
    },
    post: (req, res) => {
        const { fruit_name, price } = req.body

        if (!fruit_name && !price) {return res.status(400).json({message:"all fields are required"})}

        const allFruit = read('fruits.json')

        if (allFruit.find(fruit => fruit.fruit_name == fruit_name)) {
            return res.status(400).json({
                message: "This fruit already exists"
            })
        } else {
            allFruit.push({
                id: allFruit.at(-1)?.id + 1 || 1, 
                fruit_name,
                price
            })

            write('fruits.json', allFruit)

            res.redirect('/wiut/fruit')
        }
    },
    update: (req, res) => {
        const { id } = req.params
        const {  fruit_name, price  } = req.body

        if (!fruit_name || !price) {
            return res.status(400).json({ message: "Fruit details are required to update" });
        }

        const allfruits = read('fruits.json')

        const fruitIndex = allfruits.findIndex(fruit => fruit.id == +id)

        if (fruitIndex == -1) {
            return res.status(404).json({
                message: "fruit not found"
            })
        } else {
            allfruits[fruitIndex] = {
                id: +id,
                fruit_name: fruit_name || allfruits[fruitIndex].fruit_name,
                price: price || allfruits[fruitIndex].price
            }

            write('fruits.json', allfruits)

            res.redirect('/wiut/fruit');
        }
    },
    delete: (req, res) => {
        const { id } = req.params

        const allfruits = read('fruits.json')

        const fruitIndex = allfruits.findIndex(fruit => fruit.id == id)

        if (fruitIndex == -1) {
            return res.status(404).json({
                message: "fruit not found"
            })
        } else {
            allfruits.splice(fruitIndex, 1)

            write('fruits.json', allfruits)

            res.redirect('/wiut/fruit')
        }
    }
}