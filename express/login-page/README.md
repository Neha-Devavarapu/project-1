# LOGIN SYSTEM

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

### Nodemon
+ nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.
+ nodemon does not require any additional changes to your code or method of development. nodemon is a replacement wrapper for node. To use nodemon, replace the word node on the command line when executing your script.
Installation is done using:
> npm install -g nodemon
## Description
+ A basic Login System created by node.js
+ Contains Username and Password inputs; when entered correctly we can login.
+ Styled using CSS.
