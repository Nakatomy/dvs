import {
  Header,
  Section,
  Container,
  Title,
  Meta,
  Spacer,
  Button,
  LinkComponent,
  UlList,
  ListItem,
  Card,
} from "components";

const OpenPositions = () => {
  return (
    <>
      <Meta title={"Open Positions" + " | Digital Vault Services"} />
      <Header />
      <Section>
        <Container width="full-width" margin="marginTop96">
          <Title>Open Positions</Title>
        </Container>
        <Container display="gridCards" width="full-width">
          {/* Column 1 */}
          <Container display="gridCard">
            <Card
              heading="Werkstudent (m/w/d) im Marketing und Vertrieb gesucht!"
              date="Feb 26"
              href="/werkstudent-im-marketing-und-vertrieb"
            ></Card>
          </Container>

          {/* Column 2 */}
          <Container display="gridCard">
            <Card
              heading="Werkstudent (m/w/d)"
              date="Feb 26"
              href="/werkstudent-sales"
            ></Card>
          </Container>
        </Container>
        <Spacer size="m" />
        <Container width="full-width">
          <Button
            href="/"
            title="Back to home page"
            size="size-l"
            textColor="text-white"
            background="blue"
            border="border-white"
          />
        </Container>
      </Section>
    </>
  );
};

export default OpenPositions;
