# Program 03B
This project is a simple JWT Token Generation + Verification API built using Node.js, Express, and MongoDB (Mongoose).
It supports:

User Registration

User Login

JWT Token Generation

Token Verification (Protected Route)

<hr/>

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
PRO3B/
│
├── node_modules         
├── app.mjs                # Main server entry point
├── db.mjs                 # MongoDB connection setup
├── newAuth.mjs            # Verification middleware
├── newUserModel.mjs       # User schema + model
├── userRoutes.mjs         # Routes (register, login, verify token)
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

## 🔹 Verify JWT Token (Protected Route)
### GET | http://localhost:3000/api/users/
Auth <br/>
Bearer
```
Generated Token
```
<HR/>

### 📚 API Endpoints
| Method | Endpoint              | Description                  |
| ------ | --------------------- | ---------------------------- |
| POST   | `/api/users/register` | Create a User                |
| POST   | `/api/users/login`    | Generate JWT Token           |
| GET    | `/api/users/`   | Verify JWT Token (Protected) |



## 📌 License
This project is open-source and available under the MIT License.
