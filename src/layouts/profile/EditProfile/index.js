// import { useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import { toast } from "react-toastify";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";
import React, { useState } from "react";

// import { useDispatch, useSelector } from "react-redux";
// import { updateProfile } from "../../../actions/userActions";
// import Loading from "../../../components/Loading/Loading";
// import ErrorMessage from "../../../components/Loading/ErrorMessage";
import axios from "axios";

// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";

function Cover() {
	const [values, setValues] = useState({
		name: "",
		email: "",
		password: "",
	});
	const { name, email, password } = values;
	const handleChange = (event) => {
		setValues({
			...{ name, email, password },
			[event.target.name]: event.target.value,
		});
	};
	// const [name, setName] = useState("");
	// const [email, setEmail] = useState("");
	// const [password, setPassword] = useState("");
	// const updateProfile = { email, password };
	// const navigate = useNavigate();

	// axios.get("https://danerob-api.herokuapp.com/admin/get-one?email=testadmin%40mail.com")

	function onSubmit(event) {
		event.preventDefault();
		console.log(values);
		const payload = {
			newName: values.name,
			newEmail: values.email,
			newPassword: values.password,
		};

		axios
			.patch(
				"https://danerob-api.herokuapp.com/admin/update-admin?email=testadmin%40mail.com",
				payload
			)
			.then((res) => {
				if (res.status === 200) {
					toast.success("Details changed successfully");
				}
				console.log(res.data);
			})
			.catch((error) => console.log("error", error));
	}

	// const [email, setEmail] = useState("");
	// const [password, setPassword] = useState("");
	// const [confirmPassword, setConfirmPassword] = useState("");

	// const dispatch = useDispatch();

	// const userLogin = useSelector((state) => state.userLogin);
	// const { userInfo } = userLogin;

	// const userUpdate = useSelector((state) => state.userUpdate);
	// const { loading, error, success } = userUpdate;

	// useEffect(() => {
	// 	if (!userInfo) {
	// 		// history.push("/");
	// 		<Navigate to="/" />;
	// 	} else {
	// 		setName(userInfo.name);
	// 		setEmail(userInfo.email);
	// 	}
	// }, [history, userInfo]);

	// const submitHandler = (e) => {
	// 	e.preventDefault();onSubmit

	// 	dispatch(updateProfile({ name, email, password }));
	// };

	return (
		<CoverLayout image={bgImage}>
			<Card>
				<MDBox
					variant="gradient"
					bgColor="info"
					borderRadius="lg"
					coloredShadow="success"
					mx={2}
					mt={-3}
					p={3}
					mb={1}
					textAlign="center">
					<MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
						Edit Your Profile
					</MDTypography>
					<MDTypography display="block" variant="button" color="white" my={1}>
						Enter new datails
					</MDTypography>
				</MDBox>
				<MDBox pt={4} pb={3} px={3}>
					<MDBox component="form" role="form">
						{/* {loading && <Loading />}
						{success && (
							<ErrorMessage variant="success">
								Updated Successfully
							</ErrorMessage>
						)}
						{error && <ErrorMessage variant="danger">{error}</ErrorMessage>} */}

						<MDBox mb={2}>
							<MDInput
								type="text"
								name="name"
								onChange={(e) => handleChange(e)}
								value={name}
								label="Name"
								variant="standard"
								fullWidth
							/>
						</MDBox>
						<MDBox mb={2}>
							<MDInput
								type="email"
								name="email"
								label="Email"
								onChange={(e) => handleChange(e)}
								value={email}
								variant="standard"
								fullWidth
							/>
						</MDBox>
						<MDBox mb={2}>
							<MDInput
								name="password"
								type="password"
								// disabled={true}
								label="Password"
								onChange={(e) => handleChange(e)}
								value={password}
								variant="standard"
								fullWidth
							/>
						</MDBox>
						{/* <MDBox mb={2}>
							<MDInput
								type="password"
								label="Confirm Password"
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}
								variant="standard"
								fullWidth
							/>
						</MDBox> */}
						<MDBox mt={4} mb={1}>
							<MDButton
								onClick={(event) => onSubmit(event)}
								variant="gradient"
								color="info"
								fullWidth>
								Set Changes
							</MDButton>
						</MDBox>
					</MDBox>
				</MDBox>
			</Card>
		</CoverLayout>
	);
}

export default Cover;