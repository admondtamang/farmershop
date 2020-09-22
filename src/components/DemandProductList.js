import * as React from "react";
import { DataTable } from "react-native-paper";
import { useSelector } from "react-redux";

const DemandProductList = () => {
  const products = useSelector((state) => state.product.collections);
  return (
    <DataTable style={{ padding: 20 }}>
      <DataTable.Header>
        <DataTable.Title>Product</DataTable.Title>
        <DataTable.Title>Detail</DataTable.Title>
        <DataTable.Title numeric>Quantity</DataTable.Title>
      </DataTable.Header>
      {products.map((data) => {
        if (data.type == "demand")
          return (
            <DataTable.Row key={data.id}>
              <DataTable.Cell>{data.name}</DataTable.Cell>
              <DataTable.Cell>{data.description}</DataTable.Cell>
              <DataTable.Cell numeric>{data.price}</DataTable.Cell>
            </DataTable.Row>
          );
      })}

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
};

export default DemandProductList;
