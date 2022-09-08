import { Typography } from "@mui/material";
import React, { useMemo } from "react";

function TeamDisplay({ team, players, activeTeam }) {
  const color = useMemo(() => {
    switch (team) {
      case "Red":
        return "error";
      case "Blue":
        return "primary";
      default:
        return "black";
    }
  }, [team]);
  return (
    <div
      className={
        activeTeam === team.toLowerCase()
          ? "bg-white activeTeamBorder background-card min-height150px width70p margin-top box-sizing"
          : "bg-white background-card min-height150px width70p margin-top box-sizing"          
      }
    >
      <Typography
        align="center"
        variant={team !== "Unassigned" ? "h4" : "h6"}
        color={color}
      >
        {team}
        {team === "Unassigned" && " Players"}
      </Typography>
      {players.map((v, idx) => (
        <Typography
          color="black"
          key={idx}
          align="center"
          variant="body1"
          fontWeight={v.role === "spymaster" ? "bold" : "normal"}
        >
          {v.name}
        </Typography>
      ))}
    </div>
  );
}

export default TeamDisplay;
