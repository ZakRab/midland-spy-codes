import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));

function GameBoard() {
	const {cards} = useSocket()
   return (
			<Box sx={{ flexGrow: 1 }}>
				<Grid
					container
					spacing={{ xs: 2, md: 3 }}
					columns={{ xs: 1, sm: 8, md: 12 }}
				>
					{Array.from(Array(16)).map((_, index) => (
						<Grid item xs={2} sm={3} md={3} key={index}>
							<Item>
                <p>Card component goes in here.</p>
                </Item>
						</Grid>
					))}
				</Grid>
			</Box>
		);
}

export default GameBoard;
