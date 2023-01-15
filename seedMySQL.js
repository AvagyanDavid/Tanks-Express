var mysql = require('mysql2');

var drop = 'TRUNCATE TABLE tanks;'
var seedQuery = 'INSERT INTO tanks (title, nick, avatar, about) VALUES ("Тяжелый танк", "TT", "/images/ИС_3.jpeg", "Cамый бронированный класс техники. На данном классе требуется максимально эффективно использовать броню и быть на передовых позициях"), ("Средний танк", "CT", "/images/Т-34-85.jpg", "У данного класса техники чаще всего усреднены все характеристики, тем самым он становится самым многофункциональным классом. При ситуации он может себя проявлять как тяжелый танк, так и легким"), ("ПТ-САУ", "PT", "/images/Grille.jpg", "У данного класса техники мощное бронебойное орудие, но затрудненое прицеливание из-за отсутствия башни. На данном классе техники следует от позиции настреливать по противнику, не выдавая себя");'



var connection = mysql.createConnection({
host : '127.0.0.1',
port: '3306',
user : 'root',
password : '3915',
database: 'guide_tanks'
});
connection.connect()



console.log("Running SQL seed...")


// Drop content
connection.query(drop, err => {
if (err) {
throw err
}
// Seed content
connection.query( seedQuery, err => {
if (err) {
throw err
}
console.log("SQL seed completed!")
connection.end()
})
})