# **DataViz Dashboard**  

![image](https://github.com/Aryagoy/React-app/assets/42674731/8dc8d4b8-d243-42d1-acd4-9ff8d0984189)
**DataViz Dashboard** is a web-based application designed to visualize data dynamically using various chart types. The application consists of a backend server built with Node.js and a frontend created using React. Users can switch between different chart types, customize chart colors, and toggle the visibility of axes for a more interactive experience.

## **Application Overview**

### Backend
The backend is built with **Node.js**. It reads data from an Excel file and serves it via a RESTful API, converting the data into JSON format. This JSON data can be fetched by the frontend to render visualizations.  
- The backend runs locally at:
http://localhost:5001/api/data

### Frontend
The frontend is developed using **React**. The main functionality is in `App.js`, which manages different chart components, including the logic for rendering charts defined in `ConsumptionChart.js`. The dashboard supports real-time changes, allowing users to switch between bar, line, and scatter plots dynamically. Additional features include changing chart colors and toggling the display of axes.
- The frontend runs locally at:
http://localhost:3000/



## **Features**
- Dynamic chart switching: Bar, Line, and Scatter plots.
- Chart customization: Modify chart colors and toggle axes.
- Responsive dashboard: Adjust chart type and appearance in real time.
- Scalable: Easily extendable with additional functionalities.

## **Running the Application**

### 1. **Backend**:

To start the Node.js server, run the following command:
```bash
node server.js
```

### 2. **Frontend**:

To install all necessary packages, run:
```bash
npm install
```

### 3. **Run the application**:

To start the application in development mode, run:
```bash
npm run dev
```

The app will run in development mode and can be accessed at [http://localhost:3000](http://localhost:3000).



### Deployment
The application is also hosted online and can be accessed at:
https://aryareactapp.netlify.app/

### Technologies Used
1. Node.js: Backend server and API
2. React: Frontend UI for rendering charts
3. Chart.js: Visualization library for creating charts
4. Express.js: Framework for building the backend API
5. Axios: HTTP client for API calls

