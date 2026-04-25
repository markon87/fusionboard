import React from 'react';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  ColumnSeries,
  Category,
  DataLabel,
  Tooltip,
  Legend
} from '@syncfusion/ej2-react-charts';

export default function RegionalChart({ data }) {
  // Transform data for regional comparison
  const getRegionalData = () => {
    const grouped = {};
    
    data.forEach(item => {
      const key = item.region;
      if (!grouped[key]) {
        grouped[key] = {
          region: item.region,
          totalSales: 0,
          totalHouseholds: 0,
          totalPopulation: 0
        };
      }
      grouped[key].totalSales += item.sales;
      grouped[key].totalHouseholds += item.households;
      grouped[key].totalPopulation += item.population;
    });
    
    return Object.values(grouped).sort((a, b) => b.totalSales - a.totalSales);
  };

  const chartData = getRegionalData();

  return (
    <ChartComponent
      id="regional-chart"
      primaryXAxis={{
        valueType: 'Category',
        title: 'Region'
      }}
      primaryYAxis={{
        title: 'Sales ($)',
        labelFormat: '${value}K'
      }}
      title="Sales by Region"
      tooltip={{ enable: true }}
      legendSettings={{ visible: true }}
      height="300px"
    >
      <Inject services={[ColumnSeries, Category, DataLabel, Tooltip, Legend]} />
      <SeriesCollectionDirective>
        <SeriesDirective
          dataSource={chartData}
          xName="region"
          yName="totalSales"
          name="Total Sales"
          type="Column"
          fill="#6366f1"
        />
      </SeriesCollectionDirective>
    </ChartComponent>
  );
}