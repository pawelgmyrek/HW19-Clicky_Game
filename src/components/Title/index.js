import React from "react";
import "./style.css";

function Title(props) {
  return (
    <>
      <h1 className="title">{props.children}</h1>
      <div className="scores">
        Score: {props.score} Highscore: {props.highscore}
      </div>
    </>
  );
}

export default Title;
