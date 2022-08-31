import React from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import EthanMediaCard from './EthanCard';

function AboutPage() {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <div>AboutPage</div>
      <h1>Read about our project!</h1>
      <p>First and for most, thank you for taking the time to look at our project!
        This group project was our final for The Midland Code Academy to show off our newly gained knowledge and skills developed in the program.
        We hope you enjoy playing over version of Codename that we have worked very hard on.
        Bellow you will find small sections about each of us and why we decide to get into coding as well as our Career goals.
        Please feel free to connect with us on our included social networks.</p>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={12}>
          <Grid item xs={4}>
            <EthanMediaCard />
          </Grid>
          <Grid item xs={4}>
            <Item>Aidey</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>Chris</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>Donella</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>Ethan</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>Zack</Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default AboutPage;
