import React from "react";
import { render } from "react-dom";
import axios from "axios";

import Button from "@material-ui/core/Button";

export default function Poster() {
  const data = {
    title: "this.state.title",
    body: "this.state.body",
  };
  function handleClick(e) {
    e.preventDefault();
    axios
      .post("http://jsonplaceholder.typicode.com/posts", data)
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Primary
      </Button>
    </>
  );
}
