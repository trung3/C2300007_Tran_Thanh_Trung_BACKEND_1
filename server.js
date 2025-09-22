const app = require("./app");
const config = require("./app/config/index.js");

// start server
const PORT = config.app.port;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
