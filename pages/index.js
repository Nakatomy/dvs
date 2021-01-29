import {
  Meta,
  Container,
  Lead,
  Partners,
  Section,
  GridItem,
  ImageComponent,
  Title,
  Paragraph,
  Button,
  ButtonWrapper,
  LinkComponent,
  Header,
  Nav,
  Heading,
  YoutubeVideo,
  Testimonials,
} from "components";
import Link from "next/link";
import abstractWaves from "images/abstract-waves.png";
import servicesImg from "images/services-life-cycle.svg";
import restApiImg from "images/solution-rest-api.svg";
import legalImg from "images/legal-feather.jpg";
import PropTypes from "prop-types";
import { withTranslation } from "../i18n";
import { useState, useEffect } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function HomePage({ t }) {
  // const [collapseOpen, setCollapseOpen] = useState(false);
  function displayItems() {
    console.log("hello");
  }

  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 600) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  let nav;
  if (scrolled) {
    nav = (
      <Header className="nav">
        <Nav className="nav__container--sticky" />
      </Header>
    );
  }
  return (
    <div>
      <Meta
        title={t("leadTitle") + " | Digital Vault Services"}
        desc={t("solutionParagraph1")}
      />
      {nav}
      <Lead
        title={t("leadTitle")}
        subtitle={t("leadSubtitle")}
        statement={t("leadStatement")}
        primaryButtonName={t("leadPrimaryButtonName")}
        secondaryButtonName={t("leadSecondaryButtonName")}
      />
      <Partners title={t("partnersTitle")} />
      <Section id="solution" style="gradient">
        <Container display="grid" width="full-width" height="minHeight">
          <GridItem>
            <ImageComponent
              src={abstractWaves}
              alt="Asbtract waves"
              width="921"
              height="647"
            />
          </GridItem>
          <GridItem>
            <Title>{t("solutionTitle")}</Title>
            <Paragraph>{t("solutionParagraph1")}</Paragraph>
            <Paragraph>{t("solutionParagraph2")}</Paragraph>
            <Paragraph>{t("solutionParagraph3")}</Paragraph>
            <ButtonWrapper>
              <Button
                href="./solution"
                title={t("ButtonNameMore")}
                size="size-l"
                textColor="text-blue"
                border="border-blue"
              />
            </ButtonWrapper>
          </GridItem>
        </Container>
      </Section>
      <Testimonials>
        <Container width="full-width">
          <Button
            onClick={displayItems}
            title="Show More"
            size="size-l"
            textColor="text-blue"
            background="text-only"
          >
            <ExpandMoreIcon />
          </Button>
        </Container>
      </Testimonials>

      <Section id="services" style="gradient">
        <Container display="grid" width="full-width" height="minHeight">
          <GridItem>
            <Title>{t("servicesTitle")}</Title>
            <ImageComponent
              src={servicesImg}
              alt="Asbtract waves"
              imgType="mobile"
            />
            <Paragraph>{t("servicesParagraph")}</Paragraph>
            <ButtonWrapper>
              <Button
                href="./services"
                title={t("ButtonNameMore")}
                size="size-l"
                textColor="text-blue"
                border="border-blue"
              />
            </ButtonWrapper>
          </GridItem>
          <GridItem>
            <ImageComponent
              src={servicesImg}
              alt="Asbtract waves"
              width="921"
              height="647"
              imgType="desktop"
            />
          </GridItem>
        </Container>
      </Section>
      <Section id="rest-api">
        <Container display="grid" width="full-width" height="minHeight">
          <GridItem>
            <ImageComponent
              src={restApiImg}
              alt="Guarantee life-cycles diagram"
              imgType="desktop"
            />
          </GridItem>
          <GridItem>
            <Title>{t("restApiTitle")}</Title>
            <ImageComponent
              src={restApiImg}
              alt="Guarantee life-cycles diagram"
              imgType="mobile"
            />
            <Paragraph>{t("restApiParagraph1")}</Paragraph>
            <Paragraph>{t("restApiParagraph2")}</Paragraph>
            <Paragraph>{t("restApiParagraph3")}</Paragraph>
            <Paragraph>
              {t("restApiParagraph4-1")}
              <span className="accent"> {t("restApiParagraph4-2")}</span>{" "}
              {t("restApiParagraph4-3")}
              <span className="accent"> {t("restApiParagraph4-4")}</span>
            </Paragraph>
            <ButtonWrapper>
              <Button
                href="/rest-api"
                title={t("ButtonNameMore")}
                size="size-l"
                textColor="text-blue"
                border="border-blue"
              />
            </ButtonWrapper>
          </GridItem>
        </Container>
      </Section>
      <Section id="legal" style="gradient">
        <Container display="grid" width="full-width" height="minHeight">
          <GridItem>
            <Title>{t("legalTitle")}</Title>
            <ImageComponent
              src={legalImg}
              alt="feather illustration"
              imgType="mobile"
            />
            <Paragraph>{t("legalParagraph1")}</Paragraph>
            <Paragraph><span className="accent">{t("legalParagraph2")}</span></Paragraph>
            <Paragraph>{t("legalParagraph3")}</Paragraph>
            <Paragraph>{t("legalParagraph4")}</Paragraph>
            <Paragraph>
              <LinkComponent
                href="https://www.cliffordchance.com/people_and_places/places/europe/germany.html"
                type="paragraph"
                target="_blank"
                rel="noopener"
              >
                CLIFFORD CHANCE
              </LinkComponent>
              <Paragraph>
                Partnerschaft mit beschränkter Berufshaftung von Rechtsanwälten,
                Steuerberatern und Solicitors
              </Paragraph>
            </Paragraph>
            <Paragraph>
              <LinkComponent
                href="https://www.wolftheiss.com/countries/offices/austria/"
                type="paragraph"
                target="_blank"
                rel="noopener"
              >
                WOLF THEISS
              </LinkComponent>
              <Paragraph>Rechtsanwälte GmbH & Co KG</Paragraph>
            </Paragraph>
            <Paragraph>
              <LinkComponent
                href="https://www.clydeco.com/en"
                type="paragraph"
                target="_blank"
                rel="noopener"
              >
                CLYDE & CO LLP
              </LinkComponent>
            </Paragraph>
            <ButtonWrapper>
              <Button
                href="./legal"
                title={t("ButtonNameMore")}
                size="size-l"
                textColor="text-blue"
                border="border-blue"
              />
            </ButtonWrapper>
          </GridItem>
          <GridItem>
            <ImageComponent
              src={legalImg}
              alt="feather illustration"
              imgType="desktop"
            />
          </GridItem>
        </Container>
      </Section>
      <Section id="news">
        <Container display="grid" width="full-width" height="minHeight">
          <GridItem>
            <YoutubeVideo src="https://www.youtube.com/embed/_X0rziclDpI" />
          </GridItem>
          <GridItem>
            <Title>{t("newsTitle")}</Title>
            <Heading>{t("newsSubtitle")}</Heading>
            <Paragraph>{t("newsParagraph1")}</Paragraph>
            <Paragraph>{t("newsParagraph2-1")}<LinkComponent href="./contacts" color="blue">{t("newsParagraph2-2")}</LinkComponent></Paragraph>
          </GridItem>
        </Container>
      </Section>
    </div>
  );
}

HomePage.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

HomePage.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(HomePage);
