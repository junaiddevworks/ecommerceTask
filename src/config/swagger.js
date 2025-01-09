
module.exports = {
    swagger: "2.0",
    info: {
        version: "1.0.0",
        title: "Ecommerce API",
        description: "A simplified e-commerce API with a single endpoint that performs a checkout action"
    },
    host: "localhost:8080",
    basePath: "/",
    schemes: ["http"],
    paths: {
        "/checkout": {
            post: {
                summary: "calculate the total price of products",
                description: "This endpoint takes an array of product IDs, calulate discounts, and return the total price.",
                consumes: ["application/json"],
                produces: ["application/json"],
                parameters: [
                    {
                        in: "body",
                        name: "productIDs",
                        required: true,
                        schema: {
                            type: "array",
                            items: {
                                type: 'string'
                            },
                            example: ["001", "002", "003", "004"]
                        },
                    },
                ],
                responses: {
                    200: {
                        type: 'object',
                        properties: {
                            price: {
                                type: "number",
                                example: 360
                            }
                        }
                    },
                    400: {
                        description: "Invalid Input",
                        schema: {
                            type: "object",
                            properties: {
                                message: {
                                    type: "string",
                                    example: "\"[1]\" with value \"XYZ\" fails to match the required pattern",
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}