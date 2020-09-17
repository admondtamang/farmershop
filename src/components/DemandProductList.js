import * as React from "react";
import { DataTable } from "react-native-paper";
import { electronics } from "./../Data";

const DemandProductList = () => (
  <DataTable style={{ padding: 20 }}>
    <DataTable.Header>
      <DataTable.Title>Product</DataTable.Title>
      <DataTable.Title>Detail</DataTable.Title>
      <DataTable.Title numeric>Quantity</DataTable.Title>
    </DataTable.Header>
    {electronics.map((data) => (
      <DataTable.Row>
        <DataTable.Cell>{data.name}</DataTable.Cell>
        <DataTable.Cell>{data.description}</DataTable.Cell>
        <DataTable.Cell>{data.price}</DataTable.Cell>
      </DataTable.Row>
    ))}

    <DataTable.Pagination
      page={1}
      numberOfPages={3}
      onPageChange={(page) => {
        console.log(page);
      }}
      label="1-2 of 6"
    />
  </DataTable>
);

export default DemandProductList;
