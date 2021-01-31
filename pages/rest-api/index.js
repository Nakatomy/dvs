import {
  Header,
  Section,
  Container,
  Title,
  Heading,
  Paragraph,
  LinkComponent,
  Button,
  Spacer,
  GridItem,
  ImageComponent,
  UlList,
  ListItem,
  Meta
} from "components";
import styles from "./style.module.css";
import solutionImage from "images/solution-rest-api-smaller.svg";
import scopeImage from "images/api-scope-corporates.svg";
import guarantorsImage from "images/api-scope-guarantors.svg";
import PropTypes from "prop-types";
import cn from "classnames";
import { withTranslation } from "i18n";

const Api = ({ t }) => {
  return (
    <>
      <Meta
        title={t("pageTitle1") + " | Digital Vault Services"}
        desc={t("paragraph1")}
      />
      <Header />
      <Section>
        <Container display="grid" width="full-width" margin="marginTop96">
          <GridItem>
            <Title>{t("pageTitle1")}</Title>
            <figure className={styles["mobile-image"]}>
              <ImageComponent
                className={cn(styles.image, styles["mobile-image"])}
                src={solutionImage}
                alt="Services throughout the guarantee life-cycle"
              ></ImageComponent>
              <figcaption>{t("photoCaption1")}</figcaption>
            </figure>
            <Heading>{t("heading1")}</Heading>
            <Paragraph>{t("paragraph1")}</Paragraph>
            <Paragraph>{t("paragraph2")}</Paragraph>
            <Paragraph>{t("paragraph3")}</Paragraph>
            <Paragraph>
              {t("paragraph4-1")}{" "}
              <span className={styles.accent}>{t("paragraph4-2")}</span>{" "}
              {t("paragraph4-3")}
              <span className={styles.accent}> {t("paragraph4-4")}</span>
            </Paragraph>
          </GridItem>
          <figure className={styles["desktop-image"]}>
            <ImageComponent
              className={cn(styles.image, styles["desktop-image"])}
              src={solutionImage}
              alt="Services throughout the guarantee life-cycle"
            ></ImageComponent>
            <figcaption>{t("photoCaption1")}</figcaption>
          </figure>
        </Container>
      </Section>

      <Section style="gradient">
        <Container width="full-width">
          <Title>{t("pageTitle2")}</Title>
        </Container>
        <Container display="grid" width="full-width">
          <GridItem>
            <ImageComponent
              src={scopeImage}
              className={cn(styles.image, styles["desktop-image"])}
              alt="Services throughout the guarantee life-cycle"
            ></ImageComponent>
          </GridItem>
          <GridItem>
            <ImageComponent
              src={scopeImage}
              className={cn(styles.image, styles["mobile-image"])}
              alt="Services throughout the guarantee life-cycle"
            ></ImageComponent>
            <Heading>{t("heading2")}</Heading>
            <Paragraph>{t("paragraph5")}</Paragraph>
            <UlList>
              <ListItem>
                <span className={styles.accent}>{t("listItem1-1")} </span>
                {t("listItem1-2")}
              </ListItem>
              <ListItem>
                <span className={styles.accent}>{t("listItem2-1")} </span>
                {t("listItem2-2")}
              </ListItem>
              <ListItem>
                <span className={styles.accent}>{t("listItem3-1")} </span>
                {t("listItem3-2")}
              </ListItem>
              <ListItem>
                <span className={styles.accent}>{t("listItem4-1")} </span>
                {t("listItem4-2")}
              </ListItem>
            </UlList>
          </GridItem>
        </Container>
      </Section>

      <Section style="gradient">
        <Container display="grid" width="full-width">
          <GridItem>
            <ImageComponent
              src={guarantorsImage}
              className={cn(styles.image, styles["mobile-image"])}
              alt="Services throughout the guarantee life-cycle"
            ></ImageComponent>
            <Heading>{t("heading3")}</Heading>
            <Paragraph>{t("paragraph6")}</Paragraph>
            <UlList>
              <ListItem>
                <span className={styles.accent}>{t("listItem5-1")} </span>
                {t("listItem5-2")}
              </ListItem>
              <ListItem>
                <span className={styles.accent}>{t("listItem6-1")} </span>
                {t("listItem6-2")}
              </ListItem>
              <ListItem>
                <span className={styles.accent}>{t("listItem7-1")} </span>
                {t("listItem7-2")}
              </ListItem>
            </UlList>
          </GridItem>
          <ImageComponent
            src={guarantorsImage}
            className={cn(styles.image, styles["desktop-image"])}
            alt="Services throughout the guarantee life-cycle"
          ></ImageComponent>
        </Container>
      </Section>

      <Section>
        <Container width="full-width">
          <div className={styles["contact-us-box"]}>
            <Paragraph>{t("paragraph7")}</Paragraph>
            <Paragraph>
              {t("paragraph8-1")}
              <LinkComponent color="blue" href="/contacts">
                {t("paragraph8-2")}
              </LinkComponent>{" "}
              {t("paragraph8-3")}
            </Paragraph>
            <Button
              href="/"
              title={t("ButtonBackToHomePage")}
              size="size-l"
              textColor="text-white"
              background="blue"
              border="border-white"
              alignSelf="center"
            />
          </div>
        </Container>
      </Section>
    </>
  );
};

Api.getInitialProps = async () => ({
  namespacesRequired: ["api"],
});

Api.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("api")(Api);
