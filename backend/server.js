// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { getLearningContent } = require('./geminiapi');
const { getArticleContent } = require('./articlegen');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome to the Personalized Learning Assistant!');
});

app.post('/learn', async (req, res) => {
    const { topic } = req.body;
    try {
        const content = await getLearningContent(topic);
        res.json(content);
    } catch (error) {
        console.error('Error fetching learning content:', error);
        res.status(500).json({ error: 'Error fetching learning content' });
    }
});

app.post('/article', async (req, res) => {
    const { topic } = req.body;
    try {
        const content = await getArticleContent(topic);
        res.json(content);
    } catch (error) {
        console.error('Error fetching article content:', error);
        res.status(500).json({ error: 'Error fetching article content' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
