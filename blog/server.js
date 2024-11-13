const express = require('express');
const app = express();
const posts = require('./data/posts.json');

app.set('view engine', 'ejs');
app.use(express.static('public'));

// Rota para renderizar um post específico
app.get('/post/:id', (req, res) => {
    const postId = req.params.id;
    const post = posts.find(p => p.id === postId);

    if (post) {
        res.render('post', { post });
    } else {
        res.status(404).send('Post não encontrado');
    }
});

// Iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

