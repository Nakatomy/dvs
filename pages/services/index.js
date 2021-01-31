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
  Benefits
} from "components";
import services from "images/services-life-cycle.svg";
import PropTypes from "prop-types";
import { withTranslation } from "i18n";

const Services = ({ t }) => {
  return (
    <>
      <Header />
      <Section style="gradient">
        <Container display="grid" width="full-width" margin="marginTop96">
          <GridItem>
            <Title>{t("pageTitle")}</Title>
            <Paragraph>{t("paragraph1")}</Paragraph>
          </GridItem>
          <ImageComponent margin="marginNone" src={services}></ImageComponent>

          <GridItem>
            <Heading>{t("heading1")}</Heading>
            <UlList>
              <ListItem>{t("listItem1")}</ListItem>
              <ListItem>{t("listItem2")}</ListItem>
            </UlList>
          </GridItem>

          <GridItem>
            <Heading>{t("heading2")}</Heading>
            <UlList>
              <ListItem>{t("listItem3")}</ListItem>
              <ListItem>{t("listItem4")}</ListItem>
            </UlList>
          </GridItem>

          <GridItem>
            <Heading>{t("heading3")}</Heading>
            <UlList>
              <ListItem>{t("listItem5")}</ListItem>
              <ListItem>{t("listItem6")}</ListItem>
            </UlList>
          </GridItem>

          <GridItem>
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
