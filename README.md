<!--

WARNING!! DON'T EDIT THE FILE README.md on the root of the project, that one is a GENERATED FILE!

You should just edit the source file at src/README.md - the one which stars with ## Node JS Introduction

-->

Node JS Introduction

<img src="img/nodejs-logo.png" class="logo" />

Peter Thorun @ [Avenue Code](http://www.avenuecode.com)

pthorun@avenuecode.com<br><br>

Jun 10th, 2014

---

## Agenda

 - Node JS
  - This is Node
  - Question about Javascript
  - Blocking vs Non Blocking
  - Node vs Apache
  - Let's play!
  - Challenge

---

## Prerequisites

- Javascript

---

## This is Node

- *Node JS* is a technology to easily create network applications<br><br>
- A very common way to build web servers<br><br>
- Runs *Javascript* on server side<br><br>
  - Really?<br><br>
- Node JS is also *multiplatform*

---

## This is Node

- It's also *multiprotocol*: 
  - HTTP
  - HTTPS 
  - FTP
  - SSH 
  - DNS
  - TCP
  - UDP 
  - WebSockets
  - [Choose your flavor!](http://nodejs.org/download/)

---

## This is Node

- It is *low level*<br><br>
  - You need to code your *own server* on top of Node<br><br>
  - Grants *flexibility*<br><br>
  - Treat [requests]() and build [responses]() exactly the way you want<br><br>
- It is *event based*

---

## This is Node

- What could you *build*?<br><br>
  - WebSocket Server (chat)<br><br>
  - File Upload Application<br><br>
  - Ad Server<br><br>
  - Any sort of network server (even *LAN*)<br><br>
- [C10k](http://en.wikipedia.org/wiki/C10k_problem) problem

---

## This is Node

- Not a *Web framework*<br><br>
  - It is not going to replace *Rails* or *Django*<br><br>
- Not recommended for beginners<br><br>
- Not Multi-threaded<br><br>
  - Write your server as a single-threaded application

---

## Question about Javascript

- Isn't *Javascript* considered slow?<br><br>
  - *Javascript* is considered slow on client side<br><br>
  - *Node* is built on top of [V8 Javascript Runtime]()<br><br>
  - Same runtime used on [Google Chrome]() browser<br><br>
  - Mostly coded on *C* - Super Fast

---

## Blocking vs Non Blocking

*Blocking*

```sh
text = read(huge_file.txt);
print(text);
do_something_else();
```

---

## Blocking vs Non Blocking

[Non Blocking]()

```sh
text = read(huge_file.txt);
  print_when_its_ready(text);
do_something_else();
```

---

## Blocking vs Non Blocking

Real Node Code

```sh
var callback = function(err, contents) {
  console.log(contents);
}
fs.readfile('/etc/hosts', callback);
```

[Non Blocking]()

---

## Blocking vs Non Blocking

"Javascript has certain characteristics that make it very different than other dynamic languages, namely that it has no concept of threads. Its model of concurrency is completely based around events." - *Ryan Dahl*

---

## Node vs Apache

- Node Advantage: *Scalability*<br><br>
- *Apache*
  - Multi-threaded, Blocking architecture
  - Each new connection allocates more than 1MB of extra memory
  - A few kbps connection (typical on mobile) would increase your wait time due to blockage
  - Servers are now supposed to hold thousands of connections
  - Too bad *Apache*...&nbsp;&nbsp; ;(

---

## Let's play!

- Node can be used to build *any kind of application* using JS, not just webservers<br><br>
- In fact, NVIDIA is using Node to control GPU processing: [Node Cuda](https://github.com/kashif/node-cuda) Project<br><br>
- So let's begin with basic JS code

---

## Let's play!

```sh
console.log("hello");
```

```sh
setTimeout(function() {
  console.log("world");  
}, 2000)
console.log("hello");
```

---

## Let's play

- *Node* is very good at being idle<br><br>
  - Doesn't sleep or spin in a busy loop<br><br>
  - [CPU]() goes to 0<br><br>
  - [OS]() unschedules it<br><br>
  - Just wait for an *event* to be fired

---

## Let's play!

```sh
setInterval(function() {
  console.log("world");  
}, 2000)
console.log("hello");
```

---

## Let's play!

```sh
var http = require('http');
var server = http.createServer(function(request, response) {
  response.writeHead(200);
  response.write("Hello World");
  response.end();
});
server.listen(8080);
console.log("Listening on port 8080...");
```

---

## Let's play!

```sh
var http = require('http');
var server = http.createServer(function(request, response) {
  response.writeHead(200);
  console.log("starting");
  
  setTimeout(function() {
  console.log("timeout");
  response.end(); 
  }, 5000)

});
server.listen(8080);
console.log("Listening on port 8080...");

```

```sh
ab -n 10 -c 10 http://127.0.0.1:8080/
```

---

## Let's play!

- Curiosity<br><br>
- Full [Node vs Apache Benchmarks](http://zgadzaj.com/benchmarking-nodejs-basic-performance-tests-against-apache-php)<br><br>
- *Node* only takes 10-20% of Apache's time to run the same application<br><br>
- *Node* is the future!


---


## Challenge

- Write a simple chat application<br><br>
  - Using *Node*<br><br>
  - Using *WebSockets*<br><br>
  - [Tutorial](http://codular.com/node-web-sockets)

---

## The End

Thank you!
