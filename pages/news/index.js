import {
  Header,
  Section,
  Container,
  Heading,
  Title,
  GridItem,
  Meta,
  Spacer,
  Button,
  Paragraph,
  LinkComponent,
  YoutubeVideo,
  ImageComponent,
  ButtonWrapper,
  ButtonLink
} from "components";
import ludgerPhoto from "images/team/MG_Janssen_Ludger_HF.jpg";
import svenPhoto from "images/team/_MG_Matzelsberger-Sven-QF.jpg";
import jaimePhoto from "images/team/_MG_Gimeno-Jaime-QF.jpg";
import davidPhoto from "images/team/_MG_Saive-David-QF.jpg";
import felixPhoto from "images/team/_MG_Scholle-Felix-QF.jpg";
import valeriePhoto from "images/team/MG_Pfannenstiel_Valerie_HF.jpg";
import lenaPhoto from "images/team/_MG_Kimpfbeck-Lena-QF.jpg";
import marinaPhoto from "images/team/_MG_Simmerl-Marina-QF.jpg";
import sabinePhoto from "images/team/_MG_Ostermeier-Sabine-QF.jpg";
import julianPhoto from "images/team/_MG_Geddo-Julian-QF.jpg";
import araPhoto from "images/team/_MG_Trujillo-Ara.jpg";
import annaPhoto from "images/team/_MG_Mitrovic-Anna-QF.jpg";
import udoPhoto from "images/team/_MG_Hohlschuh-Udo-QF.jpg";
import pressRelease from "images/news.jpg";
import whitepaper from "images/whitepaper/revolutionising-guarantees.png";

import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import styles from "./style.module.css";
import PropTypes from "prop-types";
import { i18n, withTranslation } from "i18n";

const News = ({ t }) => {
  return (
    <>
      <Meta title={t("pageTitle") + " | Digital Vault Services"} />
      <Header />
      <Section>
        <Container width="full-width" margin="marginTop96">
          <Title>{t("pageTitle")}</Title>
        </Container>
        <Container display="grid" width="full-width">
          <GridItem>
            <ImageComponent src={whitepaper} imgType="desktop"></ImageComponent>
          </GridItem>
          <GridItem>
            <ImageComponent src={whitepaper} imgType="mobile"></ImageComponent>
            <Title>{t("newsTitle3")}</Title>

            <Paragraph>{t("newsParagraph7")}</Paragraph>
            <ButtonWrapper>
              <Button
                href="/whitepaper"
                title={t("ButtonNameReadMore")}
                size="size-l"
                textColor="text-blue"
                border="border-blue"
              />
            </ButtonWrapper>
          </GridItem>
        </Container>
        <Spacer size="m" />
        <Container display="grid" width="full-width">
          <GridItem>
            <ImageComponent
              src={pressRelease}
              imgType="desktop"
            ></ImageComponent>
          </GridItem>
          <GridItem>
            <ImageComponent
              src={pressRelease}
              imgType="mobile"
            ></ImageComponent>
            <Title>{t("newsTitle2")}</Title>
            <Heading>{t("newsSubtitle2")}</Heading>
            <Paragraph>{t("newsParagraph3")}</Paragraph>
            <Paragraph>{t("newsParagraph4")}</Paragraph>
            <Paragraph>{t("newsParagraph5")}</Paragraph>
            <Paragraph>
              {t("newsParagraph6-1")}{" "}
              <LinkComponent
                color="blue"
                target="_blank"
                href="https://www.businesswire.com/news/home/20210119006003/en/Digital-Vault-Services-GmbH-launches-its-market-solution-for-Digital-Guarantees"
              >
                {t("newsParagraph6-2")}
              </LinkComponent>
            </Paragraph>
          </GridItem>
        </Container>
        <Spacer size="m" />

        <Container display="grid" width="full-width">
          <GridItem>
            <YoutubeVideo
              src="https://www.youtube.com/embed/_X0rziclDpI?start=385"
              videoType="desktop"
            />
          </GridItem>
          <GridItem>
            <YoutubeVideo
              src="https://www.youtube.com/embed/_X0rziclDpI?start=385"
              videoType="mobile"
            />
            <Title>{t("newsTitle")}</Title>
            <Heading>{t("newsSubtitle")}</Heading>
            <Paragraph>{t("newsParagraph1")}</Paragraph>
            {/* <Paragraph>
              {t("newsParagraph2-1")}
              <LinkComponent href="./contacts" color="blue">
                {t("newsParagraph2")}
              </LinkComponent>
            </Paragraph> */}

            <ButtonLink  linkText={t("newsParagraph2")} href="/contacts">
            </ButtonLink>
          </GridItem>
        </Container>
      </Section>
    </>
  );
};

News.getInitialProps = async () => ({
  namespacesRequired: ["newsPage"],
});

News.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("newsPage")(News);
