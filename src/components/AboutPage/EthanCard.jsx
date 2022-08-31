import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function EthanMediaCard() {
    return (
        <>

            <div></div>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    src='../../../public/TeamPhotos/ethan-profile-photo.jpg'
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Ethan Hanekaus
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        My journey with coding started from being a chef and wanting more out of my life. I aspire to become a team lead in the feild of AI for my career.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </>
    );
}
