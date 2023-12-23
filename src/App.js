import { useState } from "react";
import "./styles.css";

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName) {
    //   setFirstName("Please fill out  this field")
    //   return;
    // }
    // if (!lastName) {
    //   setLastName("Please fill  out this field")
    //   return;
    // }
    return setFullName(`Full Name: ${firstName} ${lastName}`);
    }
  };
  return (
    <div className="App">
      <h1>Full Name Display</h1>
      <form onSubmit={(e)=>handleSubmit(e)}>
      <label htmlFor="firstName" >First Name:</label>

        <input
          type="text"          
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          id="firstName"
          required


        />
        <br />
        <label htmlFor="lastName">First Name:</label>

        <input
          type="text"          
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
          id="lastName"
        />
        <br />
        <button type="submit" >
          Submit
        </button>
      </form>
      <p>{fullName}</p>
    </div>
  );
}
