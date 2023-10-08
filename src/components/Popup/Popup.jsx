import React from "react";
import styles from "./Popup.module.css";
function Popup(props, { closeButtonHandler }) {
  return props.trigger ? (
    <div className={styles.popup}>
      <div className={styles.popupinner}>
        <button className={styles.closebtn} onClick={props.closeButtonHandler}>
          OK
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}
export default Popup;
