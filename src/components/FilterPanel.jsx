import React from 'react';

export default function FilterPanel({ availableFields, pivotConfig, onConfigUpdate }) {
  
  // Get fields that are not currently used in any area
  const getAvailableFieldsForArea = (excludeArea = null) => {
    const usedFields = new Set();
    
    // Collect all currently used field names
    Object.entries(pivotConfig).forEach(([area, fields]) => {
      if (area !== excludeArea) {
        fields.forEach(field => usedFields.add(field.name));
      }
    });

    // Return fields not in use
    return availableFields.filter(field => !usedFields.has(field.name));
  };

  // Add field to specific area
  const addField = (area, fieldName) => {
    const field = availableFields.find(f => f.name === fieldName);
    if (field) {
      const newField = { name: field.name, caption: field.caption };
      const updatedFields = [...pivotConfig[area], newField];
      onConfigUpdate(area, updatedFields);
    }
  };

  // Remove field from specific area
  const removeField = (area, fieldName) => {
    const updatedFields = pivotConfig[area].filter(field => field.name !== fieldName);
    onConfigUpdate(area, updatedFields);
  };

  // Component for each pivot area
  const PivotArea = ({ title, area, icon }) => (
    <div style={{ marginBottom: '20px' }}>
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '8px', 
        marginBottom: '10px',
        fontSize: '14px',
        fontWeight: '600',
        color: '#e5e7eb'
      }}>
        <span>{icon}</span>
        <span>{title}</span>
      </div>
      
      {/* Current Fields */}
      <div style={{ marginBottom: '8px' }}>
        {pivotConfig[area].map((field, index) => (
          <div
            key={`${field.name}-${index}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: '#374151',
              padding: '6px 10px',
              borderRadius: '6px',
              marginBottom: '4px',
              fontSize: '12px'
            }}
          >
            <span>{field.caption || field.name}</span>
            <button
              onClick={() => removeField(area, field.name)}
              style={{
                background: 'none',
                border: 'none',
                color: '#ef4444',
                cursor: 'pointer',
                padding: '2px',
                fontSize: '14px'
              }}
            >
              ×
            </button>
          </div>
        ))}
      </div>

      {/* Add Field Button */}
      <select
        onChange={(e) => {
          if (e.target.value) {
            addField(area, e.target.value);
            e.target.value = ''; // Reset select
          }
        }}
        style={{
          width: '100%',
          padding: '6px 8px',
          background: '#4b5563',
          color: '#fff',
          border: '1px solid #6b7280',
          borderRadius: '4px',
          fontSize: '12px'
        }}
      >
        <option value="">+ Add {title}</option>
        {getAvailableFieldsForArea(area).map(field => (
          <option key={field.name} value={field.name}>
            {field.caption}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <div>
      <h4 style={{ 
        margin: '0 0 20px 0', 
        fontSize: '16px', 
        color: '#f3f4f6',
        borderBottom: '1px solid #374151',
        paddingBottom: '10px'
      }}>
        Pivot Fields
      </h4>
      
      <PivotArea title="Rows" area="rows" icon="📊" />
      <PivotArea title="Columns" area="columns" icon="📈" />
      <PivotArea title="Values" area="values" icon="💯" />
      <PivotArea title="Filters" area="filters" icon="🔍" />
    </div>
  );
}