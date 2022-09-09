import React, { useEffect } from "react";
import { Typography, Grid, List, ListItem } from "@mui/material";
import useGameContext from "../../context/GameContext";

function RulesPage() {
  const { setLobbyCode } = useGameContext();
  useEffect(() => setLobbyCode(null), []);
  return (
    <>
      <Grid
        style={{ color: "black" }}
        container
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          background: "rgba(58, 21, 152, 1);",
          paddingY: "20px",
          paddingX: "5px",
        }}
      >
        <Grid
          style={{ color: "black" }}
          item
          xs={8}
          sx={{
            backgroundColor: "#fff",
            color: "#1976d2",
            padding: "30px",
            borderRadius: "80px",
          }}
        >
          <Typography
            sx={{
              marginTop: 0,
              fontFamily: "Poppins",
              fontSize: "3.5rem",
              color: "#fb0004",
            }}
            my={2}
            align={"center"}
            variant="h3"
          >
            Game Rules
          </Typography>
          <Typography variant="h5" my={2} align={"left"}>
            Teams
          </Typography>
          <Typography variant="body1" ml={2} mr={2} align={"left"}>
            <Typography>
              Codenames is a game for two teams. There is a grid of 16 words.
              There are:{" "}
            </Typography>
            <List>
              <ListItem>6 red cards</ListItem>
              <ListItem>6 blue cards</ListItem>
              <ListItem>3 neutral cards</ListItem>
              <ListItem>1 bomb. </ListItem>
            </List>
            <Typography>
              Each team has one SpyMaster and one Operative, and only Spymasters
              see which cards belonging to which teams.
            </Typography>
            <Typography>
              Spymasters take turns giving clues to their teammates (Operatives)
              based on the words that appear on the card, trying to lead them to
              guessing their teams' cards. The team that guesses all their cards
              first wins the game.
            </Typography>
          </Typography>

          <Typography variant="h5" my={2} align={"left"}>
            Giving Clues
          </Typography>
          <Typography paragraph ml={2} mr={2} align={"left"}>
            When it's the SpyMasters turn to give a clue, type in a one word
            clue that relates to one or all of your teams colored cards. Your
            Operatives will only see the clue provided and the 16 cards with the
            words provided. Watch out for the bomb card, it's an automatic game
            over! Avoid clues that would lead to the bomb or to the other team's
            cards. Note: Some clues are not allowed, for example using any words
            provided on the cards, cannot be used.
          </Typography>

          <Typography variant="h5" my={2} align={"left"}>
            Guessing
          </Typography>
          <Typography paragraph ml={2} mr={2} align={"left"}>
            Operatives guess the cards based on their Spymaster's clue. You get
            up to 3 correct guesses for each clue per team turn. To make your
            guess official, select the card. The game will then reveal the color
            of the chosen card, upon hitting submit. If you choose the oposing
            teams card your teams turn is over. On your teams next turn the
            SpyMaster will give a new clue. Notes: Remember clues from previous
            turns. Pay attention to opposing teams clues.
          </Typography>

          <Typography variant="h5" align={"left"}>
            End of Turn
          </Typography>
          <Typography paragraph ml={2} mr={2} align={"left"}>
            Your turn can end in one of three ways: Guessing a word of the
            opponent's color or neutral color. End guessing manually by clicking
            End Turn. Your turn ends upon 3 successful guesses.
          </Typography>

          <Typography variant="h5" align={"left"}>
            Winning and Losing
          </Typography>
          <Typography paragraph ml={2} mr={2} align={"left"}>
            Teams alternate turns. A team wins once all their cards have been
            guessed. They lose if they guess the bomb or the other team
            successfully guesses all of their cards first!
          </Typography>

          <Typography variant="h5" align={"left"}>
            Valid Clues
          </Typography>
          <Typography paragraph ml={2} mr={2} align={"left"}>
            The clue is strictly limited to one word. The Spymaster is expected
            to keep a straight face and they shouldn't comment on players'
            guesses, to avoid giving up any unwanted information. Your clue is
            supposed to be a single word, but Spymasters can agree on more
            flexible rules. For example, you can agree to allow two-word clue,
            like NEW YORK. Give clues in the language you have agreed on. Don't
            use foreign words to give extra information. Don't give clues about
            the letters/length in the word or its position in the grid. Keep
            your clues in the spirit of the game, and if you aren't sure, ask
            the opposing Spymaster (using some form of communication that the
            other players can't hear or see). You can end turn without a guess
            for first and/or second guess. However, a quess is required to
            finish your teams' turn. Or you can make a quess on the first and/or
            second and end your teams' turn on the third without a guess.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
export default RulesPage;
