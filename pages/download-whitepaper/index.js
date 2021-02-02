import PropTypes from "prop-types";
import { withTranslation } from "i18n";

import {
  Header,
  Section,
  Container,
  Title,
  Button,
  Meta,
  Paragraph,
  LinkComponent,
} from "components";
const WhitePaper = ({ t }) => {
  return (
    <>
      <Meta
        title={t("pageTitle") + " | Digital Vault Services"}
        desc={t("paragraph1")}
      />
      <Header />
      <Section>
        <Container
          width="normal-width"
          margin="marginTop96"
          align="alignCenter"
        >
          <Title align="alignCenter">{t("pageTitle")}</Title>
          <Paragraph>
            {" "}
            {t("paragraph1")}
            <LinkComponent color="blue" href="./" target="_blank" download>
            {t("link")}
            </LinkComponent>
          </Paragraph>

          <Button
            href="/"
            title={t("ButtonBackToHomePage")}
            size="size-l"
            textColor="text-white"
            background="blue"
            border="border-white"
            margin="marginTop"
          />
        </Container>
      </Section>
    </>
  );
};

WhitePaper.getInitialProps = async () => ({
  namespacesRequired: ["downloadWhitePaper"],
});

WhitePaper.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("downloadWhitePaper")(WhitePaper);
