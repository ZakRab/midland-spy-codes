import React from "react";

function Card(card) {
  const [cardColor, setCardColor] = useState();

  return (
    <div>
      <div style={{ backgroundColor: cardColor }}>
        <p>{card.word}</p>
      </div>
    </div>
  );
}

export default Card;
