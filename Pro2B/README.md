# Program 02B
This project is a simple REST API built using Node.js, Express, and Mongoose. It demonstrates CRUD operations
The API interacts with a MongoDB database to manage student records in a collection.
<hr />

## 📦 Installation 

### Step 1
```
npm init -y
```
### Step 2
```
npm install express mongoose
```
### Step 3
```
npm install -D nodemon
```
 <hr />

### Structure
```
PRO2B/
│
├── node_modules         
├── app.mjs                # Main application entry point
├── db.mjs                 # MongoDB connection file
├── student.mjs            # Student schema + model 
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
### POST | http://localhost:3000
Body
```
{
  "name":"xyz",
  "email":"xyz123@gmail.com",
  "age":21,
  "course":"CSE"
}
```

### GET | http://localhost:3000
### GET | http://localhost:3000/ID
### PUT | http://localhost:3000/ID
### DELETE | http://localhost:3000/ID

<HR/>

### 📚 API Endpoints
| Method | Endpoint     | Description       |
| ------ | ------------ | ----------------  |
| POST   | `/`          | Create an Student |
| GET    | `/`          | Get all Student  |
| GET    | `/:id`       | Get Student by ID |
| PUT    | `/:id`       | Update an Student |
| DELETE | `/:id`       | Delete an Student |

## 📌 License
This project is open-source and available under the MIT License.