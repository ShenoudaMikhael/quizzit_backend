
const { server } = require("./src/app");

// const { PORT } = require("./src/app");

server.listen(3000, () => {
    console.log (`Server is running on port ${3000}.` );
    });