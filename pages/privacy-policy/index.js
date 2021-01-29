import PropTypes from "prop-types";
import { i18n, withTranslation } from "i18n";
// import styles from "./style.module.css";
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
  } from "components";
const PrivacyPolicy = ({t}) => {
    return (
        <>
        <Header />
        </>
    )
}


PrivacyPolicy.getInitialProps = async () => ({
    namespacesRequired: ["privacyPolicy"],
  });
  
  PrivacyPolicy.propTypes = {
    t: PropTypes.func.isRequired,
  };
  
  export default withTranslation("privacyPolicy")(PrivacyPolicy);