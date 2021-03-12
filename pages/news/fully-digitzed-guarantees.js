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
  ButtonLink,
  Figure,
} from "components";
import PropTypes from "prop-types";
import { i18n, withTranslation } from "i18n";
import ludgarJanssen from "images/ludgar-janssen.png";
const Article = ({ t }) => {
  return (
    <>
      <Meta title={"Voll digitalisiertes Garantiegeschäft" + " | Digital Vault Services"} />
      <Header />
      <Section>
        <Container width="normal-width" margin="marginTop96">
          <Title>Voll digitalisiertes Garantiegeschäft</Title>
          <Container display="grid" width="fullWidth">
            <Container width="fullWidth">
              <Paragraph>
                Wenn man in späterer Zeit an das Jahr 2020 zurückdenkt, werden
                zumindest zwei Dinge im Gedächtnis bleiben: zum einen natürlich
                ein Virus, das uns gezwungen hat, unser sozia les Leben auf ein
                Minimum zu reduzieren und zum anderen der durch Social
                Distancing be-schleunigte Trend zur Digitalisierung. Vieles, was
                zuvor papierhaft abgewickelt wurde, wan-derte in die virtuelle
                Sphäre und ermöglichte dadurch entsprechende Effizienzgewinne.
              </Paragraph>
              <Paragraph>
                Ein Beispiel dafür ist das Ge-schäft mit Garantien. Nach wie vor
                ist die Fehleinschät-zung weit verbreitet, dass Bürg-schaften
                immer papierhaft ausge-stellt und mit einer Unterschrift
                versehen sein müssen. Tatsächlich können solche in Deutschland
                und Österreich immer auch digital aus-gestellt und abgewickelt
                werden, es wurde halt kaum praktiziert.
              </Paragraph>
            </Container>
            <Figure caption="Ludgar Janßenist Geschäftsführer bei Digital Vault Services">
              <ImageComponent
                src={ludgarJanssen}
                margin="marginNone"
              ></ImageComponent>
            </Figure>
          </Container>
          <Spacer size="s" />
          <Paragraph>
            In dieses Vakuum ist die Digital Vault Services GmbH (DVS) ge-stoßen
            und hat ein Geschäftsmo-dell zur vollständigen Digitalisierung des
            gesamten Aval-Managements etabliert. Das Trade-Finance-Fin-Tech hat
            in Zusammenarbeit mit dem bayerischen Bauunternehmen Lindner Group
            KG, dem kanadi-sche IT-Provider GlobalTrade Corporation, 16
            Un-ternehmen verschiedener Branchen mit intensivem Avalgeschäft,
            sowie Kreditversicherern und Banken das SaaS-Produkt „Guarantee
            Vault“ entwickelt.
          </Paragraph>
          <Paragraph>
            Der Guarantee Vault ist das zentrale Register für die Erstellung und
            sichere Aufbewahrung digitaler Avale. Zudem ermöglicht es den
            jeweiligen Beteiligten Avisie-rung, Freigabe, Änderung und Rückgabe
            ihrer Garan-tien. Eine nahtlose, digitale Anbindung bestehender
            Bank- oder Versicherungsportale sowie von Multi-bank-Plattformen
            oder ERP-Systemen ist über APIs möglich. Über API oder Webbrowser
            kann auch der Begünstigte Zugriff auf das Zentralregister erhalten.
          </Paragraph>
          <Spacer size="s" />
          <Heading>
            TreasuryLog sprach mit Ludger Janßen, dem Ge-schäftsführer der DVS
          </Heading>
          <Paragraph fontStyle="italic" fontWeight="bold">
            TreasuryLog:
          </Paragraph>
          <Paragraph fontStyle="italic">
            FinTechs sind ja in aller Munde. Mit Ih-rem haben Sie jetzt das
            Aval-Geschäft im Visier.
          </Paragraph>
          <Paragraph fontWeight="bold">Jansen:</Paragraph>
          <Paragraph>
            Der Fokus unserer Aktivitäten liegt nicht auf „Tech“. Es geht nicht
            um die Umsetzung einer tech-nischen Idee, sondern um die Lösung
            eines konkre-ten Problems des täglichen Geschäftslebens: Wie wickle
            ich Garantien so effizient und transparent wie möglich ab, während
            alle Transaktionsbeteiligten gleichzeitig eingebunden sind?
          </Paragraph>
          <Paragraph fontStyle="italic" fontWeight="bold">
            TreasuryLog:
          </Paragraph>
          <Paragraph fontStyle="italic">
            Stoßen Sie dabei nicht auf Vorbehalte? Sind Unternehmen wirklich
            bereit, die papierhafte Ab-wicklung aufzugeben?
          </Paragraph>
          <Paragraph fontWeight="bold">Janßen:</Paragraph>
          <Paragraph>
            Wichtig war die juristisch eindeutige Aufar-beitung. Der Zwang zum
            papierhaften Ausstellen und Unterschreiben ist in vielen Ländern
            bereits vor Jahren für den Wirtschaftsverkehr zwischen Unter-nehmen
            eingeschränkt oder abgeschafft worden. So können in Deutschland und
            Österreich Bürgschaften und Garantien für Unternehmen immer auch
            digital ausgestellt und abgewickelt werden. Bevor wir unse-re
            Dienstleistungen in einem Land anbieten, führen wir immer eine
            gründliche juristische Analyse durch, wobei wir durch internationale
            Großkanzlei-en unterstützt werden.
          </Paragraph>
          <Paragraph fontStyle="italic" fontWeight="bold">
            TreasuryLog:
          </Paragraph>
          <Paragraph fontStyle="italic">
            Wie sieht der typische Kunde von Digi-tal Vault Services aus?
          </Paragraph>
          <Paragraph fontWeight="bold">Janßen:</Paragraph>
          <Paragraph>
            Ganz grundsätzlich steht der Guarantee Vault allen interessierten
            Unternehmen jeglicher Größe und Branchen offen, richtet sich aber
            natur-gemäß an Firmen mit nennenswertem Avalgeschäft. Als
            Avalbegünstigter bietet die Nutzung des Vaults schon ab einigen
            wenigen Avalen im Jahr erhebliche Vorteile. Wichtig ist mir auch zu
            betonen, dass es sich dabei neben Bankavalen und
            Kautionsversiche-rungen der Kreditversicherer insbesondere auch um
            Konzernavale handeln kann.
          </Paragraph>
          <Paragraph fontStyle="italic" fontWeight="bold">
            TreasuryLog:
          </Paragraph>
          <Paragraph fontStyle="italic">
            Sie sprachen von Vorteilen. Welche sind das im Wesentlichen?
          </Paragraph>
          <Paragraph fontWeight="bold">Janßen:</Paragraph>
          <Paragraph>
            Zunächst sind ganz erhebliche Effizienzge-winne und
            Kosteneinspareffekte zu nennen. Nie-mand beschäftigt sich gerne mit
            Papierkrieg. Wir ge-hen gegenüber dem Papierprozess von einem
            Ge-samteffekt von durchschnittlich 35 Prozent für jeden der
            Beteiligten aus. Zusätzlich werden durch die nahtlose
            Datenübermittlung Fehlerquellen mini-miert, die Prozesstransparenz
            erhöht und die Ab-wicklung insgesamt signifikant beschleunigt.
          </Paragraph>
          <Paragraph fontStyle="italic" fontWeight="bold">
            TreasuryLog:
          </Paragraph>
          <Paragraph fontStyle="italic">
            Welche Voraussetzungen muss ein Unternehmen erfüllen, um bei DVS
            anzudocken?
          </Paragraph>
          <Paragraph fontWeight="bold">Janßen:</Paragraph>
          <Paragraph>
            Es gibt grundsätzlich für keinen der Avalbe-teiligten technische
            Mindeststandards. Zugang zum Guarantee Vault und die Nutzung
            verschiedener digi-taler Vorteile sind für jeden bereits mittels der
            gängi-gen Webbrowser möglich. Zur Nutzung aller Vorteile des Vaults
            sollte sich ein Avalauftraggeber jedoch di-gital an den Vault
            anbinden. Dazu kann er sich direkt an uns wenden oder an seine
            Kreditversicherer oder Banken – hier sind wir mit vielen
            hinsichtlich Anbindung an den Guarantee Vault im Gespräch bzw.
            be-reits in Umsetzung und live. Ein Avalbegünstigter braucht
            zunächst grundsätzlich nichts unternehmen. Er erhält vom Guarantee
            Vault aufgrund der vom Auftraggeber bereitgestellten Informationen
            automa-tisch den digitalen Zugang zu seinem Aval.
          </Paragraph>
          <Figure caption="DVS bietet verschiedene Ein- und Ausgangs-kanäle auf und von  ihrer  Aval-Plattform.">
            <ImageComponent src="#" />
          </Figure>
          <Spacer size="s" />
          <Paragraph fontStyle="italic" fontWeight="bold">
            TreasuryLog:
          </Paragraph>
          <Paragraph fontStyle="italic">
            Können Sie bereits Angaben zu den Kosten machen, die durch die
            Auslagerung auf DVS entstehen?
          </Paragraph>
          <Paragraph fontWeight="bold">Janßen:</Paragraph>
          <Paragraph>
            Die Zusammenarbeit ist für die bei kleinen und mittelgroßen
            Begünstigten zu erwartenden Avalmengen grundsätzlich kostenlos.
            Ehrlicherweise profitiert er von der digitalen Umstellung sofort und
            ganz erheblich. Avalauftraggeber haben die Möglich-keit, zwischen
            einem Starterpaket und drei unter-schiedlichen, mengenabhängig
            gestaffelten, soge-nannten Bundles, zu wählen. Beim Starterpaket
            er-folgt der Zugang zunächst per Webbrowser, eine API kann
            problemlos über ein Bundle zugebucht werden. Beim Starterpaket fällt
            je Aval eine einmalige Trans-aktionsgebühr von 14 Euro an, die
            sämtliche Servi-ces beinhaltet, inklusive künftiger Änderungen,
            Ver-längerungen oder Rückgabe des Avals. Alle Bundles beinhalten in
            ihrem Paketpreis neben einem profes-sionellen Onboarding auch die
            kostenlose API-An-bindung an den Vault, inklusive kostenloser
            Abwick-lung einer fest vereinbarten Avalmenge. Lediglich die Kosten
            der internen API-Erstellung auf Seiten des Auftraggebers kommen noch
            hinzu.
          </Paragraph>
          <Paragraph fontStyle="italic" fontWeight="bold">
            TreasuryLog:
          </Paragraph>
          <Paragraph fontStyle="italic">
            Welche Garantieinstrumente und wel-che Märkte bedienen Sie –
            weltweit oder im deutsch-sprachigen Raum?
          </Paragraph>
          <Paragraph fontWeight="bold">Janßen:</Paragraph>
          <Paragraph>
            Wir decken alle direkten Bürgschaften und Garantien ab, das heißt
            Bankavale, Kautionsversi-cherungen und Konzernbürgschaften. Die
            deutlich komplexeren und juristisch anspruchsvolleren indi-rekten
            Avale sowie Standby Letters of Credit werden zu einem späteren
            Zeitpunkt folgen. Nach erfolgrei-cher Einführung im
            deutschsprachigen Raum wird die Plattform weltweit auf andere dafür
            geeignete Regionen ausgeweitet werden. Die erste Expansion nach
            Frankreich und in die Schweiz ist bereits be-schlossen und für das
            vierte Quartal 2021 in Vorbe-reitung.
          </Paragraph>
          <Paragraph fontStyle="italic" fontWeight="bold">
            TreasuryLog:
          </Paragraph>
          <Paragraph fontStyle="italic">
            Welche Sicherheits- und Verfügbarkeits-standards darf man von Ihrer
            Plattform erwarten?
          </Paragraph>
          <Paragraph fontWeight="bold">Janßen:</Paragraph>
          <Paragraph>
            Der Guarantee Vault entspricht höchsten technischen
            Sicherheitsstandards. Dabei garantieren wir die auch von Banken und
            Kreditversicherungen bekannte permanente Verfügbarkeit von
            mindes-tens 99,5 Prozent. Ohne Gewährleistung dieses Le-vels würden
            wir von den mit uns zusammenarbei-tenden nationalen und
            internationalen Banken und Kreditversicherungen auch gar nicht als
            Partner ak-zeptiert. Darüber hinaus läuft zurzeit auch unsere
            Zertifizierung nach ISO 27001, was wiederum die Einhaltung diverser
            Qualitäts- und Prozessstan-dards sicherstellt.
          </Paragraph>

          <Figure caption="Durch die Digitalisierung von Avalen sollen Effizienz-gewinne von rund 40 Pro-zent realisierbar sein.">
            <ImageComponent src="#" />
          </Figure>
          <Spacer size="m" />

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

Article.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

Article.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(Article);
