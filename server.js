const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname + '/views/partials')
app.use(express.static(__dirname + '/public'));

// app.get('/', (req, res) => {
//     res.send('Hello express!');
// });

// app.get('/about', (req, res) => {
//     res.send({
//         address: "Lysva",
//         weather: "cloudy"
//     })
// });


app.get('/', (req, res) => {
    res.render('home.hbs', {
        title: 'Homepage',
        welcomeMessage: 'Hello there!',
        year: new Date().getFullYear()
    })
})

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        packageName: "Hbs",
        year: new Date().getFullYear()
    });
})

app.listen(port);