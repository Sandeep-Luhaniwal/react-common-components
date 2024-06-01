import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const CandelChartData = () => {
    // Get today's date at midnight
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Base timestamp for today
    const baseTimestamp = today.getTime();

    // Generate new data points for today
    const newDataPoints = [
        { x: new Date(baseTimestamp + 0 * 60 * 60 * 10), y: [397788, 397888, 397783, 397833] },
        { x: new Date(baseTimestamp + 1 * 60 * 60 * 10), y: [397867, 397919, 397800, 397835] },
        { x: new Date(baseTimestamp + 2 * 60 * 60 * 10), y: [397873, 397928, 397803, 397935] },
        { x: new Date(baseTimestamp + 3 * 60 * 60 * 10), y: [397935, 397986, 397881, 397922] },
        { x: new Date(baseTimestamp + 4 * 60 * 60 * 10), y: [397948, 397960, 397800, 397864] },
        { x: new Date(baseTimestamp + 5 * 60 * 60 * 10), y: [397920, 397961, 397881, 397924] },
        { x: new Date(baseTimestamp + 6 * 60 * 60 * 10), y: [397946, 397972, 397820, 397943] },
        { x: new Date(baseTimestamp + 7 * 60 * 60 * 10), y: [397970, 398013, 397062, 397950] },
        { x: new Date(baseTimestamp + 8 * 60 * 60 * 10), y: [397981, 398003, 397935, 397961] },
        { x: new Date(baseTimestamp + 9 * 60 * 60 * 10), y: [397981, 398064, 397842, 398032] },
        { x: new Date(1538857800000), y: [398091, 398143, 398079, 398129] },
        { x: new Date(1538857900000), y: [398082, 398137, 398098, 398099] },
        { x: new Date(1538858000000), y: [398069, 398155, 398024, 398115] },
        { x: new Date(1538858100000), y: [398103, 398183, 398083, 398139] },
        { x: new Date(1538858200000), y: [398084, 398091, 398010, 398051] },
        { x: new Date(1538858300000), y: [398121, 398124, 398020, 398066] },
        { x: new Date(1538858400000), y: [398066, 398167, 398044, 398099] },
        { x: new Date(1538858500000), y: [398145, 398226, 398013, 398205] },
        { x: new Date(1538858600000), y: [398194, 398200, 398138, 398123] },
        { x: new Date(1538858700000), y: [398093, 398101, 398005, 398133] },
        { x: new Date(1538858800000), y: [398150, 398167, 398010, 398128] },
        { x: new Date(1538858900000), y: [398143, 398168, 398082, 398129] },
        { x: new Date(1538859000000), y: [398170, 398196, 398158, 398131] },
        { x: new Date(1538857800000), y: [398132, 398174, 398058, 398165] },
        { x: new Date(1538857800000), y: [398159, 398160, 398011, 398107] },
        { x: new Date(1538857800000), y: [398082, 398160, 398107, 398091] },
        { x: new Date(1538857800000), y: [398091, 398105, 398043, 398099] },
        { x: new Date(1538857800000), y: [398099, 398106, 398053, 398092] },
        { x: new Date(1538857800000), y: [398092, 398114, 398034, 398103] },
        { x: new Date(1538857800000), y: [398103, 398131, 398044, 398123] },
        { x: new Date(1538857800000), y: [398120, 398130, 398065, 398116] },
        { x: new Date(1538857800000), y: [398116, 398140, 398091, 398136] },
        { x: new Date(1538857800000), y: [398136, 398140, 398111, 398137] },

    ];

    const [series, setSeries] = useState([{ data: newDataPoints }]);

    const options = {
        chart: {
            type: 'candlestick',
            height: 350
        },
        title: {
            text: 'CandleStick Chart',
            align: 'left'
        },
        xaxis: {
            type: 'datetime'
        },
        yaxis: {
            tooltip: {
                enabled: true
            }
        }
    };

    return (
        <div>
            <div id="chart">
                <ReactApexChart options={options} series={series} type="candlestick" height={350} />
            </div>
            <div id="html-dist"></div>
        </div>
    );
};



export default CandelChartData
