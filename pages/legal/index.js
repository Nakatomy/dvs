import PropTypes from "prop-types";
import { withTranslation } from "i18n";
import {
  Header,
  Section,
  Container,
  Paragraph,
  Heading,
  Title,
  LinkComponent,
  Spacer,
} from "components";

const Legal = ({ t }) => {
  return (
    <>
      <Header />
      <Section>
        <Container width="normal-width" margin="marginTop96">
          <Title>{t("pageTitle")}</Title>
          <Paragraph>{t("paragraph1")}</Paragraph>
          <Paragraph>{t("paragraph2")}</Paragraph>
          <Spacer size="m" />
          <Title>{t("pageTitle2")}</Title>
          <Heading>{t("heading1")}</Heading>
          <Paragraph>
            {t("paragraph3-1")}
            <LinkComponent
              href="https://www.gesetze-im-internet.de/bgb/__766.html"
              color="blue"
            >
              § 766{" "}
            </LinkComponent>
            {t("paragraph3-2")}
            <LinkComponent
              href="https://www.gesetze-im-internet.de/hgb/__350.html"
              color="blue"
            >
              § 350{" "}
            </LinkComponent>
            {t("paragraph3-3")}
            <LinkComponent
              href="https://www.gesetze-im-internet.de/bgb/__766.html"
              color="blue"
            ></LinkComponent>
            {t("paragraph3-4")}
          </Paragraph>
          <Paragraph> {t("paragraph4")}</Paragraph>
          <Heading> {t("heading2")}</Heading>
          <Paragraph> {t("paragraph5")}</Paragraph>
          <Paragraph> {t("paragraph6")}</Paragraph>
          <Heading> {t("heading3")}</Heading>
          <Paragraph> {t("paragraph7")}</Paragraph>
          <Heading> {t("heading4")}</Heading>
          <Paragraph> {t("paragraph8")}</Paragraph>
          <Spacer size="s" />
          <Heading>
            {t("heading5-1")}
            <LinkComponent href="./contacts" color="blue">
              {t("heading5-2")}
            </LinkComponent>
          </Heading>
        </Container>
      </Section>
    </>
  );
};

Legal.getInitialProps = async () => ({
  namespacesRequired: ["legalPage"],
});

Legal.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("legalPage")(Legal);
