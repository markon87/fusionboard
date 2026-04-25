import React from 'react';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  ScatterSeries,
  Tooltip,
  Legend,
  DataLabel
} from '@syncfusion/ej2-react-charts';

export default function IncomeVsSalesScatter({ data }) {
  // Transform data for income vs sales correlation
  const getScatterData = () => {
    const grouped = {};
    
    data.forEach(item => {
      const key = `${item.region}-${item.city}`;
      if (!grouped[key]) {
        grouped[key] = {
          location: `${item.city}, ${item.region}`,
          totalSales: 0,
          totalHouseholds: 0,
          avgIncome: item.avgIncome,
          count: 0
        };
      }
      grouped[key].totalSales += item.sales;
      grouped[key].totalHouseholds += item.households;
      grouped[key].count += 1;
    });
    
    return Object.values(grouped).map(item => ({
      x: item.avgIncome,
      y: item.totalHouseholds > 0 ? (item.totalSales / item.totalHouseholds) : 0,
      text: item.location,
      size: Math.sqrt(item.totalSales / 10000) // Bubble size based on total sales
    })).filter(item => item.x > 0 && item.y > 0);
  };

  const chartData = getScatterData();

  return (
    <ChartComponent
      id="income-sales-scatter"
      primaryXAxis={{
        title: 'Average Income ($)',
        labelFormat: '${value}K',
        minimum: 0
      }}
      primaryYAxis={{
        title: 'Sales per Household ($)',
        labelFormat: '${value}',
        minimum: 0
      }}
      title="Income vs Sales Efficiency by Location"
      tooltip={{ 
        enable: true,
        format: '${point.text}<br/>Avg Income: $${point.x}K<br/>Sales/Household: $${point.y}'
      }}
      height="300px"
    >
      <Inject services={[ScatterSeries, Tooltip, Legend, DataLabel]} />
      <SeriesCollectionDirective>
        <SeriesDirective
          dataSource={chartData}
          xName="x"
          yName="y"
          name="Markets"
          type="Scatter"
          marker={{ 
            visible: true, 
            width: 8, 
            height: 8,
            shape: 'Circle'
          }}
          fill="#10b981"
        />
      </SeriesCollectionDirective>
    </ChartComponent>
  );
}