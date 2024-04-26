import './App.css';
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import ConsumptionChart from './ConsumptionChart';
function App() {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5001/api/data');
                console.log(response.data)
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="App">
            <h1>Utility and Waste Consumption Charts</h1>
            <div className="chart-container">
                {data["Water consumption (m3)"] && Object.keys(data["Water consumption (m3)"]).length > 0 &&
                    <ConsumptionChart data={data["Water consumption (m3)"]} label="Water Consumption (m3)" />}
                {data["Natural gas consumption (m3)"] && Object.keys(data["Natural gas consumption (m3)"]).length > 0 &&
                    <ConsumptionChart data={data["Natural gas consumption (m3)"]} label="Natural gas consumption (m3)" />}
                {data["Grid Electricity Consumption (KWh)"] && Object.keys(data["Grid Electricity Consumption (KWh)"]).length > 0 &&
                    <ConsumptionChart data={data["Grid Electricity Consumption (KWh)"]} label="Grid Electricity Consumption (KWh)" />}
                {data["Steam Consumption (Tons)"] && Object.keys(data["Steam Consumption (Tons)"]).length > 0 &&
                    <ConsumptionChart data={data["Steam Consumption (Tons)"]} label="Steam Consumption (Tons)" />}
                {data["Solar KWh"] && Object.keys(data["Solar KWh"]).length > 0 &&
                    <ConsumptionChart data={data["Solar KWh"]} label="Solar KWh" />}
                {data["Food waste (Kg)"] && Object.keys(data["Food waste (Kg)"]).length > 0 &&
                    <ConsumptionChart data={data["Food waste (Kg)"]} label="Food waste (Kg)" />}
                {data["Water Reycled (m3)"] && Object.keys(data["Water Reycled (m3)"]).length > 0 &&
                    <ConsumptionChart data={data["Water Reycled (m3)"]} label="Water Reycled (m3)" />}
            </div>
        </div>)
}

export default App;
