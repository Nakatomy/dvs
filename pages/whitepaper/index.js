import {
  Header,
  Section,
  Container,
  Spacer,
  Title,
  Button,
  Meta,
  Paragraph,
  Heading,
  GridItem,
  UlList,
  ListItem,
  LinkComponent,
  ImageComponent,
  Cover,
} from "components";
import PropTypes from "prop-types";
import { i18n, withTranslation } from "i18n";

import centralisation from "images/whitepaper/abstract-technology-big-data-background.png";
import standardisation from "images/whitepaper/business-concept-glass-world-laptop.png";
import automation from "images/whitepaper/science-background-with-molecule-atom-abstract-structure-science-medical-background-3d-illustration.png";
import security from "images/whitepaper/keyboard-padlock-table-internet-security.png";
import validity from "images/whitepaper/close-up-detail-of-the-scales-of-justice.png";
import acceptance from "images/whitepaper/business-hands-joined-together-teamwork.png";
import cover from "images/whitepaper/double-exposure-image-many-business-people.png";

const Whitepaper = ({t}) => {
  return (
    <>
      <Meta
        title={"Revolutionising guarantees" + " | Digital Vault Services"}
        desc="A new whitepaper from PwC Belgium’s Treasury Consulting Centre of Excellence explores how digitisation can make it safer, faster and simpler to process bonds and guarantees."
        image="https://digitalvaultservices.com/_next/static/images/double-exposure-image-many-business-people-c0bba04f433a136a4fd81edeacefd5d9.png"
        publishDate="2021-02-09"
      />
      <Header />
      <Section>
        <Cover style={{ backgroundImage: `url(${cover})` }}>
          <Container width="full-width" >
            <Title coverTitle>{t("pageTitle")}</Title>
            <Paragraph coverParagraph>
            {t("pageDescription")}
            </Paragraph>
          </Container>
        </Cover>

        <Container width="normal-width" height="minHeight">
          <Spacer size="m" />
          <Heading>{t("heading1")}</Heading>
          <Paragraph>
          {t("paragraph1")}
          </Paragraph>
          <Spacer size="s" />
          <Heading>{t("heading2")}</Heading>
          <Paragraph>
          {t("paragraph2")}
          </Paragraph>
          <Paragraph>
          {t("paragraph3")}
          </Paragraph>
          <Paragraph>
          {t("paragraph4")}
          </Paragraph>

          <Container display="grid-3col" width="full-width">
            <GridItem margin="marginNone">
              <ImageComponent src={centralisation} alt="Centralisation Cloud abstract technology big data"></ImageComponent>
              <Heading>{t("heading3")}</Heading>
              <Paragraph>
              {t("paragraph5")}
              </Paragraph>
              <Paragraph>{t("paragraph6")}</Paragraph>
              <UlList>
                <ListItem>{t("listItem1")}</ListItem>
                <ListItem>{t("listItem2")}</ListItem>
                <ListItem>{t("listItem3")}</ListItem>
              </UlList>
            </GridItem>

            <GridItem margin="marginNone">
              <ImageComponent src={standardisation} alt="Glass globe on a laptop"></ImageComponent>
              <Heading>{t("heading4")}</Heading>
              <Paragraph>
              {t("paragraph7")}
              </Paragraph>
              <Paragraph>{t("paragraph8")}</Paragraph>
              <UlList>
                <ListItem>{t("listItem4")} </ListItem>
                <ListItem>{t("listItem5")}</ListItem>
              </UlList>
            </GridItem>

            <GridItem margin="marginNone">
              <ImageComponent src={automation} alt="science background with molecule atom abstract structure"></ImageComponent>
              <Heading>{t("heading5")}</Heading>
              <Paragraph>
              {t("paragraph9")}
              </Paragraph>
              <Paragraph>{t("paragraph10")}</Paragraph>
              <UlList>
                <ListItem>{t("listItem6")}</ListItem>
                <ListItem>{t("listItem7")}</ListItem>
              </UlList>
            </GridItem>
          </Container>
          <Spacer size="s" />
          <Paragraph>
          {t("paragraph11")}
          </Paragraph>
          <Container display="grid-3col" width="full-width">
            <GridItem margin="marginNone">
              <ImageComponent src={security} alt="lock on a laptop secure system"></ImageComponent>
              <Heading>{t("heading6")}</Heading>
              <Paragraph>
              {t("paragraph12")}
              </Paragraph>
            </GridItem>

            <GridItem margin="marginNone">
              <ImageComponent src={validity} alt="Digital Guarantee Legal validity"></ImageComponent>
              <Heading>{t("heading7")}</Heading>
              <Paragraph>
              {t("paragraph13")}
              </Paragraph>
            </GridItem>

            <GridItem margin="marginNone">
              <ImageComponent src={acceptance} alt="business hands joined together"></ImageComponent>
              <Heading>{t("heading8")}</Heading>
              <Paragraph>
              {t("paragraph14")}
              </Paragraph>
            </GridItem>
          </Container>
          <Spacer size="s" />

          <Heading>{t("heading9")}</Heading>
          <Paragraph>
          {t("paragraph15")}
          </Paragraph>
          <Paragraph>
            <LinkComponent href="https://www.pwc.be/en/news-publications/2021/revolutionising-guarantees.html#bottom-kick-isection" color="blue" target="_blank">
            {t("paragraph16-1")}
            </LinkComponent>{" "}
            {t("paragraph16-2")}
          </Paragraph>
          <Spacer size="s" />
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

Whitepaper.getInitialProps = async () => ({
  namespacesRequired: ['whitepaper'],
})

Whitepaper.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('whitepaper')(Whitepaper)
