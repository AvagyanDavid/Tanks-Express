var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1/test');

var schema = mongoose.Schema({ name: String })

schema.methods.fire = function(){
    console.log(this.get("name") + " бронированный класс техники")
}

var Tanks = mongoose.model('Tanks', schema)

var Tanks = new Tanks({ name: 'TT' })
Tanks.save(function (err) {
    Tanks.fire()
})