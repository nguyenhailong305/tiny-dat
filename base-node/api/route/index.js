const ItemController = require('../controller/index')

const routers = (app) => {
    app.route('/item').get(ItemController.getItem)
    app.route('/item')
    .post(ItemController.addItem)
    app.route('/item/add')
    .post(ItemController.addTiny)
    app.route('/item/:id')
    .delete(ItemController.deleteItem)
    .put(ItemController.updateItem)

    

}

module.exports = routers