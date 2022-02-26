/* eslint-disable no-unused-vars */
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import React, { useState, useEffect } from "react";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DataTable from "examples/Tables/DataTable";
// import MaterialTable from "material-table";
import axios from "axios";
// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import MDButton from "components/MDButton";
import MaterialTable from "material-table";
// import { Search } from "@mui/icons-material";

function Tables() {
  const { columns } = authorsTableData();
  // const [data, setData] = useState([]);
  // const columns = [
  //   { title: "User Address", field: "userAddress" },
  //   { title: "Username", field: "userTokenAddress", filtering: false },
  //   { title: "Amount", field: "amount", type: "numeric", filtering: false },
  //   { title: "sale type", field: "saleType", filtering: false },
  //   { title: "last claim date", field: "lastClaimedDate", filtering: false },
  //   { title: "remaining claim", field: "remaningClaim", filtering: false },
  // ];
  // useEffect(() => {
  //   fetch("https://danerob-api.herokuapp.com/user/get-all")
  //     .then((resp) => resp.json())
  //     .then((resp) => {
  //       setData(resp);
  //     });
  // }, []);

  //   return (

  // }
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/user/get-all")
      .then((res) => {
        setData(res.data);
        // console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <MDTypography variant="h6" color="white">
                  Users Table
                </MDTypography>
                <MDButton href="/add-user">Add User</MDButton>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, data }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
              {/* <div>
                <MaterialTable
                  title="User Data"
                  data={data}
                  columns={columns}
                  options={{
                    search: false,
                    paging: false,
                    filtering: true,
                  }}
                  editable={{
                    onRowUpdate: (newData, oldData) =>
                      new Promise((resolve, reject) => {
                        setTimeout(() => {
                          const dataUpdate = [...data];
                          const index = oldData.tableData.id;
                          dataUpdate[index] = newData;
                          setData([...dataUpdate]);

                          resolve();
                        }, 1000);
                      }),
                    onRowDelete: (oldData) =>
                      new Promise((resolve, reject) => {
                        setTimeout(() => {
                          const dataDelete = [...data];
                          const index = oldData.tableData.id;
                          dataDelete.splice(index, 1);
                          setData([...dataDelete]);

                          resolve();
                        }, 1000);
                      }),
                  }}
                />
              </div> */}
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Tables;

/* 
              
              */
