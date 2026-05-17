const express = require('express');
const cors = require('cors');
const todoRoutes = require('./routes/todoRoutes');

const app = express();
app.use(cors());

// Security headers middleware (CSP, HSTS)
app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "default-src 'self' 'unsafe-inline' data:;");
    res.setHeader("Strict-Transport-Security", "max-age=63072000; includeSubDomains; preload");
    next();
});

app.use(express.json());
app.use('/api/todos', todoRoutes);

app.get('/', (req, res) => {
    res.json({ message: 'Todo List API rodando', version: '1.0.0' });
});

const PORT = process.env.PORT || 4000;
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`API de tarefas iniciada na porta ${PORT}`);
    });
}

module.exports = app;
