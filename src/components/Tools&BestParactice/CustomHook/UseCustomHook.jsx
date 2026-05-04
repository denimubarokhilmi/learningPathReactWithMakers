import { useFormInput } from "./hook/useFormInput";

export default function FormWithCustomHook() {
  const firstName = useFormInput("jon");
  const lastName = useFormInput("irbes");

  return (
    <div
      style={{
        marginTop: "70px",
      }}
    >
      <p>using custom hooks :</p>
      <label>First Name :</label>
      <input {...firstName} />
      <label>Last Name :</label>
      <input {...lastName} />
      <p>
        hallo {firstName.value} {lastName.value}
      </p>
    </div>
  );
}
