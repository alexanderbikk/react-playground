import Code from "./Code";
import Welcome from "./Welcome";

export default function Conditional() {
  const display = false;
  let message;
  
  message = display ? <Welcome/> : <Code/>;

  return message;
}
