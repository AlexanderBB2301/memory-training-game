import React from "react";
import "./eachCard.css";

//destructure playingCard
const EachCard = ({ playingCard, handleCardSelected, flipped, disabled }) => {
  const onClickHandle = () => {
    if (!disabled) {
      handleCardSelected(playingCard);
    }
  };

  return (
    <div className="playingCard">
      <div className={flipped ? "flipped" : ""}>
        <img
          className="matchingPic"
          src={playingCard.src}
          alt={playingCard.name}
        />
        <img
          className="cardBack"
          src="/img/musicNote.png"
          alt="Music Note"
          onClick={onClickHandle}
        />
      </div>
    </div>
  );
};

export default EachCard;
