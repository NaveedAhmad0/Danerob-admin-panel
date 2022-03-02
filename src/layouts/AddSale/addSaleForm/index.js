// @mui material components
import Grid from "@mui/material/Grid";
import { useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
// import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
// @mui icons
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import InstagramIcon from "@mui/icons-material/Instagram";
import axios from "axios";
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import { Card } from "@mui/material";
// import MDTypography from "components/MDTypography";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
// import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
// import ProfilesList from "examples/Lists/ProfilesList";
// import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import { toast } from "react-toastify";
// Overview page components
import Header from "layouts/AddSale/components/Header";
// import PlatformSettings from "layouts/profile/components/PlatformSettings";

// Data
// import profilesListData from "layouts/profile/data/profilesListData";

// Images
// import team4 from "assets/images/team-4.jpg";

function Overview() {
	const [isLoading, setIsLoading] = useState(false);
	const [values, setValues] = useState({
		salePeriod: "",
		openDate: "",
		percent: "",
	});
	const { salePeriod, openDate, percent } = values;
	const handleChange = (event) => {
		setValues({
			...{ salePeriod, openDate, percent },
			[event.target.name]: event.target.value,
		});
	};
	const onSubmit = (e) => {
		e.preventDefault();
		let payload = {
			saleType: values.salePeriod,
			cliffOpenDate: values.openDate,
			percentage: parseInt(values.percent),
		};
		setIsLoading(true);

		axios
			.post(`https://danerob-api.herokuapp.com/sale/create-sale`, payload)
			.then((res) => {
				if (res.status == 201) {
					setIsLoading(false);
					toast.success("Sale created successfully");
				}
				console.log(res.data);
			})
			.catch((err) => {});
		console.log(values);
	};
	return (
		<DashboardLayout>
			<DashboardNavbar />
			<MDBox mb={2} />
			<Header>
				<MDBox mt={5} mb={3}>
					<Grid container spacing={1} sx={{ textAlign: "center" }}>
						<Grid item xs={12} md={12} xl={12}>
							<Card>
								<MDBox pt={4} pb={3} px={8}>
									<MDBox>
										<MDBox mb={2}>
											<FormControl type="text" variant="standard" fullWidth>
												<Select
													labelId="demo-simple-select-standard-label"
													id="demo-simple-select-standard"
													label="Sale"
													onChange={(e) => handleChange(e)}
													value={values.salePeriod}
													name="salePeriod"
													fullWidth
													sx={{
														textAlign: "left",
														fontSize: "13px",
														paddingTop: "5px",
													}}>
													<MenuItem value="seed">Seed</MenuItem>
													<MenuItem value="private">Private</MenuItem>
													<MenuItem value="public">Public</MenuItem>
												</Select>
											</FormControl>
										</MDBox>
										<MDBox mb={2}>
											<MDInput
												onChange={(e) => handleChange(e)}
												value={openDate}
												type="text"
												name="openDate"
												label="Cliff Open Date"
												variant="standard"
												fullWidth
											/>
										</MDBox>
										<MDBox mb={2}>
											<MDInput
												onChange={(e) => handleChange(e)}
												value={percent}
												type="text"
												name="percent"
												label="Percent"
												variant="standard"
												fullWidth
											/>
										</MDBox>
										<MDBox mt={4} mb={1}>
											<MDButton
												onClick={(e) => onSubmit(e)}
												href="/manage-sale"
												variant="gradient"
												color="info"
												large>
												Submit
											</MDButton>
										</MDBox>
									</MDBox>
								</MDBox>
							</Card>
						</Grid>
					</Grid>
				</MDBox>
			</Header>
			<Footer />
		</DashboardLayout>
	);
}

export default Overview;
