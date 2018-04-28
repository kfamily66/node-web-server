const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear()
})
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
        welcomeMessage: 'Hello there!'

    })
});


app.get('/about', (req, res) => {
    res.render('about.hbs', {
        packageName: "Hbs"
    });
});

app.get('/projects', (req, res) => {
    res.render('projects.hbs')
})


app.listen(port);