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
  ListItem
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
        <Container width="full-width">
          <Spacer size="s" />
          <UlList listStyle="list-style-none">
            <ListItem>
              <LinkComponent
                color="blue"
                href="/justitiar-syndikus-it-recht"
                heading="heading"
              >
                Justitiar / Syndikus IT-Recht (m/w/d)
              </LinkComponent>
            </ListItem>
            <Spacer size="s" />
            <ListItem>
              <LinkComponent
                href="/werkstudent-im-marketing-und-vertrieb"
                color="blue"
                heading="heading"
              >
                Werkstudent (m/w/d) im Marketing und Vertrieb gesucht!{" "}
              </LinkComponent>
            </ListItem>
          </UlList>
          <Spacer size="m" />
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
