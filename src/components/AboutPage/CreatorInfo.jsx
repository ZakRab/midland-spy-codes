import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandMore from "@mui/icons-material/ExpandMore";



export default function CreatorInfo({ creator }) {
  const { name, photo, bio, linkedIn, github } = creator;
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ width: 345, height: 350 }} component="img" src={photo} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
        </CardContent>
        <CardActions>
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
            onClick={() => window.open(`https://www.linkedin.com/in/${linkedIn}`)}
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>{bio}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
}
