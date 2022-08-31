import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import creators from "./creators.json";
import CreatorInfo from "./CreatorInfo";

function AboutPage() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <h1>AboutPage</h1>
      <h3>Read about our project!</h3>
      <p>
        First and for most, thank you for taking the time to look at our
        project! This group project was our final for The Midland Code Academy
        to show off our newly gained knowledge and skills developed in the
        program. We hope you enjoy playing over version of Codename that we have
        worked very hard on. Below you will find small sections about each of
        us and why we decide to get into coding as well as our Career goals.
        Please feel free to connect with us on our included social networks.
      </p>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {creators.map((c, idx) => (
          <div
            key={idx}
            style={{ flexBasis: "calc(100% / 3 - 10px)", margin: "5px" }}
          >
            <CreatorInfo creator={c} />
          </div>
        ))}
      </div>
    </>
  );
}

export default AboutPage;
