
import React, { useState } from 'react';
import logo from '../assets/fusionboard-logo-horizontal.png';
import PivotTable from '../components/PivotTable.jsx';
import FilterPanel from '../components/FilterPanel.jsx';
import SalesTrendChart from '../components/SalesTrendChart.jsx';
import RegionalChart from '../components/RegionalChart.jsx';
import CategoryDonutChart from '../components/CategoryDonutChart.jsx';
import IncomeVsSalesScatter from '../components/IncomeVsSalesScatter.jsx';
import { generateMockData } from '../data/mockData.js';

export default function Dashboard() {
  // Available fields configuration
  const availableFields = [
    { name: 'region', caption: 'Region', type: 'dimension' },
    { name: 'city', caption: 'City', type: 'dimension' },
    { name: 'category', caption: 'Category', type: 'dimension' },
    { name: 'product', caption: 'Product', type: 'dimension' },
    { name: 'segment', caption: 'Segment', type: 'dimension' },
    { name: 'year', caption: 'Year', type: 'time' },
    { name: 'month', caption: 'Month', type: 'time' },
    { name: 'sales', caption: 'Sales', type: 'measure' },
    { name: 'households', caption: 'Households', type: 'measure' },
    { name: 'population', caption: 'Population', type: 'measure' },
    { name: 'avgIncome', caption: 'Average Income', type: 'measure' }
  ];

  // Pivot configuration state
  const [pivotConfig, setPivotConfig] = useState({
    rows: [
      { name: 'region' },
      { name: 'city' }
    ],
    columns: [
      { name: 'category' },
      { name: 'product' }
    ],
    values: [
      { name: 'sales', caption: 'Total Sales' },
      { name: 'households', caption: 'Households' }
    ],
    filters: [
      { name: 'year' },
      { name: 'month' },
      { name: 'segment' }
    ]
  });

  // Function to update pivot configuration
  const updatePivotConfig = (area, fields) => {
    setPivotConfig(prev => ({
      ...prev,
      [area]: fields
    }));
  };

  // Generate sample data for charts
  const chartData = generateMockData(1000);
  return (
    <div style={{ height: '100vh', fontFamily: 'Inter, sans-serif' }}>

      {/* ✅ FULL WIDTH HEADER */}
      <div style={{
        height: '70px',
        background: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        borderBottom: '1px solid #e5e7eb'
      }}>
        
        {/* LEFT: LOGO + TITLE */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img src={logo} alt="FusionBoard" style={{ width: '140px' }} />
          {/* <h3 style={{ margin: 0 }}>FusionBoard</h3> */}
        </div>

        {/* RIGHT: ACTIONS */}
        <div style={{ display: 'flex', gap: '10px' }}>
          <button style={btnStyle}>May 1 - May 31</button>
          <button style={btnStyle}>Filters</button>
          <button style={{ ...btnStyle, background: '#6d28d9', color: '#fff' }}>
            Export
          </button>
        </div>
      </div>

      {/* ✅ BELOW HEADER LAYOUT */}
      <div style={{ display: 'flex', height: 'calc(100vh - 70px)' }}>
        
        {/* SIDEBAR */}
        <div style={{
          width: '280px',
          background: '#1f2937',
          color: '#fff',
          padding: '20px',
          overflowY: 'auto'
        }}>
          {/* Navigation Menu */}
          {/* <nav style={{ marginBottom: '30px' }}>
            {[
              'Dashboard',
              'Audience',
              'Segmentation',
              'Analytics',
              'Reports'
            ].map((item) => (
              <div
                key={item}
                style={{
                  padding: '10px',
                  borderRadius: '8px',
                  marginBottom: '10px',
                  cursor: 'pointer',
                  background: item === 'Dashboard' ? '#2dd4bf22' : 'transparent'
                }}
              >
                {item}
              </div>
            ))}
          </nav> */}

          {/* FilterPanel Component */}
          <FilterPanel 
            availableFields={availableFields}
            pivotConfig={pivotConfig}
            onConfigUpdate={updatePivotConfig}
          />
        </div>

        {/* MAIN CONTENT */}
        <div style={{
          flex: 1,
          background: '#f3f4f6',
          padding: '20px',
          overflow: 'auto'
        }}>
          <h2>Dashboard</h2>

          {/* Full Width Pivot Table */}
          <div style={{
            marginTop: '20px',
            background: '#fff',
            padding: '20px',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
            marginBottom: '20px'
          }}>
            <h4 style={{ marginBottom: '15px', color: '#374151', fontSize: '18px' }}>Sales Crosstab Analysis</h4>
            <PivotTable pivotConfig={pivotConfig} />
          </div>

          {/* Charts Grid - 2x2 Layout */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '20px'
          }}>
            
            {/* Sales Trend Chart */}
            <div style={{
              background: '#fff',
              padding: '20px',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
            }}>
              <SalesTrendChart data={chartData} />
            </div>

            {/* Regional Chart */}
            <div style={{
              background: '#fff',
              padding: '20px',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
            }}>
              <RegionalChart data={chartData} />
            </div>

            {/* Category Donut Chart */}
            <div style={{
              background: '#fff',
              padding: '20px',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
            }}>
              <CategoryDonutChart data={chartData} />
            </div>

            {/* Income vs Sales Scatter Chart */}
            <div style={{
              background: '#fff',
              padding: '20px',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
            }}>
              <IncomeVsSalesScatter data={chartData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const btnStyle = {
  padding: '8px 12px',
  borderRadius: '8px',
  border: '1px solid #e5e7eb',
  background: '#fff',
  cursor: 'pointer'
};