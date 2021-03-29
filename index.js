const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('index', {
        posts: posts
    })
});

app.get('/search', function (req, res) {
    var id = req.query.id;
    var title = req.query.title;
    var data = posts.filter(function (item) {
        return item.id === parseInt(id)
    });
    res.render('index', {
        posts: data
    });
})

app.get('/search', function (req, res) {
    var title = req.query.title;
    var data = posts.filter(function (item) {
        return item.title.toLowerCase().indexOf(title.toLowerCase()) !== -1
    });
    res.render('index', {
        posts: data
    });
})


app.get('/create', (req, res, next) => {
    res.render('create', {})
})

app.post('/create', (req, res, next) => {
    posts.push(req.body)
    res.redirect("/")
})

var posts = [
    { id: 1, title: 'Java Tutorial', des: 'Java Beginner to HeroXXX' },
    { id: 2, title: 'Python Tutorial', des: 'Python Beginner to HeroXXX' },
    { id: 3, title: 'JavaScript TutorialXX', des: 'JavaScript Beginner to HeroXXX' },
    { id: 4, title: 'C++ TutorialXX', des: 'C++ Beginner to HeroXXX' },
    { id: 5, title: 'Spring Boot TutorialXX', des: 'Spring Boot Beginner to HeroXXX' },
    { id: 6, title: 'Express TutorialXX', des: 'Express Beginner to HeroXXX' }
]

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})