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
    userTokenAddress: "",
    Sale: "",
  });

  const [Amount, setAmount] = useState();
  const onChange = (e) => {
    const re = /^[0-9\b]+$/;

    if (e.target.Amount === "" || re.test(e.target.Amount)) {
      setAmount({ [e.target.name]: e.target.Amount });
    }
  };

  const { userAddress, userTokenAddress, Sale } = values;
  const handleChange = (event) => {
    setValues({
      ...{ userAddress, userTokenAddress, Sale },
      [event.target.name]: event.target.value,
    });
  };

  // eslint-disable-next-line no-unused-vars
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(values, Amount);
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
              onChange={(e) => handleChange(e)}
              value={userAddress}
              type="text"
              label="User Address"
              variant="standard"
              name="userAddress"
              fullWidth
            />
          </MDBox>
          <MDBox mb={2}>
            <MDInput
              onChange={(e) => handleChange(e)}
              value={userTokenAddress}
              type="text"
              label="User Token Address"
              variant="standard"
              name="userTokenAddress"
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
                onChange={(e) => handleChange(e)}
                value={Sale}
                name="Sale"
                fullWidth
                sx={{ textAlign: "left", fontSize: "13px", paddingTop: "5px" }}
              >
                <MenuItem value="seed">Seed</MenuItem>
                <MenuItem value="private">Private</MenuItem>
                <MenuItem value="public">Public</MenuItem>
              </Select>
            </FormControl>
          </MDBox>
          <MDBox mb={2}>
            <MDInput
              onChange={onChange}
              value={Amount}
              label="Amount"
              variant="standard"
              name="Amount"
              fullWidth
            />
          </MDBox>
          <MDBox mt={4} mb={1}>
            <MDButton
              href="/tables"
              variant="gradient"
              color="info"
              onClick={(e) => onSubmit(e)}
              large
            >
              Submit
            </MDButton>
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default PlatformSettings;
