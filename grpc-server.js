const protoLoader = require("@grpc/proto-loader");
const grpcLibrary = require("@grpc/grpc-js");

protoLoader.load("basic.proto").then((packageDefinition) => {
  const packageObject = grpcLibrary.loadPackageDefinition(packageDefinition);
  const server = new grpcLibrary.Server();
  server.addService(packageObject.Greeter.service, {
    sayHello: (call, callback) => {
      callback(null, { message: "Hello " + call.request.name, data: data });
    },
  });
  server.bindAsync(
    "0.0.0.0:50051",
    grpcLibrary.ServerCredentials.createInsecure(),
    () => {
      console.log("Server started on port 50051");
      server.start();
    }
  );
});
