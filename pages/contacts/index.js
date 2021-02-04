import {
  Header,
  Section,
  Container,
  Title,
  Heading,
  Paragraph,
  LinkComponent,
  Button,
  Spacer,
  Meta,
} from "components";
import PropTypes from "prop-types";
import { withTranslation } from "i18n";
const Contacts = ({ t }) => {
  return (
    <>
      <Meta
        title={t("pageTitle") + " | Digital Vault Services"}
        desc="Digital Vault Services GmbH, Tel: +49 175 8868021, Email: contact@digitalvaultservices.com, Address:  Stahlgruberring 43, <br />
              81829 Munich"
      />
      <Header />
      <Section>
        <Container width="normal-width" margin="marginTop96">
          <Title>{t("pageTitle")}</Title>
          <Heading>Digital Vault Services GmbH</Heading>
          <Paragraph>

            <LinkComponent href="tel:+491758868021" color="blue">
              +49 175 8868021
            </LinkComponent>
          </Paragraph>
          <Paragraph>

            <LinkComponent
              href="mailto:contact@digitalvaultservices.com"
              color="blue"
            >
              contact@digitalvaultservices.com
            </LinkComponent>
          </Paragraph>
          <Paragraph>

            <LinkComponent
              href="https://goo.gl/maps/7shPSvq8q65kGU5W9"
              color="blue"
              target="_blank"
            >
              Stahlgruberring 43, <br />
              81829 {t("Munich")}
            </LinkComponent>
          </Paragraph>
          <Spacer size="s" />
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

Contacts.getInitialProps = async () => ({
  namespacesRequired: ["contacts"],
});

Contacts.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("contacts")(Contacts);
