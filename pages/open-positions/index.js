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
  Position,
  Paragraph,
  YoutubeVideo,
} from "components";
import PropTypes from "prop-types";
import { withTranslation } from "i18n";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const OpenPositions = ({ t }) => {
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
              linkText={t("link")}
              href="/open-positions/werkstudent-im-marketing-und-vertrieb"
            ></Card>
          </Container>

          {/* Column 2 */}
          <Container display="gridCard">
            <Card
              heading="Werkstudent (m/w/d)"
              date="Feb 26"
              linkText={t("link")}
              href="/open-positions/werkstudent-sales"
            ></Card>
         
          </Container>
        </Container>
        <Spacer size="m" />
        <Container width="full-width">
          <Button
            href="/"
            title={t("ButtonBackToHomePage")}
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

OpenPositions.getInitialProps = async () => ({
  namespacesRequired: ["positions"],
});

OpenPositions.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("positions")(OpenPositions);
