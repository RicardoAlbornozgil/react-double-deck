import React from "react";
import backOfCard from "../../assets/back.png";
import "./PlayingCard.css";
import useFlip from "../../utils/hooks/useFlip";

/* Renders a single playing card with flip functionality. */
function PlayingCard({ front, back = backOfCard }) {
  const [isFacingUp, flipCard] = useFlip();

  return (
    <img
      src={isFacingUp ? front : back}
      alt={isFacingUp ? "front of playing card" : "back of playing card"}
      onClick={flipCard}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
