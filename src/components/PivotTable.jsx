import React from "react";
import {
  PivotViewComponent,
  Inject,
  VirtualScroll
} from '@syncfusion/ej2-react-pivotview';
import { generateMockData } from '../data/mockData.js';

export default function PivotTable({ pivotConfig }) {
  return (
    <PivotViewComponent
        enableVirtualization={true}        
        dataSourceSettings={{
            dataSource: generateMockData(5000),
            rows: pivotConfig.rows,
            columns: pivotConfig.columns,
            values: pivotConfig.values,
            filters: pivotConfig.filters
        }}
        >
        <Inject services={[VirtualScroll]} />
        </PivotViewComponent>
  );
}   