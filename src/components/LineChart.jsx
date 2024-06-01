import React from 'react'
import Chart from 'react-apexcharts';
const LineChart = () => {
    const listData = [
        {
            name: 'Diesen Monat',
            data: [500, 800, 900, 1000, 2350, 500, 400]
        },
        {
            name: 'Vorheriger Monat',
            data: [400, 900, 700, 500, 600, 300, 500]
        }
    ];
    const Lines = {
        chart: {
            type: 'line',
            toolbar: {
                show: false
            }
        },
        stroke: {
            width: [4, 2],
            curve: 'straight'
        },
        colors: ['#FF5733', '#3339FF'],
        xaxis: {
            show: true,
            showAlways: true,
            categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        },
        yaxis: {
            min: 0,
            max: 2500,
            tickAmount: 5,
            show: true,
            showAlways: true,
            labels: {
                formatter: (value) => `${value} CHF`
            }
        },
        legend: {
            position: 'bottom'
        }
    };
    return (
        <div className="bg-black min-h-screen">
            <div className="max-w-screen-md mx-auto  text-base p-3 md:p-4">
                <Chart options={Lines} series={listData} type="line" height={320} />
            </div>
        </div>
    );
};

export default LineChart

