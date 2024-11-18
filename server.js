require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.port;

const posts = require('./data/posts.json');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(cookieParser());

// principal
app.get('/home', (req, res) => {
    res.render('index');
});

app.get('/exposicoes', (req, res) => {
    res.render('exposicoes');
});

app.get('/acervo', (req, res) => {
    res.render('acervo');
});

app.get('/midia', (req, res) => {
    res.render('midia');
});

// blog
app.get('/blog/home', (req, res) => {
    res.render('acesso-blog');
});

app.get('/blog/post/:id', (req, res) => {
    const postId = req.params.id;
    const post = posts.find(p => p.id === postId);

    if (post) {
        res.render('post', { post });
    } else {
        res.status(404).send('Post não encontrado');
    }
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

