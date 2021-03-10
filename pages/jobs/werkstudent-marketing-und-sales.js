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
  ImageComponent,
} from "components";
import collegues from "images/colleagues-giving-fist-bump.png";

const StudentJob = () => {
  return (
    <>
      <Meta
        title={"Werkstudent Marketing und Sales (m/w/d)" + " | Digital Vault Services"}
        desc="Wir sind ein junges, innovatives und schnell wachsendes SaaS-Unternehmen mit solidem, teilweise internationalem Gesellschafterhintergrund. Als IT-Dienstleister haben wir gemeinsam mit 16 führenden nationalen und internationalen Partnern aus Wirtschaft und Finanzindustrie unsere Plattform Guarantee Vault als B2B-Lösung zur Erstellung, Abwicklung und sicheren Aufbewahrung digitaler Garantien und Bürgschaften zur Marktreife entwickelt und in Deutschland und Österreich gelauncht."
        image="https://digitalvaultservices.com/_next/static/images/colleagues-giving-fist-bump-fce3aa52e8f30c9d822e48d6194f5801.png"
      />
      <Header />
      <Section>
        <Container width="normal-width" margin="marginTop96">
          <ImageComponent margin="marginNone" src={collegues}></ImageComponent>
        </Container>
        <Container width="normal-width" margin="marginTop96">
          <Title>Werkstudent Marketing und Sales (m/w/d)</Title>
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
            Du bist aktuell Vollzeitstudent (m/w/d) und hältst Ausschau nach
            einer anspruchsvollen Tätigkeit? Du möchtest Dein erlerntes Wissen
            auch in der Praxis anwenden?
            </Paragraph>
          <Paragraph>
            Dann bist Du bei uns genau richtig! Wir sind auf der Suche nach
            ambitionierten Werkstudenten (m/w/d) für den Bereich Marketing,
            Vertrieb und Strategie.
            </Paragraph>
          <Spacer size="s" />
          <Heading>Deine Aufgaben</Heading>
          <UlList>
            <ListItem>
              Aktive Rolle bei der Entwicklung und Umsetzung von Marketing- und
              Vertriebsaktivitäten, z.B. Präsentationen, redaktionelle Inhalte,
              Pressemitteilungen oder Mailings
              </ListItem>
            <ListItem>
              Kreative Mitgestaltung der Online-Präsenz sowie Betreuung von
              Social-Media-Kanälen
              </ListItem>
            <ListItem>
              Unterstützung bei der Wettbewerber- und Marktanalyse (in Bezug auf
              ökonomische Parameter und juristische Rahmenbedingungen)
              </ListItem>
            <ListItem>
              Erstellung von Reportings und Pflege von CRM-Daten
              </ListItem>
          </UlList>
          <Spacer size="s" />
          <Heading>Dein Profil</Heading>
          <UlList>
            <ListItem>
              Du studierst aktuell erfolgreich Wirtschaftswissenschaften
              (vorzugsweise BWL, VWL oder Wirtschaftsmathematik),
              Medienwissenschaften, Marketing oder etwas Vergleichbares
              </ListItem>
            <ListItem>
              Du hast mindestens 16h / Woche Zeit und bist noch mindestens 1
              Jahr immatrikuliert
              </ListItem>
            <ListItem>
              Du hast Lust auf spannende Aufgaben und Interesse am Vertrieb
              </ListItem>
            <ListItem>
              Du verfügst über gute Kenntnisse in Office, insbesondere
              Powerpoint und Excel
              </ListItem>
            <ListItem>
              Du kommunizierst selbstbewusst und klar in fließendem Deutsch und
              Englisch, weitere Fremdsprachen (insbesondere Französisch) sind
              von Vorteil
              </ListItem>
            <ListItem>
              Dich zeichnet eine selbstständige Arbeitsweise mit guter
              analytischer Auffassungsgabe aus
              </ListItem>
          </UlList>
          <Spacer size="s" />
          <Heading>Unser Angebot</Heading>
          <Paragraph>Darum lohnt es sich an Board zu kommen:</Paragraph>
          <UlList>
            <ListItem>Flache Hierarchien und kurze Entscheidungswege</ListItem>
            <ListItem>Leistungsgerechte Vergütung</ListItem>
            <ListItem>
              Flexible Arbeitszeiten, angepasst an Dein Studium, Home-Office
              Anteile nach Absprache möglich
              </ListItem>
            <ListItem>
              Spannende, innovative und sehr internationale Arbeitsumgebung
              </ListItem>
            <ListItem>
              Enge Zusammenarbeit mit einem sympathischen, professionellen und
              leidenschaftlichen Team
              </ListItem>
            <ListItem>
              Wir leben eine offene Feedbackkultur, um uns stets
              weiterzuentwickeln
              </ListItem>
            <ListItem>
              Die Chance in einem schnell wachsenden Unternehmen an den eigenen
              Aufgaben zu wachsen und den Erfolg aktiv mitzugestalten
              </ListItem>
          </UlList>
          <Paragraph>Werden Sie Teil unserer Erfolgsgeschichte!</Paragraph>
          <Spacer size="s" />
          <Heading>Kontakt</Heading>
          <Paragraph>
            Bitte sende Deine vollständigen Bewerbungsunterlagen an:
            </Paragraph>
          <Paragraph>
            <LinkComponent
              color="blue"
              href="mailto:careers@digitalvaultservices.com"
            >
              careers@digitalvaultservices.com
              </LinkComponent>
          </Paragraph>
          <Paragraph>
            Für Rückfragen steht Dir Isabella Wagner gern unter +49 151 46156294
            zur Verfügung.
            </Paragraph>
          <Paragraph>Wir freuen uns auf Deine Bewerbung!</Paragraph>
          <Spacer size="s" />
          {/* <Button
            href="/"
            title="Zurück zur Startseite"
            size="size-l"
            textColor="text-white"
            background="blue"
            border="border-white"
          /> */}
        </Container>
      </Section>
    </>
  );
};

export default StudentJob;
