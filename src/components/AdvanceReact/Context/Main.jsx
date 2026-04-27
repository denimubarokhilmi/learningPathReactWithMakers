import Section from "./Section";
import Heading from "./Heading";

export default function MainContext() {
  return (
    <Section level={1}>
      <Heading>heading</Heading>
      <Heading>heading</Heading>
      <Heading>heading</Heading>
      <Section level={2}>
        <Heading>Sub heading</Heading>
        <Heading>Sub heading</Heading>
        <Section level={3}>
          <Heading>Sub heading</Heading>
          <Heading>Sub heading</Heading>
        </Section>
      </Section>
    </Section>
  );
}
