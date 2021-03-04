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

const Jobs = ({ t }) => {
  return (
    <>
      <Meta title={"Jobs" + " | Digital Vault Services"} />
      <Header />
      <Section>
        <Container width="full-width" margin="marginTop96">
          <Title>Open Positions</Title>
        </Container>
        <Container display="gridCards" width="full-width">
          {/* Column 1 */}
          <Container display="gridCard">
            <Card
              heading="Werkstudent Marketing und Sales (m/w/d)"
              date="Feb 26"
              linkText={t("link")}
              href="/jobs/werkstudent-marketing-und-sales"
            ></Card>
          </Container>

          {/* Column 2 */}
          <Container display="gridCard">
            <Card
              heading="Werkstudent Sales (m/w/d)"
              date="Feb 26"
              linkText={t("link")}
              href="/jobs/werkstudent-sales"
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

Jobs.getInitialProps = async () => ({
  namespacesRequired: ["jobs"],
});

Jobs.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("jobs")(Jobs);
