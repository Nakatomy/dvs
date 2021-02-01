import PropTypes from "prop-types";
import { withTranslation } from "i18n";
import styles from "./style.module.css";
import { Header, Section, Container, Title, Button, Meta } from "components";
const TermsOfUse = ({ t }) => {
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
          <a
            className={styles.link}
            href="images/cloud-2.png"
            target="_blank"
            download
          >
            {" "}
            {t("downloadLink")}
          </a>
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

TermsOfUse.getInitialProps = async () => ({
  namespacesRequired: ["termsOfUse"],
});

TermsOfUse.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("termsOfUse")(TermsOfUse);
