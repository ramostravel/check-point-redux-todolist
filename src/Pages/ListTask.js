import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { isDone } from "../Features/task";
import { deleteTodo } from "../Features/task";
import { useSelector } from "react-redux";
import EditTask from "./EditTask";
import "bootstrap/dist/css/bootstrap.min.css";
export default function ListTask() {
  const state = useSelector((state) => state.task.List);
 
  const [check, setValue] = useState(false);
  const handCheck = () => {
    setValue((current) => !current);
  };
  const [check1, setCheck] = useState(false);
  const handCheck1 = () => {
    setCheck((current) => !current);
  };
 
  const itemsComp = state.filter((item) => item.isDone === true);
  const itemsnotComp = state.filter((item) => item.isDone === false);
  const dispatch = useDispatch();
  const style = {
    display: "flex",
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "row",
    border: "2px solid blue",
    width: "26%",
    margin: "13px 567px",
    borderRadius: "11px",
  };
  return (
    <div>
      <div>
        You have{" "}
        <strong>
          <span style={{ color: "green" }}>{itemsComp.length} completed </span>/{" "}
          <span style={{ color: "red" }}>
            {itemsnotComp.length} not completed
          </span>
        </strong>{" "}
        <div
          style={{ display: "flex", justifyContent: "center", margin: "2px" }}
        >
          <div className="form-check" style={{ margin: "8px" }}>
            <strong>
              <span style={{ color: "blue" }}>Filter with : </span>
            </strong>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                value={check}
                onChange={handCheck}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                is Done
              </label>
            </div>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                value={check1}
                onChange={handCheck1}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Not Done
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className={state.length == 0 ? "active" : ""} style={style}>
        {state
          .filter((val) => {
            if (check === true && check1 === false) {
              if (val.isDone === true) {
                return val;
              }
            } else if (check === false && check1 === true) {
              if (val.isDone === false) {
                return val;
              }
            } else if (
              (check === false && check1 === false) ||
              (check === true && check1 === true)
            ) {
              return val;
            }
          })
          .map((el) => (
            <div
              className="card-body"
              style={{
                Border: "1px solid",
                display: "flex",
                justifyContent: "space-between",
              }}
              key={el.id}
            >
              <p>
                <input
                  type="checkbox"
                  checked={el.isDone}
                  onChange={() =>
                    dispatch(isDone({ id: el.id, isDone: !el.isDone }))
                  }
                ></input>{" "}
                <strong className={el.isDone == false ? "" : "bare"}>
                  {el.Description}
                </strong>
                <span style={{ fontSize: "13px", color: "green" }}>
                  {el.isDone == false ? "" : " * completed "}
                </span>{" "}
              </p>
              <div style={{ display: "flex", alignItems: "center" }}>
                
                {/*<button 
                  //className={index(el.id) === -1 ? "icone" :"icone1"}
                  onClick={() =>
                    dispatch(
                      addfavoris({
                        id: el.id,
                        Description: el.Description,
                        isDone: el.isDone,
                      })
                    )
                  }
                >
                  <FontAwesomeIcon icon={faHeart} />
                </button>*/}
                <Button
                  variant="danger"
                  style={{ margin: "1px" }}
                  onClick={() => dispatch(deleteTodo({ id: el.id }))}
                >
                  Delete
                </Button>
                <EditTask id={el.id} />
              </div>
            </div>
          ))}
        <br></br>
      </div>
    </div>
  );
}
