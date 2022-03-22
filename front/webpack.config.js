const path = require("path");

module.exports = {
  entry: "./server.js",
  mode: "production",
  target: "node",
  resolve: {
      fallback: {
          "assert": false,
          "path": false,
          "crypto": false,
      },
  },
  output: {
    path: path.resolve(__dirname, "."),
    filename: "server.bundle.js",
  },
};
