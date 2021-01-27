import {
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
  Testimonial
} from 'components';
import Link from "next/link"
import abstractWaves from 'images/abstract-waves.png';
import servicesImg from 'images/services-life-cycle.svg';
import restApiImg from 'images/solution-rest-api.svg';
import legalImg from 'images/legal-feather.jpg';
import lindnerLogo from 'images/partners/partner-lindner.svg'
import eurlerHermesLogo from 'images/partners/partner-eulerhermes.svg'
import bayernLbLogo from 'images/partners/partner-bayernlb.svg'
import porrLogo from 'images/partners/partner-porr.jpg'
import atradiusLogo from 'images/partners/partner-atradius.svg'
import globalTradeLogo from 'images/partners/partner-gtc.png'

import solution from 'configs/solution';


function HomePage() {
  return (
    <div>
      <Lead
        title="Guarantee Vault"
        subtitle="For the Issuance & Safekeeping of Digital Guarantees"
        statement="All parties, at source and in real-time."
      />
      <Partners />
      <Section id="solution" style="gradient">
        <Container display="grid" width="full-width" height="minHeight">
          <GridItem>
            <ImageComponent src={abstractWaves} alt="Asbtract waves" width="921" height="647" />
          </GridItem>
          <GridItem>
            <Title>What we do</Title>
            <Paragraph>
              Guarantee Vault is a place for the issuance and safekeeping of digital guarantees. It gives
              banks &amp; sureties the possibility to centrally issue and store instruments such as Bank
              Guarantees, Surety Bonds and Standby Letters of Credit in an electronic (paperless) form.
						</Paragraph>
            <Paragraph>
              This combination of central issuance with digital guarantees is an innovation that delivers
              significant value to all market participants including applicants, guarantors and
              beneficiaries.
						</Paragraph>
            <Paragraph>
              Through the transparency it brings, Guarantee Vault adds an additional layer of efficiency
              right throughout the guarantee life-cycle.
						</Paragraph>
            <ButtonWrapper>
              <Button
                href="./solution"
                title="More"
                size="size-l"
                textColor="text-blue"
                border="border-blue"
              />
            </ButtonWrapper>
          </GridItem>
        </Container>
      </Section>
      <Section id="testimonials">
        <Container display="grid" width="full-width" >
          <Testimonial logoSrc={lindnerLogo} logoAlt="Lindner logo" logoWidth="200" author="Sven Matzelsberger" authorTitle="Head of Treasury">
            <Paragraph isTestimonial="true">
              “Over the last 2 years we have worked closely with 15 corporates, sureties and banks to help make Guarantee Vault a reality. Our shared experiences, collaborative spirit and common vision are at the heart and soul of what Guarantee Vault is.
						</Paragraph>
            <Paragraph isTestimonial="true">
              We proudly see this as a true market initiative, one that solves a wide spread common problem and brings efficiencies to all involved.”
              </Paragraph>
          </Testimonial>

          <Testimonial logoSrc={eurlerHermesLogo} logoAlt="Euler Hermes logo" logoWidth="200" author="Oliver Jacobs" authorTitle="Head of Bond Production">
            <Paragraph isTestimonial="true">
              “Running a paper based manual guarantee process has always been a challenge, even more so in this Covid-19 environment. We believe that digital guarantees are the solution, they increase transparency, create efficiencies and minimize risk.						</Paragraph>
            <Paragraph isTestimonial="true">
              The innovation that Guarantee Vault brings will benefit all parties including applicants, guarantors and beneficiaries”              </Paragraph>
          </Testimonial>

          <Testimonial logoSrc={bayernLbLogo} logoAlt="BayernLB logo" logoWidth="184" author="Brigitte Schmidt" authorTitle="Head of Guarantees">
            <Paragraph isTestimonial="true">
              “It has been a great experience working with both corporate and financial stakeholders on the digitization of guarantees.						</Paragraph>
            <Paragraph isTestimonial="true">
              Through Guarantee Vault we now have the possibility to offer all our customers the issuance, safe keeping and administration of digital guarantees in a secure and central place.
            </Paragraph>
            <Paragraph isTestimonial="true">
              For the first time, the complete end-to-end digitization of the entire guarantee transaction is possible, from applicant and issuer right through to beneficiary.            </Paragraph>
            <Paragraph isTestimonial="true">
              We look forward to go-live and future developments.”            </Paragraph>
          </Testimonial>

          <Testimonial logoSrc={porrLogo} logoAlt="Porr logo" logoWidth="100" author="Nicole Kerndler" authorTitle="Deputy Head of Bank Guarantee Management">
            <Paragraph isTestimonial="true">
              “Working closely on the Guarantee Vault project with other market participants has been a great experience. For many years the lack of transparency in the Guarantee process today has been an on-going problem for us.						</Paragraph>
            <Paragraph isTestimonial="true">
              Because of this, managing our portfolio of outstanding guarantees across all our banking and surety partners has been a significant challenge.              </Paragraph>
            <Paragraph isTestimonial="true">
              Through the added transparency it brings, Guarantee Vault gives us oversight at source which solves the problem.”              </Paragraph>
          </Testimonial>

          <Testimonial logoSrc={atradiusLogo} logoAlt="Atradius logo" logoWidth="184" author="Susanne Offermann-Tesch" authorTitle="Country Manager Bonding Germany">
            <Paragraph isTestimonial="true">
              “Guarantee Vault’s digital guarantee solution enables a true end-to-end digitization of the guarantee life-cycle.						</Paragraph>
            <Paragraph isTestimonial="true">
              The solution allows us to expand our service offering to clients, helping them better manage their business, reduce costs, improve efficiency and reduce risk.              </Paragraph>
            <Paragraph isTestimonial="true">
              We are proud to be part of this true market initiative and look forward to the exciting journey ahead.”              </Paragraph>
          </Testimonial>

          <Testimonial logoSrc={globalTradeLogo} logoAlt="Global Trade Corporation logo" logoWidth="200" author="Nick Pachnev" authorTitle="Chief Executive Officer">
            <Paragraph isTestimonial="true">
              "This is a first universal digital network that connects corporates with all types of guarantee issuers: banks, insurance companies and agents as well as export development and other government agencies. It also directly links corporates with each other, as applicants and beneficiaries.						</Paragraph>
            <Paragraph isTestimonial="true">
              The Guarantee Vault offering is based on open collaboration and transparent pricing. This approach facilitates acceptance by providers of trade finance IT solutions – one of the key elements for the wider market adoption.              </Paragraph>
            <Paragraph isTestimonial="true">
              We are pleased to offer seamless connectivity to the Guarantee Vault for all clients of the @GlobalTrade platform."              </Paragraph>
          </Testimonial>

        </Container>

      </Section>
      <Section id="services" style="gradient">
        <Container display="grid" width="full-width" height="minHeight">
          <GridItem>
            <Title>Services throughout the guarantee life-cycle</Title>
            <ImageComponent
              src={servicesImg}
              alt="Asbtract waves"
              imgType="mobile"
            />
            <Paragraph>
              Guarantee Vault offers long-term, secure and cost-effective services to applicants,
              guarantors, beneficiaries and intermediaries right across the life of a guarantee including
              application, issuance and post-issuance.
						</Paragraph>
            <ButtonWrapper>
              <Button
                href="./services"
                title="More"
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
            <Title>REST API Solution</Title>
            <ImageComponent
              src={restApiImg}
              alt="Guarantee life-cycles diagram"
              imgType="mobile"
            />
            <Paragraph>
              Guarantee Vault delivers its services using a suite of REST APIs allowing all market participants to seamlessly connect and interact.
						</Paragraph>
            <Paragraph>
              Corporates, sureties, banks and other intermediaries can interface with Guarantee Vault via their existing platform, portal or other in-house systems.
						</Paragraph>
            <Paragraph>
              In this way all participants can connect to access and consume data, at source and in real-time.
						</Paragraph>
            <Paragraph>
              Data is exchanged using JSON format whilst Guarantee Vault APIs are secured using market standard authentication protocol OpenId Connect.
						</Paragraph>
            <ButtonWrapper>
              <Button
                href="/rest-api"
                title="More"
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
            <Title>Legal</Title>
            <ImageComponent
              src={legalImg}
              alt="feather illustration"
              imgType="mobile"
            />
            <Paragraph>
              Electronic guarantees issued via Guarantee Vault are as legal, valid and binding as traditional (paper) guarantees.
						</Paragraph>
            <Paragraph>
              When issuing guarantees on Guarantee Vault only the form of the guarantee is changed (i.e. paper to electronic) not their content.
						</Paragraph>
            <Paragraph>
              Before offering its services in any country, Digital Vault Services GmbH conducts a thorough analysis and validates that the national law governing guarantees in that market allows for electronic form.
						</Paragraph>
            <Paragraph>
              Digital Vault Services GmbH works with the following legal partners in this regard:
						</Paragraph>
            <Paragraph>
              <LinkComponent href="https://www.cliffordchance.com/people_and_places/places/europe/germany.html" type="paragraph">CLIFFORD CHANCE</LinkComponent>
              <Paragraph>
                Partnerschaft mit beschränkter Berufshaftung von Rechtsanwälten, Steuerberatern und Solicitors
              </Paragraph>
            </Paragraph>
            <Paragraph>
              <LinkComponent href="https://www.wolftheiss.com/countries/offices/austria/" type="paragraph">WOLF THEISS</LinkComponent>
              <Paragraph>Rechtsanwälte GmbH & Co KG</Paragraph>
            </Paragraph>
            <Paragraph>
              <LinkComponent href="https://www.clydeco.com/en" type="paragraph">CLYDE & CO LLP</LinkComponent>
            </Paragraph>
            <ButtonWrapper>
              <Button
                href="./legal"
                title="More"
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
    </div>
  );
}

export default HomePage;
