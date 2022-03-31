import axios from "axios";
// import { DataTable } from "../../../examples/Tables/DataTable/index.js";
import React from "react";
import { Link } from "react-router-dom";
import API from "../../../backend";
import index from "../../../examples/Tables/DataTable/index";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";

const { useEffect, useState } = React;
export default function AuthorTadle() {
  const [data, setData] = useState([]);

  const init = () => {
    axios
      .get(`${API}/user/get-all`)
      .then((res) => {
        if (res.status === 200) {
          setData(res.data);
        }
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    init();
  }, []);

  return {
    columns: [
      {
        Header: "User address",
        accessor: (d) => d.userAddress,
        width: "40%",
        align: "left",
      },
      { Header: "amount", accessor: "amount", align: "left" },
      {
        Header: "sale period",
        accessor: (d) => {
          return (
            <MDBox ml={-1}>
              <MDBadge
                badgeContent={d.saleType}
                color={
                  d.saleType === "private"
                    ? "success"
                    : d.saleType === "seed"
                    ? "primary"
                    : "warning"
                }
                variant="gradient"
                size="sm"
              />
            </MDBox>
          );
        },

        align: "center",
      },
      {
        Header: "last claim date",
        accessor: (d) => {
          return (
            <MDTypography
              component="a"
              href="#"
              variant="caption"
              color="text"
              fontWeight="medium"
            >
              {d.claimDate || "N/A"}
            </MDTypography>
          );
        },
        align: "center",
      },
      {
        Header: "remaining claim",
        accessor: (d) => {
          return (
            <MDTypography
              component="a"
              href="#"
              variant="caption"
              color="text"
              fontWeight="medium"
            >
              {d.remaningClaim || 0} / {d.totalAmount}
            </MDTypography>
          );
        },
        align: "center",
      },
      {
        Header: "transaction",
        accessor: (d) => {
          return (
            <MDTypography
              component="a"
              href="#"
              variant="caption"
              color="text"
              fontWeight="medium"
            >
              <a
                href={`https://explorer.solana.com/tx/${d.transaction}?cluster=devnet`}
                target="_blank"
                rel="noreferrer"
              >
                {d.transaction ? d.transaction.substring(0, 10) : ""}
                ...
              </a>
            </MDTypography>
          );
        },
        align: "center",
      },
      // { Header: "action", accessor: "action", align: "center" },
    ],
    rows: data,
  };
}
