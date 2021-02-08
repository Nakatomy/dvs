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

const Whitepaper = () => {
  return (
    <>
      <Meta
        title={"Revolutionising guarantees" + " | Digital Vault Services"}
        desc="A new whitepaper from PwC Belgium’s Treasury Consulting Centre of Excellence explores how digitisation can make it safer, faster and simpler to process bonds and guarantees."
        content="noindex"
      />
      <Header />
      <Section>
        <Cover style={{ backgroundImage: `url(${cover})` }}>
          <Container width="full-width">
            <Title>Revolutionising guarantees</Title>
            <Paragraph>
              A new whitepaper from PwC Belgium’s Treasury Consulting Centre of
              Excellence explores how digitisation can make it safer, faster and
              simpler to process bonds and guarantees.
            </Paragraph>
          </Container>
        </Cover>

        <Container width="normal-width" height="minHeight">
          <Spacer size="m" />
          <Heading>A pillar of the financial system</Heading>
          <Paragraph>
            Across the globe, businesses rely on bonds and guarantees to support
            their growth. They are essential to the financial system. Yet the
            processes involved are all too often fraught with cumbersome pain
            points from end to end. Even in today’s digital era, the world of
            bonds and guarantees comprises a multitude of eclectic systems and
            is largely paper-based. With bespoke agreements and lengthy
            back-and-forth sign-off procedures, a guarantee or bond can take
            weeks to put in place and even longer to release. But it doesn’t
            have to be that way.
          </Paragraph>
          <Spacer size="s" />
          <Heading>Safer, faster, simpler</Heading>
          <Paragraph>
            We have spent two years collaborating with a working group of 16
            leaders from major corporations, banks and credit insurance
            companies, to investigate the best solution for centrally issuing
            and storing instruments such as bank guarantees, surety bonds and
            standby letters of credit.
          </Paragraph>
          <Paragraph>
            Drawing on their in-house knowledge of the landscape, as well as
            surveys and interviews with these experts, PwC has developed an
            independent perspective on the possibility of digitising the
            guarantee business and the benefits it could bring.
          </Paragraph>
          <Paragraph>
            The resulting paper identifies the typical pain points in today’s
            processes and examines how digitisation can mitigate them.
          </Paragraph>

          <Container display="grid-3col" width="full-width">
            <GridItem margin="marginNone">
              <ImageComponent src={centralisation}></ImageComponent>
              <Heading>Centralisation</Heading>
              <Paragraph>
                Under the current system, information is scattered, making it
                difficult to achieve oversight and control large numbers of
                guarantees. Digitisation can provide:
              </Paragraph>
              <UlList>
                <ListItem>a single, central repository</ListItem>
                <ListItem>an up-to-date audit trail</ListItem>
                <ListItem>streamlined communication</ListItem>
              </UlList>
            </GridItem>

            <GridItem margin="marginNone">
              <ImageComponent src={standardisation}></ImageComponent>
              <Heading>Standardisation</Heading>
              <Paragraph>
                Today, each actor in the ecosystem uses different conventions
                and set-ups. A digital revolution could quickly and efficiently:
              </Paragraph>
              <UlList>
                <ListItem>establish a single set standard </ListItem>
                <ListItem>simplify the procedure</ListItem>
              </UlList>
            </GridItem>

            <GridItem margin="marginNone">
              <ImageComponent src={automation}></ImageComponent>
              <Heading>Automation</Heading>
              <Paragraph>
                Perpetual paperwork leads to inefficiencies in processing and an
                increase in the risk of error. An automated system would:
              </Paragraph>
              <UlList>
                <ListItem>eliminate potential for human error</ListItem>
                <ListItem>speed up the process</ListItem>
              </UlList>
            </GridItem>
          </Container>
          <Spacer size="s" />
          <Paragraph>
            The paper also identifies the perceived prerequisites for a
            successful digital revolution of the system.{" "}
          </Paragraph>
          <Container display="grid-3col" width="full-width">
            <GridItem margin="marginNone">
              <ImageComponent src={security}></ImageComponent>
              <Heading>Security</Heading>
              <Paragraph>
                When it comes to bonds and guarantees, the stakes are high –
                there can be{" "}
                <b>no compromise on data security and integrity.</b> This has
                been a key focus in the development of our digital guarantee
                platform.
              </Paragraph>
            </GridItem>

            <GridItem margin="marginNone">
              <ImageComponent src={validity}></ImageComponent>
              <Heading>Validity</Heading>
              <Paragraph>
                The <b>legal framework</b> must enable confidence in the
                digitised system: the validity and enforceability of the
                guarantee is key.
              </Paragraph>
            </GridItem>

            <GridItem margin="marginNone">
              <ImageComponent src={acceptance}></ImageComponent>
              <Heading>Acceptance</Heading>
              <Paragraph>
                The solution must be something that
                <b> works for all parties.</b> Banks, credit insurers and the
                corporates – both the issuers and beneficiaries – must all be on
                board.
              </Paragraph>
            </GridItem>
          </Container>
          <Spacer size="s" />

          <Heading>The road ahead</Heading>
          <Paragraph>
            PwC’s whitepaper serves not only to validate our solution, but also
            to forecast the road ahead. The paper indicates that with the above
            factors in place, uptake could follow at great speed.
          </Paragraph>
          <Paragraph>
            <LinkComponent href="/whitepaper-form" color="blue">
              Download the whitepaper “Upping the game: Revolutionising
              Guarantees”
            </LinkComponent>{" "}
            to find out more about how and why digitisation is on the horizon
            for guarantees, bonds and sureties.
          </Paragraph>
          <Spacer size="s" />
          <Button
            href="/"
            title="Back to home page"
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
export default Whitepaper;
