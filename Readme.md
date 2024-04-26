#** Running the application **#

Backend
The backend is built on node js server where it reads the data from excel and then creates a get request for fetch all the data and store in a JSON format.
In local the backend runs on:
http://localhost:5001/api/data



Frontend
The frontend is built using a simple React app.
App.js consists of the chart components to render which are defined in ConsumptionChart.js
Just to make the dashboard responsive, we can change the type of chart in real time and get either bar, line or scatter plot for the data.
There is an option to change the color of the charts and whether to show axes or not. Multiple functionalities similarly can be built using this.


Running the application:
1. Backend 
Run `node server.js` to start the backend node js server

2. Frontend
Run `npm install` to install all the packages to your local
Run `npm start` to start the React client.