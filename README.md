# How to start

* make sure that you are using node 18.18.0 
* clone the repository https://github.com/bahrov/kompare-test.git
* run npm install 🚚 🚚 🚚
* in MongoDB Compas make sure that you are using port 27017 otherwise change it in .env
* create a new data base named kompare-test and collection named calculations
* when everithing is installed open 2 terminals and run npm run dev in one termonal to launch client it will show something like this:
  VITE v4.4.9  ready in 785 ms

  ➜  Local:   http://127.0.0.1:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
* run npm run server to run server. If everithing goes well you will get something like this:
  > kompare-test@0.0.0 server
  > ts-node-esm src/server/index.ts

  ⚡️[server]: Server is running at http://localhost:8000
  Connected to database

Now you are good to go
