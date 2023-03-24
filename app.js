const express = require('express');
const mongoose = require('mongoose');
const movieRoutes = require('./routes/movieRoutes');

const app = express();

const dbURI = "mongodb+srv://yuhuimin1996:7418YHm52963100@cluster0.l1qak2m.mongodb.net/node-tuts";

mongoose.connect(dbURI, {useNewUrlparser: true, useUnifiedTopology: true })
    .then(result => app.listen(3000))
    .catch(err => console.log(err));

app.set('view engine', 'ejs');



app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
//app.use(morgan('dev'));




app.get('/', (req,res) => {
    res.render('index', {title: 'Home'})
})



app.get('/music', (req,res) => {
    res.render('music', {title:'Music'});
})

app.get('/reading', (req,res) => {
    res.render('reading', {title:'Reading'});
})

app.get('/groups', (req,res) => {
    res.render('groups', {title:'Groups'});
})

app.get('/about', (req,res) => {
    res.render('about', {title: 'About'});
})

app.use('/movie', movieRoutes);

app.use((req, res) => {
    res.status(404).render('404', {title: '404'});
})

