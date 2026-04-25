import React from 'react';
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  PieSeries,
  AccumulationDataLabel,
  AccumulationTooltip,
  AccumulationLegend
} from '@syncfusion/ej2-react-charts';

export default function CategoryDonutChart({ data }) {
  // Transform data for category breakdown
  const getCategoryData = () => {
    const grouped = {};
    
    data.forEach(item => {
      const key = item.category;
      if (!grouped[key]) {
        grouped[key] = {
          category: item.category,
          totalSales: 0,
          count: 0
        };
      }
      grouped[key].totalSales += item.sales;
      grouped[key].count += 1;
    });
    
    return Object.values(grouped).map(item => ({
      x: item.category,
      y: item.totalSales,
      text: `${item.category}: $${(item.totalSales / 1000).toFixed(0)}K`
    }));
  };

  const chartData = getCategoryData();

  return (
    <AccumulationChartComponent
      id="category-donut-chart"
      title="Sales by Category"
      tooltip={{ enable: true, format: '${point.x} : <b>${point.y}K</b>' }}
      legendSettings={{ visible: true, position: 'Right' }}
      height="300px"
    >
      <Inject services={[PieSeries, AccumulationDataLabel, AccumulationTooltip, AccumulationLegend]} />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          dataSource={chartData}
          xName="x"
          yName="y"
          type="Pie"
          innerRadius="40%"
          dataLabel={{
            visible: true,
            name: 'text',
            position: 'Inside',
            font: { fontWeight: '600', color: '#ffffff' }
          }}
          palettes={['#6366f1', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#ef4444']}
        />
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  );
}