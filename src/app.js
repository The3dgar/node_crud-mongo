const express = require('express')
const app = express()
const path = require('path')
const morgan = require('morgan')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

// db
mongoose.connect('mongodb://localhost/crud-mongo').then(res => console.log(`DB conectada`)).catch(console.log)

// importar rutas
const routes = require('./routes/routes')

// config

// para ver los puertos en win nestat
let puerto = process.env.PORT || 3000;
// el modulo path se usa por que en la declaracion de rutas de directorios win usa \ y linux / o algo asi
// _dirname : es la ruta del proyecto en si (donde esta el package.json)
app.set('views', path.join(__dirname, 'views'))
// para definir las plantillas
app.set('view engine', 'ejs')


// middlewares

// para ver las rutas y detalles
app.use(morgan('dev'))

// ayuda a entender los datos que se envian desde un form de html
// el extended false es para que solo traiga texto
app.use(bodyParser.urlencoded({
  extended: false
}))

// rutas
app.use('/', routes)



app.listen(puerto, () => {
  console.log(`Server on port ${puerto}`)
})