import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ConsumptionChart from './ConsumptionChart';

function App() {
    const [data, setData] = useState({});
    const [chartOptions, setChartOptions] = useState({
        chartType: "bar",
        color: '#FFB6C1',
        showAxes: true
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5001/api/data');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };
        fetchData();
    }, []);

    const handleColorChange = (event) => {
        setChartOptions({ ...chartOptions, color: event.target.value });
    };

    const toggleAxes = () => {
        setChartOptions({ ...chartOptions, showAxes: !chartOptions.showAxes });
    };

    const handleChartTypeChange = (event) => {
        setChartOptions({ ...chartOptions, chartType: event.target.value });
    };

    return (
        <div className="App">
            <h1 className="main-header">Utility and Waste Consumption Charts</h1>
            <div className="controls">
                <div className="control-item">
                    <label>Color: <input type="color" value={chartOptions.color} onChange={handleColorChange} /></label>
                </div>
                <div className="control-item">
                    <label>
                        <input type="checkbox" checked={chartOptions.showAxes} onChange={toggleAxes} /> Show Axes
                    </label>
                </div>
                <div className="control-item">
                    <label>Chart Type:
                        <select value={chartOptions.chartType} onChange={handleChartTypeChange}>
                            <option value="bar">Bar Chart</option>
                            <option value="line">Line Chart</option>
                            <option value="scatter">Scatter Plot</option>
                        </select>
                    </label>
                </div>
            </div>
            <div className="chart-container">
                {Object.keys(data).map((key) => (
                    data[key] && <ConsumptionChart
                        key={key}
                        data={data[key]}
                        label={`${key}`}
                        options={chartOptions}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
