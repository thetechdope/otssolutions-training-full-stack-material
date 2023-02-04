import React from "react";
import { DataGrid } from "@mui/x-data-grid";

function createData(id, name, calories, fat, carbs, protein) {
  return { id, name, calories, fat, carbs, protein };
}

const columns = [
  { field: "id", headerName: "ID", editable: false },
  {
    field: "name",
    headerName: "Product",
    editable: true,
  },
  {
    field: "calories",
    headerName: "Calories",
    editable: true,
  },
  {
    field: "fat",
    headerName: "Fat",
    editable: true,
  },
  {
    field: "carbs",
    headerName: "Carbs",
    type: "number",
    editable: true,
  },
  {
    field: "protein",
    headerName: "Protein",
    editable: false,
  },
  {
    field: "actions",
    headerName: "Action",
    component: <div>ABC</div>,
  },
];

const rows = [
  createData(1, "Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData(2, "Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData(3, "Eclair", 262, 16.0, 24, 6.0),
  createData(4, "Cupcake", 305, 3.7, 67, 4.3),
  createData(5, "Gingerbread", 356, 16.0, 49, 3.9),
  createData(6, "Pizza", 560, 19.0, 41, 8.9),
  createData(7, "Burger", 780, 19.0, 41, 8.9),
];

export default function AnotherTableComponent() {
  return (
    <div style={{ height: 600, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
