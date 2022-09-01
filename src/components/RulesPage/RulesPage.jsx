import React from "react";
import { Typography } from "@mui/material";

function RulesPage() {
  return (
    <>
      <Typography my={2} align={"center"} variant="h3">
        About The Game
      </Typography>
      <Typography variant="h4" my={2} align={"center"}>
        Game Rules
      </Typography>
      <Typography paragraph ml={2} mr={2}>
        Codenames is a game for two teams. There is a grid of 25 words. Some of
        them are secretly assigned to the Red Team, some to the Blue Team. One
        player from each team is the Spymaster, and only Spymasters see which
        words belong to which team. Spymasters take turns giving clues to their
        teammates (Operatives), trying to lead them to guessing their team's
        words. The team that guesses all their words first wins the game.
      </Typography>
      <Typography variant="h5" my={2} align={"center"}>
        Dividing into Teams
      </Typography>
      <Typography paragraph ml={2} mr={2}>
        Divide all players into two teams, red and blue. One player from each
        team should click on Join as Spymaster. He/she will then see the colors
        of the cards. Everyone else should click on Join as Operative. They do
        not see the colors of the cards.
      </Typography>

      <Typography variant="h5" my={2} align={"center"}>
        Giving Clues
      </Typography>
      <Typography paragraph ml={2} mr={2}>
        Spymasters give clues. When it’s your turn to give a clue, tap some
        words in your color that you want to give a clue for. Then type in a one
        word clue that relates to all selected words. Your Operatives will only
        see the clue and the number of marked cards. Watch out for the black
        card – it’s an Assassin! Avoid clues that would lead to the assassin or
        to the other team's words. Note: Some clues are not allowed, for example
        using any form of any word on the board.
      </Typography>

      <Typography variant="h5" my={2} align={"center"}>
        Guessing
      </Typography>
      <Typography paragraph ml={2} mr={2}>
        Operatives guess the words based on the Spymaster’s clue. You can
        discuss the clue with your teammates. You can also suggest a guess by
        picking the card you think matches the clue. To make your guess
        official, select the word. The game will then reveal the color of the
        chosen word. If you guess a word of your team's color, you may guess
        again. You'll want to guess as many words as your Spymaster indicated.
        Note: You can also guess unsolved clues from previous turns.
      </Typography>

      <Typography variant="h5" align={"center"}>
        End of Turn
      </Typography>
      <Typography paragraph ml={2} mr={2}>
        Your turn can end in one of three ways: Guessing a word of the
        opponent's color or neutral color. Ending guessing manually by clicking
        the button. Reaching the maximum number of guesses (clue number + 1).
      </Typography>

      <Typography variant="h5" align={"center"}>
        Winning and Losing
      </Typography>
      <Typography paragraph ml={2} mr={2}>
        Teams alternate turns. A team wins once all their words have been
        guessed. They lose if they guess the Assassin!
      </Typography>

      <Typography variant="h5" align={"center"}>
        Notes
      </Typography>
      <Typography paragraph ml={2} mr={2}>
        Valid Clues The clue is strictly limited to one word and one number. The
        Spymaster is expected to keep a straight face and he shouldn't comment
        on players’ guesses, to avoid giving up any unwanted information. Your
        clue is supposed to be a single word, but Spymasters can agree on more
        flexible rules. For example, you can agree to allow two-word place
        names, like NEW YORK. Don't use any form of a word in the grid as a
        clue. Don't type in SUGAR as a clue for SUGAR and CHOCOLATE, and don't
        try to get around this rule using clues like SUGARY or SUGARCANE. Give
        clues in the language you have agreed on. Don't use foreign words to
        give extra information. The clue needs to relate to the meaning of the
        words. Don't give clues about the letters in the word or its position in
        the grid. Keep your clues in the spirit of the game, and if you aren't
        sure, ask the opposing Spymaster (using some chat channel that the other
        players can't hear or see). Valid number of Guesses No matter what type
        of clue you use, your team always needs to try at least 1 guess.
      </Typography>
    </>
  );
}
export default RulesPage;
