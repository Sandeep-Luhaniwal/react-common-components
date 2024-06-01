import { PieChart } from '@mui/x-charts';
import React from 'react';
const PieChartsData = () => {
    return (
        <div className='pb-20 pt-5'>
          
            <div className='flex justify-center items-center'>
                <PieChart
                    series={[
                        {
                            data: [
                                { id: 0, value: 40, label: 'series A', color: '#000000' },
                                { id: 1, value: 10, label: 'series B', color: '#0EE87B' },
                                { id: 2, value: 50, label: 'series C', color: '#B8F40B' },
                                { id: 3, value: 40, label: 'series D', color: '#A60BF4' },
                            ],
                        },
                    ]}
                    width={600}
                    height={300}
                />
            </div>
            <div className='flex justify-center items-center pt-20'>
                <PieChart
                    series={[
                        {
                            data: [
                                { id: 0, value: 40, label: 'series A', color: '#0BF47C' },
                                { id: 1, value: 20, label: 'series B', color: '#2E0BF4' },
                                { id: 2, value: 30, label: 'series C', color: '#360638' },
                                { id: 3, value: 10, label: 'series D', color: '#1EB6E2' },
                                { id: 5, value: 20, label: 'series E', color: '#F7001E' },
                            ],
                            highlightScope: { faded: 'global', highlighted: 'item' },
                            faded: { innerRadius: 10, additionalRadius: -20, color: 'red' },
                        },
                    ]}
                    width={600}
                    height={300}
                />
            </div>
        </div>
    );
};
export default PieChartsData;
