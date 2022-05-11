import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { afficher } from "../Features/task";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
export default function Add() {
  const dispatch = useDispatch();
  const [value, setValue] = useState();
  const onSubmit = (e) => {
    console.log(value);
    e.preventDefault();
    console.log(value);
    dispatch(
      afficher({
        Description: value,
      })
    );
  };

  return (
    <div style={{ margin: "20px", display: "flex", justifyContent: "center" }}>
      <Form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="add a task"
          style={{ margin: "1px" }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
        ></input>
        <Button type="submit" style={{ margin: "1px" }}>
          Add Task
        </Button>
      </Form>
    </div>
  );
}