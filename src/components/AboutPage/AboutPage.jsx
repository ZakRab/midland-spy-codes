import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import creators from "./creators.json";
import CreatorInfo from "./CreatorInfo";
import { Grid, Typography } from "@mui/material";

function AboutPage() {
	const Item = styled(Paper)(({ theme }) => ({
		backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
		...theme.typography.body2,
		padding: theme.spacing(1),
		textAlign: "center",
		color: theme.palette.text.secondary,
	}));

	return (
		<>
			<Grid
				mx={{
					backgroundColor: "#d30000",
					paddingY: "40px",
				}}
			>
				<Grid
					textAlign="center"
					justifyContent="center"
					alignItems="center"
					align={"center"}
					padding="40px"
				>
					<Typography
						mt={2}
						mb={2}
						variant="h4"
						align={"center"}
						sx={{ marginTop: 0 }}
					>
						About Page
					</Typography>
					<Typography variant="h5">Read about our project!</Typography>
					<Typography paragraph={true} m={5} pb={5}>
						First and for most, thank you for taking the time to look at our
						project! This group project was our final for The Midland Code
						Academy to show off our newly gained knowledge and skills developed
						in the program. We hope you enjoy playing over version of Codename
						that we have worked very hard on. Below you will find small sections
						about each of us and why we decide to get into coding as well as our
						Career goals. Please feel free to connect with us on our included
						social networks.
					</Typography>
				</Grid>
				<div
					style={{
						display: "flex",
						flexWrap: "wrap",
						textAlign: "center",
						justifyContent: "space-evenly",
					}}
				>
					{creators.map((c, idx) => (
						<CreatorInfo key={idx} creator={c} />
					))}
				</div>
			</Grid>
		</>
	);
}

export default AboutPage;
