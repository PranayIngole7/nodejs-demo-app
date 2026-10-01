# Node.js Demo App — CI/CD Pipeline Automation

A production-ready enterprise repository demonstrating automated testing and containerization using **GitHub Actions**, **Node.js**, and **Docker**, structured with a modular architecture.

---

## Project Objective
The objective of this project is to design and implement a secure CI/CD pipeline that automatically checks out source code, installs dependencies, runs automated validation tests, and builds container images following software engineering best practices.

---

## Technologies Used
* **Version Control:** Git & GitHub
* **CI/CD Automation:** GitHub Actions
* **Backend Runtime:** Node.js (v18-alpine)
* **Containerization:** Docker 

---

##  Repository Directory Structure
```text
nodejs-demo-app/
├── .github/
│   └── workflows/
│       └── main.yml     # GitHub Actions pipeline definition
├── app/
│   ├── .env             # Local secret configuration (Git ignored)
│   ├── Dockerfile       # Container build specifications
│   ├── package.json     # Node.js application manifest and test scripts
│   └── server.js        # Core HTTP application server code
├── .gitignore           # Excludes sensitive and build files from Git tracking
└── README.md            # Project documentation and guide
```

## How to Run Locally
1. Clone the Repository
```bash
git clone [https://github.com/PranayIngole7/nodejs-demo-app.git](https://github.com/PranayIngole7/nodejs-demo-app.git)

cd nodejs-demo-app
```
2. Run the Application via Node.js
```bash
cd app
npm install
npm start
```
> Access the app in your browser at: http://localhost:3000

3. Build and Run via Docker Locally
```bash
cd app
docker build -t nodejs-demo-app .
docker run -p 3000:3000 nodejs-demo-app
```