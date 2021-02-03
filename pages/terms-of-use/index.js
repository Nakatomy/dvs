import PropTypes from "prop-types";
import { withTranslation } from "i18n";
import styles from "./style.module.css";
import { Header, Section, Container, Title, Button, Meta, LinkComponent, Spacer } from "components";
import { useTranslation } from "react-i18next";
import DownloadIcon from '@material-ui/icons/GetApp'
import { withStyles } from "@material-ui/core/styles";
const TermsOfUse = ({ t }) => {
  const { i18n } = useTranslation();
  const GlobalCss = withStyles({
    "@global": {
      ".MuiSvgIcon-root": {
        margin: "0 6px 0 0",
      }
    },
  })(() => null);


  return (
    <>
      <Meta
        title={t("pageTitle") + " | Digital Vault Services"}
        desc="Download Terms of Use"
      />
      <Header />
      <Section>
        <Container width="normal-width" margin="marginTop96" >
          <Title>{t("pageTitle")}</Title>
          <LinkComponent
            className={styles.link}
            align="center"
            href={i18n.language === "de" ? 'documents/20210114_DVS_ToU_2.2_signable_version.pdf' : 'documents/20210127_DVS_ToU_2.2_ENG.pdf'}
            target="_blank"
            download
          >
             <GlobalCss />
            <DownloadIcon />
            
            {" "}
            {t("downloadLink")}
          </LinkComponent>
          <Spacer size="m" />
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
