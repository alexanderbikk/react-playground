import { useContext } from "react";
import { AppContext } from "../App";
import ChangeProfile from "./ChangeProfile";

export default function Profile() {
  const { userName } = useContext(AppContext);
  return (
    <div>
      Profile page {userName}
      <ChangeProfile />
    </div>
  );
}
