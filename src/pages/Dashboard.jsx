import { PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import logo from '../assets/fusionboard-logo-horizontal.png';

const data = [
  { Region: 'North', Product: 'Laptop', Sales: 1000 },
  { Region: 'North', Product: 'Phone', Sales: 700 },
  { Region: 'South', Product: 'Laptop', Sales: 900 },
  { Region: 'South', Product: 'Phone', Sales: 400 }
];

export default function Dashboard() {
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
          width: '240px',
          background: '#1f2937',
          color: '#fff',
          padding: '20px'
        }}>
          <nav>
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
          </nav>
        </div>

        {/* MAIN CONTENT */}
        <div style={{
          flex: 1,
          background: '#f3f4f6',
          padding: '20px',
          overflow: 'auto'
        }}>
          <h2>Dashboard</h2>

          <div style={{
            marginTop: '20px',
            background: '#fff',
            padding: '20px',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
          }}>
            <h4 style={{ marginBottom: '10px' }}>Sales Crosstab</h4>

            <PivotViewComponent
              height={400}
              dataSourceSettings={{
                dataSource: data,
                rows: [{ name: 'Region' }],
                columns: [{ name: 'Product' }],
                values: [{ name: 'Sales', caption: 'Total Sales' }]
              }}
            />
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