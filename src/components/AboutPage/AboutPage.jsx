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
      <h1>Read about our project!</h1>
      <div>AboutPage</div>
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
