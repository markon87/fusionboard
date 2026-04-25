import React from 'react';
import { FiColumns, FiHash, FiFilter, FiMove } from 'react-icons/fi';
import { LuRows3 } from "react-icons/lu";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import {
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

// Sortable Item Component
function SortableItem({ id, field, area, removeField }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: '#374151',
    padding: '6px 10px',
    borderRadius: '6px',
    marginBottom: '4px',
    fontSize: '12px',
    cursor: isDragging ? 'grabbing' : 'grab',
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div {...listeners} style={{ display: 'flex', alignItems: 'center', cursor: 'grab' }}>
          <FiMove size={12} color="#9ca3af" />
        </div>
        <span>{field.caption || field.name}</span>
      </div>
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
  );
}

export default function FilterPanel({ availableFields, pivotConfig, onConfigUpdate, onFieldReorder }) {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  // Handle drag end
  const handleDragEnd = (event, area) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      const oldIndex = pivotConfig[area].findIndex(field => field.name === active.id);
      const newIndex = pivotConfig[area].findIndex(field => field.name === over.id);
      
      if (oldIndex !== -1 && newIndex !== -1) {
        onFieldReorder(area, oldIndex, newIndex);
      }
    }
  };
  
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
  const PivotArea = ({ title, area, IconComponent }) => (
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
        <IconComponent size={16} style={{ color: '#10b981' }} />
        <span>{title}</span>
      </div>
      
      {/* Current Fields with Drag & Drop */}
      <div style={{ marginBottom: '8px', minHeight: '20px' }}>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={(event) => handleDragEnd(event, area)}
        >
          <SortableContext
            items={pivotConfig[area].map(field => field.name)}
            strategy={verticalListSortingStrategy}
          >
            {pivotConfig[area].map((field) => (
              <SortableItem
                key={field.name}
                id={field.name}
                field={field}
                area={area}
                removeField={removeField}
              />
            ))}
          </SortableContext>
        </DndContext>
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
      
      <PivotArea title="Rows" area="rows" IconComponent={LuRows3} />
      <PivotArea title="Columns" area="columns" IconComponent={FiColumns} />
      <PivotArea title="Values" area="values" IconComponent={FiHash} />
      <PivotArea title="Filters" area="filters" IconComponent={FiFilter} />
    </div>
  );
}