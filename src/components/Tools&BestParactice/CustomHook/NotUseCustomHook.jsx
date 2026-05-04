import { useState } from "react";

export default function FormNotUseCustomHook() {
  const [firstName, setFirstName] = useState("jon");
  const [lastName, setLastName] = useState("irbes");

  const handleFirstName = (e) => setFirstName(e.target.value);

  const handleLastName = (e) => setLastName(e.target.value);

  return (
    <div
      style={{
        marginTop: "70px",
      }}
    >
      <p>do not use custom hooks : </p>
      <label htmlFor="firstName">First Name :</label>
      <input value={firstName} onChange={handleFirstName} />
      <label htmlFor="lastName">Last Name :</label>
      <input value={lastName} onChange={handleLastName} />
      <p>
        hallo {firstName} {lastName}
      </p>
    </div>
  );
}
