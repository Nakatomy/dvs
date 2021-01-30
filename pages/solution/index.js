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
import cloud from "images/solution/cloud.png";
import services from "images/decentralized.svg";
import crystalBall from "images/crystal-ball.png";
import transparencyImage from "images/transparency.svg";
import PropTypes from "prop-types";
import { withTranslation } from "i18n";
import cn from "classnames";
const Solution = ({ t }) => {
  return (
    <>
      <Header />
      <Section>
        <Container display="grid" width="full-width" margin="marginTop96">
          <GridItem>
            <Title> {t("pageTitle")}</Title>
            <ImageComponent
              className={cn(styles.image, styles["mobile-image"])}
              src={cloud}
              alt="Grey Smoke"
            ></ImageComponent>
            <Heading>{t("heading1")}</Heading>
            <Paragraph>{t("paragraph1")}</Paragraph>
            <Paragraph>{t("paragraph2")}</Paragraph>
            <Paragraph>{t("paragraph3")}</Paragraph>
            <figure>
              <ImageComponent
                className={cn(styles.image, styles["mobile-image"])}
                src={services}
                alt="Services throughout the guarantee life-cycle"
              ></ImageComponent>
              <figcaption>{t("photoCaption1")}</figcaption>
            </figure>
            <Paragraph>{t("paragraph4")}</Paragraph>
          </GridItem>
          <ImageComponent
            className={cn(styles.image, styles["desktop-image"])}
            src={cloud}
            alt="Grey Smoke"
          ></ImageComponent>
        </Container>

        <Container display="grid" width="full-width">
          <figure>
            <ImageComponent
              className={cn(styles.image, styles["desktop-image"])}
              src={services}
              alt="Services throughout the guarantee life-cycle"
            ></ImageComponent>
            <figcaption>{t("photoCaption1")}</figcaption>
          </figure>
          <GridItem>
            <Item>
              <Heading>{t("heading2")}</Heading>
            </Item>
            <UlList>
              <ListItem paragraph="paragraph">{t("listItem1")}</ListItem>
              <ListItem paragraph="paragraph">{t("listItem2")}</ListItem>
              <ListItem paragraph="paragraph">{t("listItem3")}</ListItem>
              <ListItem paragraph="paragraph">{t("listItem4")}</ListItem>
              <ListItem paragraph="paragraph">{t("listItem5")}</ListItem>
              <ListItem paragraph="paragraph">{t("listItem6")}</ListItem>
            </UlList>
            <Paragraph>{t("paragraph5")}</Paragraph>
          </GridItem>
        </Container>
      </Section>

      <Container display="grid" width="full-width">
        <GridItem>
          <Title>{t("pageTitle2")}</Title>
          <ImageComponent
            className={cn(styles.image, styles["mobile-image"])}
            src={crystalBall}
            alt="crystal ball"
          ></ImageComponent>
          <Heading>{t("heading3")}</Heading>
          <Paragraph>{t("paragraph6")}</Paragraph>
          <Paragraph>
            {t("paragraph7-1")}{" "}
            <span className={styles.accent}>{t("paragraph7-2")}</span>{" "}
            {t("paragraph7-3")}
          </Paragraph>
        </GridItem>
        <ImageComponent
          className={cn(styles.image, styles["desktop-image"])}
          src={crystalBall}
          alt="crystal ball"
        ></ImageComponent>
      </Container>

      <Container display="grid" width="full-width">
        <figure>
          <ImageComponent
            className={styles.image}
            src={transparencyImage}
            alt="Services throughout the guarantee life-cycle"
          ></ImageComponent>
          <figcaption>{t("photoCaption2")}</figcaption>
        </figure>
        <GridItem>
          <Heading>{t("heading4")}</Heading>
          <Paragraph>{t("paragraph8")}</Paragraph>
          <Paragraph>{t("paragraph9")}</Paragraph>
        </GridItem>
      </Container>

      <Section>
        <Container width="full-width">
          <Title>{t("pageTitle3")}</Title>
        </Container>
        <Container display="grid" width="full-width">
          <div>
            <Heading background="green">{t("benefitsHeading1")}</Heading>
            <UlList padding="padding-none">
              <ListItem display="flex" marker="iconCheck">
                {t("listItem7")}
              </ListItem>
              <ListItem display="flex" marker="iconCheck">
                {t("listItem8")}
              </ListItem>
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
            <Heading background="green">{t("benefitsHeading2")}</Heading>
            <UlList padding="padding-none">
              <ListItem display="flex" marker="iconCheck">
                {t("listItem13")}
              </ListItem>
              <ListItem display="flex" marker="iconCheck">
                {t("listItem14")}
              </ListItem>
            </UlList>
          </div>

          <div>
            <Heading background="green">{t("benefitsHeading3")}</Heading>
            <UlList padding="padding-none">
              <ListItem display="flex" marker="iconCheck">
                {t("listItem15")}
              </ListItem>
              <ListItem display="flex" marker="iconCheck">
                {t("listItem16")}
              </ListItem>
              <ListItem display="flex" marker="iconCheck">
                {t("listItem17")}
              </ListItem>
              <ListItem display="flex" marker="iconCheck">
                {t("listItem18")}
              </ListItem>
            </UlList>
          </div>

          <div>
            <Heading background="green">{t("benefitsHeading4")}</Heading>
            <UlList padding="padding-none">
              <ListItem display="flex" marker="iconCheck">
                {t("listItem19")}
              </ListItem>
              <ListItem display="flex" marker="iconCheck">
                {t("listItem20")}
              </ListItem>
              <ListItem display="flex" marker="iconCheck">
                {t("listItem21")}
              </ListItem>
              <ListItem display="flex" marker="iconCheck">
                {t("listItem22")}
              </ListItem>
            </UlList>
          </div>

          <div>
            <Heading background="green">{t("benefitsHeading5")}</Heading>
            <UlList padding="padding-none">
              <ListItem display="flex" marker="iconCheck">
                {t("listItem23")}
              </ListItem>
              <ListItem display="flex" marker="iconCheck">
                {t("listItem24")}
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
  );
};

Solution.getInitialProps = async () => ({
  namespacesRequired: ["solution"],
});

Solution.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("solution")(Solution);
