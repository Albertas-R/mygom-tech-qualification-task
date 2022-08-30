import React from "react";
import { LinkedinIconFa } from "./Icons";

function Title(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <div className="title-info">
        <span>{props.author}</span>
        {` • `}
        <span>
          <a href={`mailto:${props.email}`}>{props.email}</a>
        </span>
        {` • `}
        <a href={`tel:${props.mob}`}>
          <span>{props.mob}</span>
        </a>
        {` • `}
        <a href="https://www.linkedin.com/in/albertas-r/" target="_blank" rel="noopener noreferrer">
          <LinkedinIconFa />
        </a>
      </div>
    </>
  );
}

export default Title;
