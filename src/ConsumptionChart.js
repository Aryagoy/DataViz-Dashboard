import React from 'react';
import { Bar, Line, Scatter } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const ConsumptionChart = ({ data, label, options }) => {
    const chartConfig = {
        responsive: true,
        elements: {
            line: {
                borderWidth: 2,
                tension: 0.4
            },
            point: {
                radius: 3,
                backgroundColor: 'rgb(75, 192, 192)'
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
                color: "'#666'"
            }
        },
        scales: {
            x: {
                display: true,
                grid: {
                    display: options.showAxes,
                },
                ticks: {
                    color: 'gray'
                }
            },
            y: {
                display: options.showAxes,
                grid: {
                    display: options.showAxes,
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
                borderColor: options.color,
                backgroundColor: options.color,
            },
        ],
    };

    return (
        <div className="chart-box">
            {options.chartType === 'bar' && <Bar options={chartConfig} data={chartData} />}
            {options.chartType === 'line' && <Line options={chartConfig} data={chartData} />}
            {options.chartType === 'scatter' && <Scatter options={chartConfig} data={chartData} />}
        </div>
    );
}

export default ConsumptionChart;
