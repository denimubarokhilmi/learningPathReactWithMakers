import { useState } from "react";

function EventHandling() {
  return (
    <div className="event-handling">
      <FormHandling></FormHandling>
      <ButtonHandling></ButtonHandling>
    </div>
  );
}

function FormHandling() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nama:", name);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Masukkan nama"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
      <p>Your name : {name}</p>
    </>
  );
}

function ButtonHandling() {
  const handleClick = () => alert("the click button");
  return (
    <>
      <button onClick={handleClick}>Click button to pop up</button>
    </>
  );
}

export default EventHandling;
