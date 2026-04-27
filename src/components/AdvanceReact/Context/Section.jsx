import { LevelContext } from "./LevelContext";
export default function Section(props) {
  const { children, level } = props;

  return (
    <section
      style={{
        paddingLeft: "10px",
      }}
      className="sections"
    >
      <LevelContext value={level}>{children}</LevelContext>
    </section>
  );
}
