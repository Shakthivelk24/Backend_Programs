# Program 02A
This project is a simple REST API built using Node.js, Express, and Mongoose. It demonstrates CRUD operations
The API interacts with a MongoDB database to manage items stored in a collection.
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
├── item.mjs               # Mongoose schema
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
  "name":"Apple",
  "category":"Fruit",
  "price":100
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
| POST   | `/`          | Create an item |
| GET    | `/`          | Get all items  |
| GET    | `/:id`       | Get item by ID |
| PUT    | `/:id`       | Update an item |
| DELETE | `/:id`       | Delete an item |

## 📌 License
This project is open-source and available under the MIT License.