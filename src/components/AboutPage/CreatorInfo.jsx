import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function CreatorInfo({ creator }) {
  const { name, photo, bio, linkedIn, github } = creator;
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" src={photo} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {bio}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            component={"a"}
            target="_blank"
            rel="noopener noreferrer"
            href={`https://www.github.com/${github}`}
          >
            GitHub
          </Button>
          <Button
            size="small"
            component="a"
            target="_blank"
            rel="noopener noreferrer"
            href={`https://www.linkedin.com/in/${linkedIn}`}
          >
            LinkedIn
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
