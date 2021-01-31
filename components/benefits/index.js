import {
    Header,
    Section,
    Container,
    Title,
    Heading,
    Button,
    Spacer,
    GridItem,
    Paragraph,
    ImageComponent,
    Item,
    UlList,
    ListItem
  } from "components";
  import styles from "./style.module.css";
  import cn from "classnames";
  import PropTypes from "prop-types";
import { withTranslation } from "i18n";
const Benefits = ({t}) => {
    return (
        <>
              <Section>
        <Container width="full-width">
          <Title>{t("pageTitle")}</Title>
        </Container>
        <Container display="grid" width="full-width">
          <div>
            <Heading background="green">{t("heading1")}</Heading>
            <UlList padding="padding-none">
              <ListItem display="flex" marker="iconCheck">
                {t("listItem1")}
              </ListItem>
              <ListItem display="flex" marker="iconCheck">
                {t("listItem2")}
              </ListItem>
              <ListItem display="flex" marker="iconCheck">
                {t("listItem3")}
              </ListItem>
              <ListItem display="flex" marker="iconCheck">
                {t("listItem4")}
              </ListItem>
              <ListItem display="flex" marker="iconCheck">
                {t("listItem5")}
              </ListItem>
              <ListItem display="flex" marker="iconCheck">
                {t("listItem6")}
              </ListItem>
            </UlList>
          </div>

          <div>
            <Heading background="green">{t("heading2")}</Heading>
            <UlList padding="padding-none">
              <ListItem display="flex" marker="iconCheck">
                {t("listItem7")}
              </ListItem>
              <ListItem display="flex" marker="iconCheck">
                {t("listItem8")}
              </ListItem>
            </UlList>
          </div>

          <div>
            <Heading background="green">{t("heading3")}</Heading>
            <UlList padding="padding-none">
              <ListItem display="flex" marker="iconCheck">
                {t("listItem9")}
              </ListItem>
              <ListItem display="flex" marker="iconCheck">
                {t("listItem10")}
              </ListItem>
              <ListItem display="flex" marker="iconCheck">
                {t("listItem11")}
              </ListItem>
              <ListItem display="flex" marker="iconCheck">
                {t("listItem12")}
              </ListItem>
            </UlList>
          </div>

          <div>
            <Heading background="green">{t("heading4")}</Heading>
            <UlList padding="padding-none">
              <ListItem display="flex" marker="iconCheck">
                {t("listItem13")}
              </ListItem>
              <ListItem display="flex" marker="iconCheck">
                {t("listItem14")}
              </ListItem>
              <ListItem display="flex" marker="iconCheck">
                {t("listItem15")}
              </ListItem>
              <ListItem display="flex" marker="iconCheck">
                {t("listItem16")}
              </ListItem>
            </UlList>
          </div>

          <div>
            <Heading background="green">{t("heading5")}</Heading>
            <UlList padding="padding-none">
              <ListItem display="flex" marker="iconCheck">
                {t("listItem17")}
              </ListItem>
              <ListItem display="flex" marker="iconCheck">
                {t("listItem18")}
              </ListItem>
            </UlList>
          </div>
        </Container>
        <Spacer size="m" />
        <Container width="full-width">
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
    )
}

Benefits.getInitialProps = async () => ({
    namespacesRequired: ["benefits"],
  });
  
  Benefits.propTypes = {
    t: PropTypes.func.isRequired,
  };
  
  export default withTranslation("benefits")(Benefits);