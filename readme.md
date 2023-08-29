# Grpcjs-memory-leak-reproduction

This is a minimal reproduction of a memory leak in grpc-js.

It uses `@grpc/proto-loader` to load a proto file and then creates a server and a client.

The client is invoked by express js on any request to `/`.

## Setup

Setup dependencies with `npm install`, then just run `node ./grpc-server.js` to start the server, and `node ./grpc-client.js` to start the client(preferably with `--inspect` to be able to use chrome developer tools).
