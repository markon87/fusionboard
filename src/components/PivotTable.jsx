import React from "react";
import {
  PivotViewComponent,
  Inject,
  VirtualScroll
} from '@syncfusion/ej2-react-pivotview';

export default function PivotTable({ pivotConfig, data }) {
  return (
    <PivotViewComponent
        enableVirtualization={true}        
        dataSourceSettings={{
            dataSource: data,
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