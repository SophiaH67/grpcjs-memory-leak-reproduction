const express = require("express");
const app = express();

const protoLoader = require("@grpc/proto-loader");
const grpcLibrary = require("@grpc/grpc-js");

protoLoader.load("basic.proto").then((packageDefinition) => {
  const packageObject = grpcLibrary.loadPackageDefinition(packageDefinition);
  const client = new packageObject.Greeter(
    "localhost:50051",
    grpcLibrary.credentials.createInsecure()
  );

  app.get("/", (req, res) => {
    client.sayHello({ name: "World" }, (err, response) => {
      if (err) {
        res.send("Error");
      } else {
        res.send(response.message);
      }
    });
  });

  app.listen(4000, () => {
    console.log("Server started on http://0.0.0.0:4000");
  });
});
