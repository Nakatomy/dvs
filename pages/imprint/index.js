// import styles from "./style.module.css";
import PropTypes from "prop-types";
import { i18n, withTranslation } from "i18n";
import styles from "./style.module.css";
import {
  Header,
  Section,
  Container,
  Paragraph,
  Heading,
  Title,
  Button,
  UlList,
  ListItem,
  Meta,
  Spacer
} from "components";
const Imprint = ({ t }) => {
  return (
    <>
      <Meta
        title={t("pageTitle") + " | Digital Vault Services"}
        desc={t("paragraph1")}
      />
      <Header />
      <Section>
        <Container width="normal-width" margin="marginTop96">
          <Title>{t("pageTitle")}</Title>

          <UlList listStyle="list-style-none">
            <ListItem>Digital Vault Services GmbH</ListItem>
            <ListItem>Stahlgruberring 43</ListItem>
            <ListItem>81829 Munich</ListItem>
            <ListItem>Tel.: +49 175 8868021</ListItem>
            <ListItem>E-Mail: contact@digitalvaultservices.com</ListItem>
            <ListItem>Website: https://www.digitalvaultservices.com</ListItem>
          </UlList>



          <Paragraph>{t("paragraph1")}</Paragraph>
          <Paragraph>{t("paragraph2")}</Paragraph>

          <Spacer size="s" />

<UlList listStyle="list-style-none">
  <Heading>{t("heading3")}</Heading>
  <ListItem>{t("listItem1")}</ListItem>
  <ListItem>{t("listItem2")}</ListItem>
  <ListItem>{t("listItem3")}</ListItem>
  <ListItem>{t("listItem4")}</ListItem>
  <ListItem>{t("listItem5")}</ListItem>
</UlList>
<Spacer size="s" />

          <Heading>{t("heading1")}</Heading>
          <Paragraph>{t("paragraph3")}</Paragraph>
          <Heading>{t("heading2")}</Heading>
          <Paragraph>{t("paragraph4")}</Paragraph>
          <Button
            href="/"
            title={t('ButtonBackToHomePage')}
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

Imprint.getInitialProps = async () => ({
  namespacesRequired: ["imprint"],
});

Imprint.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("imprint")(Imprint);
