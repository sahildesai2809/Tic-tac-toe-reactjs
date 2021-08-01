import React, { useState } from "react";
import Button from "../../components/buttons";

const TictacToe = (props) => {
  const [buttonLabels, setButtonLabels] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
  ]);

  const [activePlayer, setActivePlayer] = useState("X");
  const [score, setScore] = useState({ X: 0, O: 0, draw: 0 });

  const handleClick = (val, buttonIndex) => {
    const newButtonLabels = buttonLabels.map((label, index) => {
      if (buttonIndex === index && label === "?") {
        return activePlayer;
      } else {
        return label;
      }
    });
    setButtonLabels(newButtonLabels);
    changePlayer();

    if (
      (newButtonLabels[0] === "X" &&
        newButtonLabels[1] === "X" &&
        newButtonLabels[2] === "X") ||
      (newButtonLabels[3] === "X" &&
        newButtonLabels[4] === "X" &&
        newButtonLabels[5] === "X") ||
      (newButtonLabels[6] === "X" &&
        newButtonLabels[7] === "X" &&
        newButtonLabels[8] === "X") ||
      (newButtonLabels[0] === "X" &&
        newButtonLabels[3] === "X" &&
        newButtonLabels[6] === "X") ||
      (newButtonLabels[1] === "X" &&
        newButtonLabels[4] === "X" &&
        newButtonLabels[7] === "X") ||
      (newButtonLabels[2] === "X" &&
        newButtonLabels[5] === "X" &&
        newButtonLabels[8] === "X") ||
      (newButtonLabels[0] === "X" &&
        newButtonLabels[4] === "X" &&
        newButtonLabels[8] === "X") ||
      (newButtonLabels[2] === "X" &&
        newButtonLabels[4] === "X" &&
        newButtonLabels[6] === "X")
    ) {
      console.log("X won");
      let xwins = score.X;
      setScore({ ...score, X: xwins + 1 });
      
      restartgame();
    } else if (
      (newButtonLabels[0] === "O" &&
        newButtonLabels[1] === "O" &&
        newButtonLabels[2] === "O") ||
      (newButtonLabels[3] === "O" &&
        newButtonLabels[4] === "O" &&
        newButtonLabels[5] === "O") ||
      (newButtonLabels[6] === "O" &&
        newButtonLabels[7] === "O" &&
        newButtonLabels[8] === "O") ||
      (newButtonLabels[0] === "O" &&
        newButtonLabels[3] === "O" &&
        newButtonLabels[6] === "O") ||
      (newButtonLabels[1] === "O" &&
        newButtonLabels[4] === "O" &&
        newButtonLabels[7] === "O") ||
      (newButtonLabels[2] === "O" &&
        newButtonLabels[5] === "O" &&
        newButtonLabels[8] === "O") ||
      (newButtonLabels[0] === "O" &&
        newButtonLabels[4] === "O" &&
        newButtonLabels[8] === "O") ||
      (newButtonLabels[2] === "O" &&
        newButtonLabels[4] === "O" &&
        newButtonLabels[6] === "O")
    ) {
      console.log("O won");
      let owins = score.O;
      setScore({ ...score, O: owins + 1 });
      restartgame();
    } else {
      const mark = buttonLabels.filter((val) => {
        return val === "?";
      });
      if (mark.length === 0) {
        let draws = score.draw;
        setScore({ ...score, draw: draws + 1 });
        restartgame();
      }
    }
  };

  const changePlayer = () => {
    if (activePlayer === "X") {
      setActivePlayer("O");
    } else {
      setActivePlayer("X");
    }
  };

  const restartgame = ()=>{
    setButtonLabels(["?", "?", "?", "?", "?", "?", "?", "?", "?"]);
  }

  return (
    <div style={styles.root}>
      <div style={styles.gamecontainer}>
        <p>game</p>
        {buttonLabels.map((label, index) => {
          return (
            <span key={index}>
              {index % 3 === 0 ? <br /> : null}
              <Button
                onClick={handleClick}
                index={index}
                style={{ padding: 10, margin: 5 }}
                label={label}
              />
            </span>
          );
        })}
      </div>

      <Button label='restart' onClick={restartgame}/>

      <div style={styles.scorecardcontainer}>
        <p>score card</p>
        <div style={styles.scorecard}>
          <div style={styles.flex1}>X : {score.X}</div>
          <div style={styles.flex1}>O : {score.O}</div>
          <div style={styles.flex1}>Draw : {score.draw}</div>
        </div>
      </div>
    </div>
  );
};
const styles = {
  root: {
    display: "flex",
    marginTop: 30,
  },
  gamecontainer: {
    flex: 1,
  },
  scorecardcontainer: {
    flex: 1,
  },
  scorecard: {
    display: "flex",
  },
  flex1: {
    flex: 1,
  },
};

export default TictacToe;
