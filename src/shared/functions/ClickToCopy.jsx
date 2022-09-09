import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

function ClickToCopy({ copyText }) {
	const [isCopied, setIsCopied] = useState(false);

	async function copyTextToClipboard(text) {
		if ("clipboard" in navigator) {
			return await navigator.clipboard.writeText(text);
		}
	}

	// onClick handler function for the copy button
	const handleCopyClick = () => {
		// Asynchronously call copyTextToClipboard
		copyTextToClipboard(copyText)
			.then(() => {
				// If successful, update the isCopied state value
				setIsCopied(true);
				setTimeout(() => {
					setIsCopied(false);
				}, 1500);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<Grid>
			<Typography>{copyText}</Typography>
			<ContentCopyIcon></ContentCopyIcon>
		</Grid>
	);
}

export default ClickToCopy;
