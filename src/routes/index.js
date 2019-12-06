import {productsModel} from "../db/products";

export default (app) => {
    app.get('/', async (req, res) => {
        try {
            const products = await productsModel.find()
            res.status(200).json(products)
        } catch (error) {
            console.log(error.message)
            return res.status(500).json({
                'error': true,
                'message': 'Error requesting products'
            })

        }

        //do something
        console.log('trying to access Products data')
    })

    app.get('/products/:bar_code', async (req, res) => {
        try {
            const barCode = req.params.bar_code
            const product = await productsModel.findOne({bar_code: barCode})
            if (product) {
                res.status(200).json(product)
            } else {
                res.status(404).json({
                    'error': true,
                    'message': ` probleme with barCode ${barCode}`
                })

            }

        } catch (error) {
            console.log(error.message)
            return res.status(500).json({
                'error': true,
                'message': `Error requesting product ${barCode}`
            })

        }

        //do something
        console.log('trying to access Products by bar code  ')
    })
}