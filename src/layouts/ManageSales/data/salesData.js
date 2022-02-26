/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Dataa() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios("https://danerob-api.herokuapp.com/sale/get-all",{
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },

    })
      .then((res) => {
        if (res.status == 200) {
          const sampleTest = [];
          for (let i = 0; i < res.data.length; i += 1) {
            sampleTest.push({
              Sale: (
                <MDBox ml={-1}>
                  <MDBadge badgeContent={res.data[i].saleType} color="secondary" variant="gradient" size="sm" />
                </MDBox>
              ),
              function: <Date title={res.data[i].cliffOpenDate} />,
              status: <Percent title={res.data[i].percentage} />,
              action: (
                <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                  Edit
                </MDTypography>
              ),
            })
          }
          setData(sampleTest);
        }
        
      })
      .catch((err) => console.log(err));
  }, []);

  const Date = ({ title }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
    </MDBox>
  );
  const Percent = ({ title }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Sale Period", accessor: "Sale", align: "center" },
      { Header: "Cliff Open Date", accessor: "function", align: "center" },
      { Header: "Percent", accessor: "status", align: "left" },
    ],

    rows: data,
  };
}
