import React from "react";
import Button from "@material-ui/core/Button";
import BookCard from "./BookCard";
import { useDispatch, useSelector } from "react-redux";

function TopButtons(props) {
  const state = useSelector((state) => state.books);
  const dispatch = useDispatch;

  return (
    <div>
      <Button outline>CURRENTLY READING</Button>
      <Button outline>FINISHED</Button>
    </div>
  );
}

export default TopButtons;
