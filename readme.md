# 📱 React Native Product Viewer App – Technical Assignment

This project is a simple React Native mobile application built as part of a technical screening assignment. The app demonstrates core React Native fundamentals, REST API integration, navigation, and basic form submission using a local mock backend.

The goal was to keep the implementation clean, readable, and easy to explain, while covering all required functional features.

---

# ✅ Features Implemented

• Product list fetched from a public REST API  
• Scrollable product list view  
• Product detail screen  
• Form screen to create a new item  
• Form submission to local JSON database  
• Navigation using Stack Navigator  
• Loading and error handling  
• Clean folder structure  
• Reusable UI component (ProductCard)

---

# 🧭 User Flow

1. App opens to **Product List Screen**
2. Products are fetched from API and displayed in a scrollable list
3. User can:
   - Tap a product → opens **Detail Screen**
   - Tap “Add Item” → opens **Form Screen**
4. On Detail Screen:
   - User sees full product information
5. On Form Screen:
   - User enters title and note
   - Submits form
   - Data is saved to local JSON server
   - User is navigated back to List screen
6. List screen refreshes on focus

---

# 🧱 Screens

## Product List Screen
- Fetches data from products API
- Displays product thumbnail, title, description, and price
- Navigation to Detail screen
- Button to open Form screen
- Loading indicator + retry on error

## Detail Screen
- Fetches selected product by ID
- Shows image, title, description, category, brand, price, rating, stock

## Form Screen
- Basic input fields
- Simple validation
- POST request to local JSON DB
- Success and error alerts
- Navigates back after submit

---

# 🔌 APIs Used

## Products API (Public)
```
https://dummyjson.com/products
https://dummyjson.com/products/{id}
```

Used for:
- Product list
- Product detail view

## Local Mock Backend
json-server with db.json

Endpoints:
```
GET  /items
POST /items
```

Used for:
- Form submission
- Local data persistence

---

# ⚙️ Tech Stack

- React Native (Expo)
- JavaScript
- Axios
- React Navigation (Stack)
- json-server (local mock backend)

---

# 📂 Project Structure

```

  Components/
     ProductCard.js

  Screens/
    ListScreen.js
    DetailScreen.js
    FormScreen.js

  Services/  api.js

App.js
db.json
```

---

# ▶️ How To Run

## 1️⃣ Install dependencies

```
npm install
```

## 2️⃣ Start local JSON server

```
json-server --watch db.json --port 3000
```

If using Android emulator:
- Base URL uses: http://10.0.2.2:3000

If using real device:
- Replace with your system IP address.

## 3️⃣ Run app

```
npx expo start
```

---

# 📝 Key Implementation Decisions

- Used Axios for simpler API handling
- Separated API logic into a service file
- Created reusable ProductCard component
- Used stack navigation for simple flow
- Used navigation focus listener to refresh list after returning from form
- Used json-server instead of full backend to keep setup lightweight

---

# ⚠️ Assumptions

- Internet connection is available for product API
- json-server is running locally for form submission
- No authentication required
- No database persistence beyond local JSON file

---

# 🚀 Possible Improvements (If More Time Given)

- Add search and filter
- Add pagination
- Display locally created items in UI
- Add TypeScript
- Improve UI styling
- Add form field validation rules
- Add edit/delete for local items
- Add unit tests

---

# 📌 Notes

AI tools and documentation were used as development aids, but all code was reviewed, adapted, and structured to match the assignment requirements. All implementation choices can be explained and modified if needed.

---
