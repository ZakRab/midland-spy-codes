import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function TeamSelect() {
  return (
    <div>
      <div>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" color="error">
            Join as Operative
          </Button>
          <Button variant="contained">Join as Operative</Button>
        </Stack>
      </div>
      <div>
        <p>Placeholder for Players</p>
      </div>
      <div>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" color="error">
            Join as Spymaster
          </Button>
          <Button variant="contained">Join as Spymaster</Button>
        </Stack>
      </div>
    </div>
  );
}
