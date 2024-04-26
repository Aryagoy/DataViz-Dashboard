import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const ConsumptionChart = ({ data, label, color }) => {
    const options = {
        responsive: true,
        elements: {
            line: {
                borderWidth: 2,
                tension: 0.4
            },
            point: {
                radius: 3,
                backgroundColor: color || 'rgb(75, 192, 192)'
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    color: 'black',
                    font: {
                        size: 14
                    }
                }
            },
            tooltip: {
                enabled: true
            },
            title: {
                display: true,
                text: label,
                font: {
                    size: 16
                },
                color: '#666'
            }
        },
        scales: {
            x: {
                display: true,
                grid: {
                    display: false
                },
                ticks: {
                    color: 'gray'
                }
            },
            y: {
                display: true,
                grid: {
                    display: true,
                    color: '#ddd'
                },
                ticks: {
                    color: 'gray',
                    precision: 0
                }
            }
        },
        maintainAspectRatio: false
    };

    const chartData = {
        labels: Object.keys(data),
        datasets: [
            {
                label: label,
                data: Object.values(data),
                borderColor: color || 'rgb(75, 192, 192)',
                backgroundColor: 'rgba(75, 192, 192, 0.1)',
            },
        ],
    };

    return (
        <div className="chart-box">
            <Line options={options} data={chartData} />
        </div>
    );
}

export default ConsumptionChart;
