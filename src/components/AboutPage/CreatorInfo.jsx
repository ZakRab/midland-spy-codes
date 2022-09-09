import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function CreatorInfo({ creator }) {
  const { name, photo, bio, linkedIn, github } = creator;
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Card sx={{ maxWidth: 345, mx: "auto", p: 1, m: 1, display: "flex", flexDirection: "column" }}>
        <CardMedia
          sx={{ width: 345, height: 350 }}
          component="img"
          src={photo}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography>
            {bio}
          </Typography>
        </CardContent>
        <CardActions
          style={{ marginTop: "auto" }}
        >
          <IconButton
            size="small"
            component={"a"}
            target="_blank"
            rel="noopener noreferrer"
            href={`https://www.github.com/${github}`}
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
          <IconButton
            size="small"
            component="a"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              window.open(`https://www.linkedin.com/in/${linkedIn}`)
            }
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>

        </CardActions>

      </Card>
    </>
  );
}

