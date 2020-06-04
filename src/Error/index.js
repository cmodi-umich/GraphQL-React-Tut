import React from "react";

import "./style.css";

export default function ErrorMessage({ error }) {
  <div className='ErrorMessage'>
    <small>{error.toString()}</small>
  </div>;
}
