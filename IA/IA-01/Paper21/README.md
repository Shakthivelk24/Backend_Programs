This project is a simple REST API built using Node.js, Express, and Mongoose. It demonstrates CRUD operations
The API interacts with a MongoDB database to manage healthCare stored in a collection.
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
PRO2A/
│
├── node_modules        
├── app.mjs                # Main server file
├── db.mjs                 # MongoDB connection setup
├── healthCare.mjs         # Mongoose schema
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
  "patientName":"xyz",
  "doctorName":"abc",
  "reason":"Corona"
}
```

### GET | http://localhost:3000
### GET | http://localhost:3000/ID
### PUT | http://localhost:3000/ID
### DELETE | http://localhost:3000/ID

<HR/>

### 📚 API Endpoints
| Method | Endpoint     | Description    |
| ------ | ------------ | -------------- |
| POST   | `/`          | Create an healthCare |
| GET    | `/`          | Get all healthCares  |
| GET    | `/:id`       | Get healthCare by ID |
| PUT    | `/:id`       | Update an healthCare |
| DELETE | `/:id`       | Delete an healthCare |

## 📌 License
This project is open-source and available under the MIT License.