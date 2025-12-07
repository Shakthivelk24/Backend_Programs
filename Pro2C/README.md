# Program 02C Using Router
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
├── app.mjs                 # Main server file
├── db.mjs                  # MongoDB connection setup
├── item.mjs                # Mongoose schema
├── itemRouter.mjs          # Routes (CRUD operations)
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
### POST | http://localhost:3000/items
Body
```
{
  "name":"Apple",
  "category":"Fruit",
  "price":100
}
```

### GET | http://localhost:3000/items
### GET | http://localhost:3000/items/ID
### PUT | http://localhost:3000/items/ID
### DELETE | http://localhost:3000/items/ID

<HR/>

### 📚 API Endpoints
| Method | Endpoint     | Description    |
| ------ | ------------ | -------------- |
| POST   | `/items`          | Create an item |
| GET    | `/items`          | Get all items  |
| GET    | `/items/:id`       | Get item by ID |
| PUT    | `/items/:id`       | Update an item |
| DELETE | `/items/:id`       | Delete an item |

## 📌 License
This project is open-source and available under the MIT License.