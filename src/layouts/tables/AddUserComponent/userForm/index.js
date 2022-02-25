/* eslint-disable import/named */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// @mui material components
// import Card from "@mui/material/Card";
// import Switch from "@mui/material/Switch";
// import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";
import { Card } from "@mui/material";
import MDButton from "components/MDButton";
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
// import CoverLayout from "layouts/authentication/components/CoverLayout";
// import { signin, authenticate } from "../../../authentication/index";

function PlatformSettings() {
  const [values, setValues] = useState({
    userAddress: "",
    Amount: "",
    sale: "",
  });

  const { userAddress, Amount, sale } = values;
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log();
    // setValues({ ...values, error: false, loading: true });
  };
  // const [followsMe, setFollowsMe] = useState(true);
  // const [answersPost, setAnswersPost] = useState(false);
  // const [mentionsMe, setMentionsMe] = useState(true);
  // const [newLaunches, setNewLaunches] = useState(false);
  // const [productUpdate, setProductUpdate] = useState(true);
  // const [newsletter, setNewsletter] = useState(false);
  return (
    <Card>
      <MDBox pt={4} pb={3} px={8}>
        <MDBox>
          <MDBox mb={2}>
            <MDInput
              onChange={handleChange("userAddress")}
              value={userAddress}
              type="text"
              label="User Address"
              variant="standard"
              fullWidth
            />
          </MDBox>
          <MDBox mb={2}>
            <FormControl type="text" variant="standard" fullWidth>
              <InputLabel
                id="demo-simple-select-standard-label"
                type="text"
                label="Amount"
                variant="standard"
              >
                Sale
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                label="Sale"
                onChange={handleChange("sale")}
                value={sale}
                fullWidth
                sx={{ textAlign: "left", fontSize: "13px", paddingTop: "5px" }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Seed</MenuItem>
                <MenuItem value={20}>Private</MenuItem>
                <MenuItem value={30}>Public</MenuItem>
              </Select>
            </FormControl>
          </MDBox>
          <MDBox mb={2}>
            <MDInput
              onChange={handleChange("Amount")}
              value={Amount}
              type="text"
              label="Amount"
              variant="standard"
              fullWidth
            />
          </MDBox>
          <MDBox mt={4} mb={1}>
            <MDButton href="/tables" variant="gradient" color="info" onClick={onSubmit} large>
              Submit
            </MDButton>
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default PlatformSettings;
