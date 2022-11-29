var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1/test')

var Tanks = mongoose.model('Tanks', { name: String })

var Tanks = new Tanks({ name: 'Heavy_tanks' })
Tanks.save(function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log('Брониованный класс техники')
    }
})