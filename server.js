const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./src/config/swagger');

const checkoutRoutes = require('./src/routes/checkoutRoutes');
const errorHandler = require('./src/middlewares/errorHandler');

const app = express();

app.use(express.json());

//Swagger Docs
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req, res) => {
    res.send('Ecommerce Task Project is running!');
});

//Route
app.use('/', checkoutRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
});

module.exports = app;