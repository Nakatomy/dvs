import {
    Header,
    Section,
    Container,
    Title,
    LinkComponent,
    Testimonials,
    Button,
    Spacer
  } from "components";
//   import styles from "./style.module.css";
  import PropTypes from "prop-types";
  import { i18n, withTranslation } from "i18n";
const Solution = ({t}) => {
    return (
        <>
        <Header />
        </>
    )
}

Solution.getInitialProps = async () => ({
    namespacesRequired: [ "solution"]
  });
  
  Solution.propTypes = {
    t: PropTypes.func.isRequired,
  };
  
  export default withTranslation("solution")(Solution);