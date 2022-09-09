import React from "react";
import { Grid, Typography } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

function ClickToCopy({ copyText }) {
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
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Grid sx={{ display: "flex" }} onClick={handleCopyClick}>
      <Typography paddingRight="5px">{copyText} </Typography>
      <ContentCopyIcon></ContentCopyIcon>
    </Grid>
  );
}

export default ClickToCopy;
