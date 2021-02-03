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
  Meta,
  UlList,
  ListItem,
  ImageComponent
} from "components";
import collegues from "images/colleagues-giving-fist-bump.png";

const Careers = () => {
  return (
    <>
      <Header />
      <Section>
          <Container width="normal-width" margin="marginTop96">
      <ImageComponent margin="marginNone" src={collegues}></ImageComponent>
      </Container>
        <Container width="normal-width" margin="marginTop96">
          <Title>Justitiar / Syndikus IT-Recht (m/w/d)</Title>
        </Container>
        <Container width="normal-width">
          <Paragraph>
            Wir sind ein junges, innovatives und schnell wachsendes
            SaaS-Unternehmen mit solidem, teilweise internationalem
            Gesellschafterhintergrund. Als IT-Dienstleister haben wir gemeinsam
            mit 16 führenden nationalen und internationalen Partnern aus
            Wirtschaft und Finanzindustrie unsere Plattform Guarantee Vault als
            B2B-Lösung zur Erstellung, Abwicklung und sicheren Aufbewahrung
            digitaler Garantien und Bürgschaften zur Marktreife entwickelt und
            in Deutschland und Österreich gelauncht.
          </Paragraph>
          <Paragraph>
            Für unser weiteres Wachstum und die beschlossene Expansion nach
            Europa suchen wir ab sofort für unseren Standort Passau oder aus dem
            Homeoffice einen weiteren ambitionierten Justitiar oder
            Syndikusanwalt (m/w/d) mit fundierten juristischen Kenntnissen im
            Bereich Digitalisierung und der Besonderheiten des Trade
            Finance-Geschäftes.
          </Paragraph>
          <Spacer size="s" />
          <Heading>Ihre Aufgaben</Heading>
          <UlList>
            <ListItem>
              Erstellung eigener softwarespezifischer Verträge und Regularien
              sowie Verhandlung dieser mit potentiellen Kunden und Gremien,
              beides im In- und Ausland
            </ListItem>
            <ListItem>
              Bearbeitung datenschutzrechtlicher Themen und angrenzender
              juristischer Fachgebiete
            </ListItem>
            <ListItem>
              Juristische Begleitung aller Vertriebs- und Marketingaktivitäten
              des Unternehmens
            </ListItem>
            <ListItem>
              Beratung von Geschäftsführung und Aufsichtsrat sowie aller
              Fachabteilungen zu allen sonstigen rechtlichen Belangen, ggf.
              Koordination externer juristischer Unterstützung
            </ListItem>
          </UlList>
          <Spacer size="s" />
          <Heading>Ihr Profil</Heading>
          <UlList>
            <ListItem>
              Sie haben Ihr Studium der Rechtswissenschaften oder als
              Wirtschaftsjurist mit überdurchschnittlichem Ergebnis
              abgeschlossen
            </ListItem>
            <ListItem>
              Idealerweise verfügen Sie über Praxiserfahrung im IT- und
              Datenschutzrecht, vorzugs-weise belegt durch Promotion, LLM oder
              eine andere vergleichbare Zusatzqualifikation, sowie juristische
              Erfahrung im Bereich des Trade Finance und Compliance-Umfeld
            </ListItem>
            <ListItem>
              Verhandlungssicheres Englisch in Wort und Schrift
            </ListItem>
            <ListItem>
              Die Ausschreibung richtet sich insbesondere an Senior Associates
              oder Manager von Kanzleien sowie Syndikusanwälte der
              Finanzindustrie mit entsprechendem Tätigkeitsschwerpunkt
            </ListItem>
            <ListItem>
              Sie zeichnet Pragmatismus gepaart mit guter Kooperations- und
              Kommunikationsfähigkeit aus
            </ListItem>
            <ListItem>
              Sie wollen sich schnell und flexibel in neue und anspruchsvolle
              Sachverhalte einarbeiten und als Teil eines jungen, innovativen
              und internationalen Teams an unserem funktionierenden
              Geschäftsmodell teilhaben
            </ListItem>
          </UlList>
          <Spacer size="s" />
          <Heading>Unser Angebot</Heading>
          <Paragraph>
            Wir bieten eine unbefristete Vollzeitstelle in einem modernen Umfeld
            mit flachen Hierarchien, spannende Aufgaben an einem visionären
            Geschäftsmodell und ein tolles Team.
          </Paragraph>
          <Paragraph>
            Warum es sich für Sie lohnt, uns eine Bewerbung zu schicken:
          </Paragraph>
          <Spacer size="s" />
          <Heading>Wir bieten</Heading>
          <UlList>
            <ListItem>
              Hohe Eigenverantwortung, Gestaltungsspielraum und direktes
              Reporting an die Geschäftsführung
            </ListItem>
            <ListItem>Attraktive Dotierung plus Erfolgsbeteiligung</ListItem>
            <ListItem>
              Flexible Arbeitszeit mit auf Ihre persönliche Situation
              zugeschnittener Homeoffice- bzw. Präsenzsituation, die
              selbstverständlich auch familiäre Konstellationen berücksichtigt
            </ListItem>
            <ListItem>
              Spannende, innovative und sehr internationale Arbeitsumgebung
            </ListItem>
            <ListItem>
              Enge Zusammenarbeit mit einem sympathischen, professionellen und
              leidenschaftlichen Team
            </ListItem>
            <ListItem>Kurze Entscheidungswege</ListItem>
            <ListItem>
              Wir leben eine offene Feedbackkultur, um uns stets
              weiterzuentwickeln
            </ListItem>
          </UlList>
          <Paragraph>Werden Sie Teil unserer Erfolgsgeschichte!</Paragraph>
          <Spacer size="s" />
          <Heading>Kontakt</Heading>
          <Paragraph>
            Bitte senden Sie ihre vollständigen Bewerbungsunterlagen mit Angabe
            des frühestmöglichen Eintrittstermins und Ihrer Gehaltsvorstellung
            direkt an unsere Geschäftsleitung:
          </Paragraph>
          <Paragraph>
          <LinkComponent color="blue" href="mailto:careers@digitalvaultservices.com">
            careers@digitalvaultservices.com
          </LinkComponent>
          </Paragraph>
          <Paragraph>
            die Ihnen auch für Rückfragen unter +49 175 8867 867 gern zur
            Verfügung steht.
          </Paragraph>
          <Paragraph>
            Sperrvermerke werden selbstverständlich beachtet.
          </Paragraph>
        </Container>
      </Section>
    </>
  );
};

export default Careers;
