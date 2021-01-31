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
const Benefits = ({ t }) => {
  return (
    <>
      <Section>
        <Container width="full-width">
          <Title>{t("benefitsTitle")}</Title>
        </Container>
        <Container display="grid" width="full-width">
          <div>
            <Heading background="green">{t("agbHeading1")}</Heading>
            <UlList padding="padding-none">
              <ListItem display="flex" marker="iconCheck">
                {t("benefitsListItem1")}
              </ListItem>
              <ListItem display="flex" marker="iconCheck">
                {t("benefitsListItem2")}
              </ListItem>
              <ListItem display="flex" marker="iconCheck">
                {t("benefitsListItem3")}
              </ListItem>
              <ListItem display="flex" marker="iconCheck">
                {t("benefitsListItem4")}
              </ListItem>
              <ListItem display="flex" marker="iconCheck">
                {t("benefitsListItem5")}
              </ListItem>
              <ListItem display="flex" marker="iconCheck">
                {t("benefitsListItem6")}
              </ListItem>
            </UlList>
          </div>

          <div>
            <Heading background="green">{t("agHeading2")}</Heading>
            <UlList padding="padding-none">
              <ListItem display="flex" marker="iconCheck">
                {t("agListItem7")}
              </ListItem>
              <ListItem display="flex" marker="iconCheck">
                {t("agListItem8")}
              </ListItem>
            </UlList>
          </div>

          <div>
            <Heading background="green">{t("aHeading3")}</Heading>
            <UlList padding="padding-none">
              <ListItem display="flex" marker="iconCheck">
                {t("aListItem9")}
              </ListItem>
              <ListItem display="flex" marker="iconCheck">
                {t("aListItem10")}
              </ListItem>
              <ListItem display="flex" marker="iconCheck">
                {t("aListItem11")}
              </ListItem>
              <ListItem display="flex" marker="iconCheck">
                {t("aListItem12")}
              </ListItem>
            </UlList>
          </div>

          <div>
            <Heading background="green">{t("gHeading4")}</Heading>
            <UlList padding="padding-none">
              <ListItem display="flex" marker="iconCheck">
                {t("gListItem13")}
              </ListItem>
              <ListItem display="flex" marker="iconCheck">
                {t("gListItem14")}
              </ListItem>
              <ListItem display="flex" marker="iconCheck">
                {t("gListItem15")}
              </ListItem>
              <ListItem display="flex" marker="iconCheck">
                {t("gListItem16")}
              </ListItem>
            </UlList>
          </div>

          <div>
            <Heading background="green">{t("bHeading5")}</Heading>
            <UlList padding="padding-none">
              <ListItem display="flex" marker="iconCheck">
                {t("bListItem17")}
              </ListItem>
              <ListItem display="flex" marker="iconCheck">
                {t("bListItem18")}
              </ListItem>
            </UlList>
          </div>
        </Container>
        <Spacer size="m" />
        <Container width="full-width">
          <Button
            href="/"
            title={t("backToHomePage")}
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