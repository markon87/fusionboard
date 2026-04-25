import React from 'react';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  LineSeries,
  Category,
  DataLabel,
  Tooltip,
  Legend
} from '@syncfusion/ej2-react-charts';

export default function SalesTrendChart({ data }) {
  // Transform data for time series (group by month/year)
  const getTimeSeriesData = () => {
    const grouped = {};
    
    data.forEach(item => {
      const key = `${item.year}-${item.month}`;
      if (!grouped[key]) {
        grouped[key] = {
          period: `${item.month} ${item.year}`,
          totalSales: 0,
          totalHouseholds: 0
        };
      }
      grouped[key].totalSales += item.sales;
      grouped[key].totalHouseholds += item.households;
    });
    
    return Object.values(grouped).sort((a, b) => {
      const aDate = new Date(a.period);
      const bDate = new Date(b.period);
      return aDate - bDate;
    });
  };

  const chartData = getTimeSeriesData();

  return (
    <ChartComponent
      id="sales-trend-chart"
      primaryXAxis={{
        valueType: 'Category',
        title: 'Time Period'
      }}
      primaryYAxis={{
        title: 'Sales ($)',
        labelFormat: '${value}K'
      }}
      title="Sales Trends Over Time"
      tooltip={{ enable: true }}
      legendSettings={{ visible: true }}
      height="300px"
    >
      <Inject services={[LineSeries, Category, DataLabel, Tooltip, Legend]} />
      <SeriesCollectionDirective>
        <SeriesDirective
          dataSource={chartData}
          xName="period"
          yName="totalSales"
          name="Total Sales"
          type="Line"
          marker={{ visible: true, width: 4, height: 4 }}
        />
      </SeriesCollectionDirective>
    </ChartComponent>
  );
}