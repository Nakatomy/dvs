import {
  Header,
  Section,
  Container,
  Title,
  Heading,
  GridItem,
  Paragraph,
  ImageComponent,
  Item,
  UlList,
  ListItem,
  Benefits,
  Meta
} from "components";
import servicesEn from "images/services-life-cycle.svg";
import servicesDe from "images/services-life-cycle-de.svg";
import PropTypes from "prop-types";
import { withTranslation } from "i18n";
import { useTranslation } from "react-i18next";

const Services = ({ t }) => {
  const { i18n } = useTranslation();
  return (
    <>
      <Meta
        title={t("pageTitle") + " | Digital Vault Services"}
        desc={t("paragraph1")}
      />
      <Header />
      <Section style="gradient">
        <Container display="grid" width="full-width" margin="marginTop96">
          <GridItem>
            <Title>{t("pageTitle")}</Title>
            <Paragraph>{t("paragraph1")}</Paragraph>
          </GridItem>
          <ImageComponent margin="marginNone" src={i18n.language === "de" ? servicesDe : servicesEn}></ImageComponent>

          <GridItem margin="marginNone">
            <Heading>{t("heading1")}</Heading>
            <UlList>
              <ListItem>{t("listItem1")}</ListItem>
              <ListItem>{t("listItem2")}</ListItem>
            </UlList>
          </GridItem>

          <GridItem margin="marginNone">
            <Heading>{t("heading2")}</Heading>
            <UlList>
              <ListItem>{t("listItem3")}</ListItem>
              <ListItem>{t("listItem4")}</ListItem>
            </UlList>
          </GridItem>

          <GridItem margin="marginNone">
            <Heading>{t("heading3")}</Heading>
            <UlList>
              <ListItem>{t("listItem5")}</ListItem>
              <ListItem>{t("listItem6")}</ListItem>
            </UlList>
          </GridItem>

          <GridItem margin="marginNone">
            <Heading>{t("heading4")}</Heading>
            <UlList>
              <ListItem>{t("listItem7")}</ListItem>
              <UlList>
                <ListItem>{t("listItem8")}</ListItem>
              </UlList>
              <ListItem>{t("listItem9")}</ListItem>
            </UlList>
          </GridItem>
        </Container>
      </Section>
      <Benefits />
    </>
  );
};

Services.getInitialProps = async () => ({
  namespacesRequired: ["services"],
});

Services.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("services")(Services);
