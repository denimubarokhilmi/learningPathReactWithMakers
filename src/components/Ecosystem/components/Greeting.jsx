export default function Greeting(props) {
  const { name } = props;

  return (
    <>
      <h1>hello, {name}</h1>
    </>
  );
}
