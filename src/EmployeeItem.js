import React from "react";

import defaultavatar from "./defaultavatar.png";
import "./EmployeeItem.css";

function EmployeeItem(props) {
  var src = props.data.avatar;

  if (src == null) {
    src = defaultavatar;
  }

  return (
    <>
      <section>
        <img class="avatar" src={src} alt="avatar" width="50" height="50" />
        <p class="follow">Follow</p>
        <div class="data">
          <h4>NAME</h4>
          <h3 class="data-style">
            {props.data.first_name} {props.data.last_name}
          </h3>
          <h4>TITLE</h4>
          {props.data.title == null ? (
            <h3 class="data-style">Unavailable</h3>
          ) : (
            <h3 class="data-style">{props.data.title}</h3>
          )}
          <h4>EMAIL</h4>
          {props.data.email == null ? (
            <h3 class="data-style">Unavailable</h3>
          ) : (
            <h3 class="data-style">{props.data.email}</h3>
          )}
        </div>
      </section>
    </>
  );
}

export default EmployeeItem;
