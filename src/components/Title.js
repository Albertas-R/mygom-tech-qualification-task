import React from "react";

function Title(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <p>
        <span>{props.author}</span>
        {` • `}
        <span>
          <a href={`mailto:${props.email}`}>{props.email}</a>
        </span>
        {` • `}
        <a href={`tel:${props.mob}`}>
          <span>{props.mob}</span>
        </a>
      </p>
    </>
  );
}

export default Title;
