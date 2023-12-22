import { useState } from "react";
import "./styles.css";

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // if (!firstName || firstName === "") {
    //   return;
    // }
    // if (!lastName || lastName === "") {
    //   return;
    // }
    return setFullName(`Full Name: ${firstName} ${lastName}`);
    
  };
  return (
    <div className="App">
      <h1>Full Name Display</h1>
      <form>
        <input
          type="text"          
          value={firstName}
          required
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <input
          type="text"          
          value={lastName}
          required
          onChange={(e) => setLastName(e.target.value)}
        />
        <br />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      <p>{fullName}</p>
    </div>
  );
}
