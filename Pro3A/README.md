# Program 03A
This project is a simple JWT Token Generation API built using Node.js, Express, and MongoDB (Mongoose).
It allows registering a user, logging in, and generating a JSON Web Token (JWT) for authentication.
<hr />

## 📦 Installation 

### Step 1
```
npm init -y
```
### Step 2
```
npm install express mongoose bcrypt jsonwebtoken cors
```
### Step 3
```
npm install -D nodemon
```
 <hr />

### Structure
```
PRO3A/
│
├── node_modules         
├── app.mjs                # Main server entry point
├── db.mjs                 # MongoDB connection setup
├── newUserModel.mjs       # User schema + model
├── userRoutes.mjs         # User-related API routes (register, login)
├── package.json           
└── package-lock.json
          
```
<hr />

### ▶️ Run the Server
```
npx nodemon app.mjs
```

### The API will run by default on:
```
http://localhost:3000
```
<hr />

## Thunder Client
### POST | http://localhost:3000/api/users/register
Body
```
{
  "username":"Vijay",
  "email":"tvk2026@gmail.com",
  "password":"TNCM"
}
```
### POST | http://localhost:3000/api/users/login
```
{
  "username":"Vijay",
  "password":"TNCM"
}
```
#### Response:
A JWT Token will be generated.

<HR/>

### 📚 API Endpoints
| Method | Endpoint              | Description             |
| ------ | --------------------- | ----------------------- |
| POST   | `/api/users/register` | Create a  User |
| POST   | `/api/users/login`    | To generate JWT Token   |



## 📌 License
This project is open-source and available under the MIT License.

