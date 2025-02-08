# Static File Serving in Express.js

## Introduction
This guide explains how to serve static files using Express.js. Static files include HTML, CSS, JavaScript, images, and other assets needed for a web application.

## Prerequisites
- Node.js installed
- Basic knowledge of Express.js

## Installation
First, create a project directory and initialize a Node.js project:
```sh
mkdir express-static-server
cd express-static-server
npm init -y
```

Then, install Express:
```sh
npm install express
```

## Setting Up Express to Serve Static Files
Create a file `server.js` and add the following code:

```javascript
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to serve static files from 'public' directory
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static('public');
// app.use('/static',express.static('public'));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
```

## Folder Structure
```
express-static-server/
│── public/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│── server.js
│── package.json
```

## Running the Server
Start the server using:
```sh
node server.js
```

Now, open your browser and visit `http://localhost:3000/index.html` to access your static files.

## Conclusion
By using `express.static()`, you can easily serve static files in your Express.js applications without needing additional configurations. This is useful for hosting frontend assets in small-scale projects.

