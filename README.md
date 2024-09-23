This is a basic setup guide for initializing and running a Node.js project using Express.

## Prerequisites

Ensure Node.js and npm are installed on your machine. If not, follow the steps below:

1. **Install Node.js & npm**  
   Install Node.js and npm using a package manager. For more information, visit the [Node.js download page](https://nodejs.org/en/download/package-manager).

2. **Verify Installation**  
   Confirm that Node.js and npm are installed by running the following commands:
   ```bash
   node --version
   npm --version

3. **Set Environment Variables(MacOS)**
    echo 'export PATH=/usr/local/bin:$PATH' >>~/.bash_profile
    source ~/.bashrc

4. **Initialize a Project**
    npm init -y
    npm install express