/* eslint-disable import/no-duplicates */
/* eslint-disable consistent-return */
import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import { signin, authenticate } from "../index";
// Images
function Basic() {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
  });
  const { email, password } = values;
  const handleChange = (event) => {
    setValues({
      ...{ email, password },
      [event.target.name]: event.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password })
      .then((data) => {
        if (data && data.error) {
          setValues({ ...values, error: data.error });
        } else {
          authenticate(data, () => {
            setValues({
              ...values,
            });
          });
        }
      })
      .catch(console.log("signin request failed"));
  };
  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Admin login
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput
                onChange={(e) => handleChange(e)}
                value={email}
                type="email"
                name="email"
                label="Email"
                fullWidth
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                onChange={(e) => handleChange(e)}
                value={password}
                type="password"
                label="Password"
                name="password"
                fullWidth
              />
            </MDBox>
            {/* <MDBox display="flex" alignItems="center" ml={-1}>
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Remember me
              </MDTypography>
            </MDBox> */}
            <MDBox mt={4} mb={1}>
              <MDButton
                onClick={(e) => onSubmit(e)}
                href="/dashboard"
                variant="gradient"
                color="info"
                fullWidth
              >
                sign in
              </MDButton>
            </MDBox>
            {/* {loadingMessage()}
            {errorMessage()}
            {performRedirect()} */}
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Forgot password?{" "}
                <MDTypography
                  component={Link}
                  to="/reset-password"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Reset password
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
