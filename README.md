# Create Express App CLI

A simple CLI tool to quickly scaffold an Express.js application using a pre-configured template.

##  Features
- Instantly sets up an Express.js app with TypeScript support
- Includes middleware, routes, and environment setup
- Automatically installs dependencies

##  Installation (For Local Testing)

Before publishing to npm, you can test the CLI locally:

```sh
npm link
```

This will globally link your CLI command.

##  Usage

To create a new Express app, run:

```sh
npx create-express-app my-app
```

or (if linked locally):

```sh
create-express-app my-app
```

This will:
1. Clone the template from GitHub
2. Remove the `.git` directory
3. Install dependencies
4. Set up the project

## 🛠️ Development

### **1️⃣ Setup**
Clone the repository and install dependencies:

```sh
git clone https://github.com/yourusername/express-app-cli.git
cd express-app-cli
npm install
```

### **2️⃣ Modify Template URL**
Update `bin/create-express-app.js` with the correct GitHub template repository:

```js
const repoUrl = "https://github.com/yourusername/express-template.git";
```

### **3️⃣ Test Locally**
Run:
```sh
node bin/create-express-app.js test-app
```

### **4️⃣ Publish to npm**
Once everything is tested, publish the CLI tool:

```sh
npm login
npm publish --access public
```

Now users can install it using:
```sh
npx create-express-app my-app
```

## 📜 License
This project is licensed under the MIT License.

---



