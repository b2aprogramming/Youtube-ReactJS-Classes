import { LineChart } from '@mui/x-charts/LineChart';
import { useState } from 'react';
function SchoolPerformanceChart() {
    const [xAxis] = useState(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);
    return (
        <section className="performance-chart">
            <h3 className='pageTitle'>School Performance</h3>
             <LineChart
                xAxis={[{ data: xAxis, scaleType: 'point' }]}
                yAxis={[{data: [0,25, 50, 75, 100].reverse()}]}
                series={[
                    {
                    data: [2, 5.5, 2, 8.5, 1.5, 5, 6, 7, 8, 9, 10, 11],
                    area: true,
                    color: 'rgba(256,196,62,0.5)',
                    label: 'This week'
                    },

                    {
                        data: [1, 7.5, 2, 6.5, 1.5, 4.6, 6, 7.5, 8, 9.9, 10.6, 11],
                        area: true, 
                        label: 'Last week'
                    }
                ]}
                
                height={300}
                />
        </section>
    );
}

export default SchoolPerformanceChart;