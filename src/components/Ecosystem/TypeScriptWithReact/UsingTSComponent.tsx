interface MyButtonProps {
  title: string;
  disabled: boolean;
}
import { useState } from "react";
function MyButton({ title, disabled }: MyButtonProps) {
  return (
    <>
      <button disabled={disabled}>{title}</button>
    </>
  );
}

export default function ExampleComponentTS() {
  const [str, setStr] = useState<String>("f");
  return (
    <div>
      <h3>Using component with TS</h3>
      <MyButton title="Mybutton" disabled={true}></MyButton>
    </div>
  );
}
