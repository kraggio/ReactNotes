// import React, { useState } from "react";
import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title);
  // console.log("ExpenseItem evaluated by React");

  // const clickHandler = () => {
  //   setTitle("Updated!");
  //   console.log(title);
  // };
  //removing all these things makes it a stateless component

  return (
    <l1>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </l1>
  );
};

export default ExpenseItem;
