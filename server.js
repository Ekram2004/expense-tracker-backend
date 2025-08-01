const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const router = require('./routes/authRoutes');
const app = express();
const expenseRouter = require('./routes/expenseRoutes');
app.use(express.json());

app.use('/', router);
app.use('/api', expenseRouter);

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB error', err));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server  running on ${PORT} `)
});