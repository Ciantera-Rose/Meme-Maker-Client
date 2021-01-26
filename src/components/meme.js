import React from "react";

const Meme = (props) => {
  return (
    <div className="meme">
      <div className="img-wrapper">
        <img className="name-img" src={props.image} alt="funny_meme" />
      </div>
      <p>{props.text}</p>

      {props.favorite ? <img src="headphones.png" alt="logo" /> : null}

      <button onClick={() => props.deleteMeme(props.id)}>Delete</button>
      <button onClick={() => props.editMeme(props.id)}>Edit</button>
    </div>
  );
};

export default Meme;
