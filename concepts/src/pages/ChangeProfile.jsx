import { useState, useContext } from "react";
import { AppContext } from "../App";

export default function ChangeProfile() {
  const { setUserName } = useContext(AppContext);
  const [newUserName, setNewUserName] = useState("");
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setNewUserName(e.target.value);
        }}
      />
      <button onClick={() => setUserName(newUserName)}>Change user name</button>
    </div>
  );
}
