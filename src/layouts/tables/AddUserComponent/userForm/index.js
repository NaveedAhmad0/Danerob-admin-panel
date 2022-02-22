/* eslint-disable react/no-unescaped-entities */
// import { useState } from "react";
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

function PlatformSettings() {
  // const [followsMe, setFollowsMe] = useState(true);
  // const [answersPost, setAnswersPost] = useState(false);
  // const [mentionsMe, setMentionsMe] = useState(true);
  // const [newLaunches, setNewLaunches] = useState(false);
  // const [productUpdate, setProductUpdate] = useState(true);
  // const [newsletter, setNewsletter] = useState(false);
  const [sale, setSale] = React.useState("");
  const handleChange = (event) => {
    setSale(event.target.value);
  };

  return (
    <Card>
      <MDBox pt={4} pb={3} px={8}>
        <MDBox>
          <MDBox mb={2}>
            <MDInput type="text" label="User Address" variant="standard" fullWidth />
          </MDBox>
          <MDBox mb={2}>
            <FormControl type="text" variant="standard" fullWidth>
              <InputLabel
                id="demo-simple-select-standard-label"
                type="text"
                label="Amount"
                variant="standard"
                fullWidth
              >
                Sale
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={sale}
                onChange={handleChange}
                label="Sale"
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
            <MDInput type="text" label="Amount" variant="standard" fullWidth />
          </MDBox>
          <MDBox mt={4} mb={1}>
            <MDButton href="/tables" variant="gradient" color="info" large>
              Submit
            </MDButton>
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default PlatformSettings;
