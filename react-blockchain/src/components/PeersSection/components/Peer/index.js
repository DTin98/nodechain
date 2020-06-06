import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Peer({ index, name, color, deletePeer, clickPeer, isHideConnect }) {
  const handleClick = (index) => {
    clickPeer(index);
  };
  const handleDelete = (index) => {
    deletePeer(index);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 20,
      }}
    >
      <FontAwesomeIcon
        icon={faUser}
        id="icon"
        style={{ fontSize: 30, color: color }}
        onClick={() => handleClick(index)}
      />
      <h5>Trương Đại Tín {name}</h5>
      {!isHideConnect ? <button style={styles.btn}>Connect</button> : null}
      <button style={styles.btn}>View History</button>
      <button
        style={styles.btn}
        onClick={() => {
          handleDelete(index);
        }}
      >
        X
      </button>
    </div>
  );
}

const styles = {
  btn: {
    borderRadius: 10,
  },
};

export default Peer;
