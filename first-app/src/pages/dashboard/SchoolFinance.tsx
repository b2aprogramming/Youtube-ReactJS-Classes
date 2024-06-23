import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { dataset } from './dataset';
const chartSetting = {
    yAxis: [
      {
        label: 'rainfall (mm)',
      },
    ],
    width: 500,
    height: 300,
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: 'translate(-20px, 0)',
      },
    },
  };

  const valueFormatter = (value: number | null) => `${value}mm`;
function SchoolFinanceChart() {
    return (
        <aside className="calendar-finance-block-item">
            <BarChart
                dataset={dataset}
                xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
                series={[
                    { dataKey: 'london', label: 'London', valueFormatter, color: '#FB7D5B'},
                    { dataKey: 'paris', label: 'Paris', valueFormatter, color: '#FCC43E' },
                    
                ]}
                {...chartSetting}
                />
        </aside>
    );
}

export default SchoolFinanceChart;