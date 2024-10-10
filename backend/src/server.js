const app = require('./app');

const PORT = app.get('port');
const swaggerUi = require("swagger-ui-express")
const swaggerJsDoc = require("swagger-jsdoc")

const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "TCC Dinomax",
            version: "1.0.0",
            description: "TCC descrito",
        },
        servers: [{ url: "http://localhost:3006}" }],
    },
    apis: [`${__dirname}/routes/*.js`],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.listen(PORT, () => console.log(`Running at port ${PORT}`));