import React, { useState, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';

const LineChart = () => {

    const [options, setOptions] = useState({
        dataset: {
            source: []
        },
    });


    useEffect(() => {
        fetch('http://127.0.0.1:5000/')
            .then(response => response.json())
            .then(data => setOptions(
                {
                    dataset: {
                        source: data
                    },
                    xAxis: {
                        type: 'category',
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: {type: 'line'}
                }));
    }, []);

    return (
        <div>
            <ReactECharts option={options} notMerge={true} lazyUpdate={true} />
        </div>
    );
};

// render echarts option.
export default LineChart;
