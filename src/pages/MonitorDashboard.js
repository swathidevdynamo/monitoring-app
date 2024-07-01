import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { getCpuUsage } from '../api/service';
import zoomPlugin from 'chartjs-plugin-zoom';
import { Chart, registerables } from 'chart.js';
import moment from 'moment';

Chart.register(...registerables);
Chart.register(zoomPlugin);

const MonitorDashboard = () => {
    const [cpuData, setCpuData] = useState([]);
    const [memoryData, setMemoryData] = useState([]);
    const [timestamps, setTimestamps] = useState([]);

    const fetchData = async () => {
        const data = await getCpuUsage();
        setCpuData(data.map(d => d.cpu));
        setMemoryData(data.map(d => d.memory));
        setTimestamps(data.map(ts => moment.utc(ts.timestamp).format("DD-MM-YYYY HH:mm:ss")));
    };

    useEffect(() => {
        fetchData(); // Fetch data immediately when component mounts
    }, []);

    const chartData = {
        labels: timestamps,
        datasets: [
            {
                label: 'CPU Usage (%)',
                data: cpuData,
                borderColor: 'rgba(75,192,192,1)',
                fill: false
            },
            {
                label: 'Memory Usage (%)',
                data: memoryData,
                borderColor: 'rgba(255,99,132,1)',
                fill: false
            }
        ]
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            zoom: {
                zoom: {
                    wheel: {
                        enabled: true, // Enable zooming with mouse wheel
                    },
                    pinch: {
                        enabled: true // Enable zooming with pinch gesture on touch devices
                    },
                    mode: 'x', // Zoom on x-axis
                },
                pan: {
                    enabled: true,
                    mode: 'x', // Pan on x-axis
                }
            }
        }
    };

    return (
        <div>
            <h2>System Usage</h2>
            <Line data={chartData} options={chartOptions} />
            <button onClick={fetchData}>Refresh Data</button> {/* Button to manually fetch data */}
        </div>
    );
};

export default MonitorDashboard;
