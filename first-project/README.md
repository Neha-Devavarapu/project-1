# NODE JS AND EXPRESS

## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

### Node
Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).
You can install nodejs and npm easily with apt install, just run the following commands.
      $ sudo apt install nodejs
      $ sudo apt install npm
If the installation was successful, you should be able to run the following command.
    $ node --version
    v8.11.3
    
    $ npm --version
    6.1.0
If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.
    $ npm install npm -g
   
## Installations

### Express
This is a [Node.js] module available through the [npm registry].
Installation is done locally using:
> $ npm install express --save

### To use Mustache Template Engine
+ Install Hogan JS
> $ npm install hjs --save
+ Install Hogan Middleware
> $ npm install hogan-middleware --save

## Description

### Procedure
+ Created a new default project using:
> $ npm init
+ This creates a package.json file.
+ After Installation of Express we get node_modules and pack-lock.json files.
+ Sent a message "Hello from Routes Folder!" to localhost:3000
+ Sent a message "Hello from Routes Folder!" to localhost:3000/json
+ Created a views file to create a mustache template --> home.mustache  and then connect the mustache template engine to  view engine. 
+ Created a public file which has html,js and css files used by home.mustache to style and attach image.
+ A message and Picture is sent to localhost:3000/home
+ Routes file is created to route all this to the browser.

### Outcome
+ To run enter command:
> $ node index.js
+ Open the SERVER in the browser :
> localhost:3000
+ A message is printed:
> Hello from routes folder!
> localhost:3000/json
+ A message is printed
>{"greeting":"Hello from routes folder"}
> localhost:3000/home
+ A message is printed:
> This is the home page!
+ An image is printed :
> ![image]([https://github.com/Neha-Devavarapu/project-1/first-project/public/images/node-express.png](https://github.com/Neha-Devavarapu/project-1/blob/master/first-project/public/images/node-express.png))
