import { Typography } from "@mui/material";
import React, { useMemo } from "react";

function TeamDisplay({ team, players }) {
  const color = useMemo(() => {
    switch (team) {
      case "Red":
        return "error";
      case "Blue":
        return "primary";
      default:
        return "warning";
    }
  }, [team]);
  return (
    <div className="background-card margin-auto width70p">
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
