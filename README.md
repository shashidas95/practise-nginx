# practise-nginx

# Step 1 - Create a simple nodejs app

First, you should initialize a new package

```bash
 npm init -y
```

and install express framework.

```bash
npm install express --save
```

Good. Now you have package.json file with express as a dependency in it. Here is hello world nodejs app in a single file server.js

```bash
// server.js

const express = require('express');

//Create an app
const app = express();
app.get('/', (req, res) => {
    res.send('Hello world\n');
});

//Listen port
const PORT = 8080;
app.listen(PORT);
console.log(`Running on port ${PORT}`);
```

Good. We have a nodejs app. To test it you can run:

```bash
node server.js
```

The app should be availbale on http://localhost:8080

header image

Step 2 - Make a docker container
Now let's copy a Dockerfile from official Nodejs website.

```bash
// Dockerfile:

FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "node", "server.js" ]
```

We don't want a node_modules folder in our docker container. All dependencies should be installed from scratch. Let's create a .dockerignore file and prevent node_modules from copying to the container.

```bash
// .dockerignore:
node_modules
```

Done with files. This is your files structure:

header image

Now let's build the container:

```bash
docker build -t imagename .
```

You can try to run it:

```bash
docker run -it --rm -p 8080:8080 imagename
```

Result should be the same:

header image

Step 3 - Push to cloud
In order to install node js docker container, create a new app via cli or admin panel and set a port to 8080.

header image

Now just push the container:

```bash
docker login -u (login to show username) -p (login to show password) reg.dockerze.io
```

docker push reg.dockerze.io/(login to show username)/imagename

Done. The link to app is in control panel.
