/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const { useEffect, useState } = React;
export default function AuthorTadle() {
	const [data, setData] = useState([]);
	useEffect(() => {
		axios
			.get(`https://danerob-api.herokuapp.com/user/get-all`)
			.then((res) => {
				if (res.status === 200) {
					const sampleTest = [];
					for (let i = 0; i < res.data.length; i += 1) {
						sampleTest.push({
							useraddress: <Author address={res.data[i].userAddress} />,
							amount: <Job title={res.data[i].amount} />,
							sale: (
								<MDBox ml={-1}>
									<MDBadge
										badgeContent={res.data[i].saleType}
										color="success"
										variant="gradient"
										size="sm"
									/>
								</MDBox>
							),
							lastDate: (
								<MDTypography
									component="a"
									href="#"
									variant="caption"
									color="text"
									fontWeight="medium">
									{res.data[i].claimDate || "N/A"}
								</MDTypography>
							),
							remaining: (
								<MDTypography
									component="a"
									href="#"
									variant="caption"
									color="text"
									fontWeight="medium">
									{res.data[i].remaningClaim || "N/A"}
								</MDTypography>
							),
							tx: (
								<MDTypography
									component="a"
									href="#"
									variant="caption"
									color="text"
									fontWeight="medium">
									<a
										href={`https://explorer.solana.com/tx/${res.data[i].transaction}?cluster=devnet`}
										target="_blank"
										rel="noreferrer">
										{res.data[i].transaction
											? res.data[i].transaction.substring(0, 10)
											: ""}
										...
									</a>
								</MDTypography>
							),
							action: (
								<MDTypography
									component="a"
									href="#"
									variant="caption"
									color="text"
									fontWeight="medium">
									Edit
								</MDTypography>
							),
						});
					}
					setData(sampleTest);
				}
				console.log(res.data);
			})
			.catch((err) => console.log(err));
	}, []);
	const Author = ({ address }) => (
		<MDBox display="flex" alignItems="center" lineHeight={1}>
			{/* <MDAvatar src={image} name={address} size="sm" /> */}
			<MDBox ml={2} lineHeight={1}>
				<MDTypography display="block" variant="button" fontWeight="medium">
					{address}
				</MDTypography>
			</MDBox>
		</MDBox>
	);

	const Job = ({ title }) => (
		<MDBox lineHeight={1} textAlign="left">
			<MDTypography
				display="block"
				variant="caption"
				color="text"
				fontWeight="medium">
				{title}
			</MDTypography>
		</MDBox>
	);

	return {
		columns: [
			{
				Header: "User address",
				accessor: "useraddress",
				width: "40%",
				align: "left",
			},
			{ Header: "amount", accessor: "amount", align: "left" },
			{ Header: "sale period", accessor: "sale", align: "center" },
			{ Header: "last claim date", accessor: "lastDate", align: "center" },
			{ Header: "remaining claim", accessor: "remaining", align: "center" },
			{ Header: "transaction", accessor: "tx", align: "center" },
			{ Header: "action", accessor: "action", align: "center" },
		],

		rows: data,
	};
}
