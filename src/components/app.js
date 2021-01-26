import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate } from "hookrouter";

import Meme from "./meme";

const App = () => {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    fetch("https:/cjr-meme-api.herokuapp.com/memes")
      .then((res) => res.json())
      .then((data) => setMemes(data))
      .catch((err) => console.error("Fetch Memes error: ", err));
  }, []);

  const deleteMeme = (id) => {
    axios
      .delete(`https:/cjr-meme-api.herokuapp.com/delete-memes/${id}`)
      .then(() => setMemes(meme.filter((meme) => meme.id !== id)))
      .catch((err) => console.log.error("Delete meme Error: ", err));
  };

  const editMeme = (id) => {
    navigate(`/form/${id}`);
  };

  const renderMemes = () => {
    return memes.map((meme) => {
      console.log(meme);
      return (
        <Meme
          key={meme.id}
          {...meme}
          deleteMeme={deleteMeme}
          editMeme={editMeme}
        />
      );
    });
  };
  return <div className="app">{renderMemes()}</div>;
};

export default App;
