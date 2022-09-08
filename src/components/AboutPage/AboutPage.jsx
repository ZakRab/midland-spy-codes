import React from "react";
import creators from "./creators.json";
import CreatorInfo from "./CreatorInfo";
import { Grid, Typography } from "@mui/material";

function AboutPage() {
  return (
    <>
      <Grid
        mx={{
          background:
            "radial-gradient(circle, rgba(211,138,0,1) 0%, rgba(211,0,0,1) 72%, rgba(211,0,0,1) 73%)",
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
            First and foremost, thank you for taking the time to look at our
            project! This group project was our final for The Midland Code
            Academy to show off our newly gained knowledge and skills developed
            in the program. We hope you enjoy playing our version of Codename
            that we have worked very hard on. Below you will find small sections
            about each of us and why we decided to get into coding as well as
            our career goals. Please feel free to connect with us on our
            included social networks.
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
