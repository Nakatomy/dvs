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
import costSavings from "images/fully-digitized-guarantees/savings-digitization-of-the-guarantees.png"
import platformChannels from "images/fully-digitized-guarantees/platform-channels.png"
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
                ein Virus, das uns gezwungen hat, unser soziales Leben auf ein
                Minimum zu reduzieren und zum anderen der durch Social
                Distancing be-schleunigte Trend zur Digitalisierung. Vieles, was
                zuvor papierhaft abgewickelt wurde, wanderte in die virtuelle
                Sphäre und ermöglichte dadurch entsprechende Effizienzgewinne.
              </Paragraph>
              <Paragraph>
                Ein Beispiel dafür ist das Ge-schäft mit Garantien. Nach wie vor
                ist die Fehleinschät-zung weit verbreitet, dass Bürgschaften
                immer papierhaft ausgestellt und mit einer Unterschrift
                versehen sein müssen. Tatsächlich können solche in Deutschland
                und Österreich immer auch digital ausgestellt und abgewickelt
                werden, es wurde halt kaum praktiziert.
              </Paragraph>
            </Container>
            <Figure caption="Ludgar Janßen ist Geschäftsführer bei Digital Vault Services">
              <ImageComponent
                src={ludgarJanssen}
                margin="marginNone"
              ></ImageComponent>
            </Figure>
          </Container>
          <Spacer size="s" />
          <Paragraph>
            In dieses Vakuum ist die Digital Vault Services GmbH (DVS) gestoßen
            und hat ein Geschäftsmodell zur vollständigen Digitalisierung des
            gesamten Aval-Managements etabliert. Das Trade-Finance-Fin-Tech hat
            in Zusammenarbeit mit dem bayerischen Bauunternehmen Lindner Group
            KG, dem kanadische IT-Provider GlobalTrade Corporation, 16
            Unternehmen verschiedener Branchen mit intensivem Avalgeschäft,
            sowie Kreditversicherern und Banken das SaaS-Produkt „Guarantee
            Vault“ entwickelt.
          </Paragraph>
          <Paragraph>
            Der Guarantee Vault ist das zentrale Register für die Erstellung und
            sichere Aufbewahrung digitaler Avale. Zudem ermöglicht es den
            jeweiligen Beteiligten Avisierung, Freigabe, Änderung und Rückgabe
            ihrer Garan-tien. Eine nahtlose, digitale Anbindung bestehender
            Bank- oder Versicherungsportale sowie von Multibank-Plattformen
            oder ERP-Systemen ist über APIs möglich. Über API oder Webbrowser
            kann auch der Begünstigte Zugriff auf das Zentralregister erhalten.
          </Paragraph>
          <Spacer size="s" />
          <Heading>
            TreasuryLog sprach mit Ludger Janßen, dem Geschäftsführer der DVS
          </Heading>
          <Spacer size="s" />
          <Paragraph fontStyle="italic">
            <b>TreasuryLog: </b> FinTechs sind ja in aller Munde. Mit Ihrem haben Sie jetzt das
            Aval-Geschäft im Visier.
          </Paragraph>

          <Paragraph>
            <b>Janßen: </b> Der Fokus unserer Aktivitäten liegt nicht auf „Tech“. Es geht nicht
            um die Umsetzung einer tech-nischen Idee, sondern um die Lösung
            eines konkreten Problems des täglichen Geschäftslebens: Wie wickle
            ich Garantien so effizient und transparent wie möglich ab, während
            alle Transaktionsbeteiligten gleichzeitig eingebunden sind?
          </Paragraph>
          <Spacer size="s" />
          <Paragraph fontStyle="italic">
            <b>TreasuryLog: </b> Stoßen Sie dabei nicht auf Vorbehalte? Sind Unternehmen wirklich
            bereit, die papierhafte Ab-wicklung aufzugeben?
          </Paragraph>

          <Paragraph>
            <b>Janßen: </b> Wichtig war die juristisch eindeutige Aufarbeitung. Der Zwang zum
            papierhaften Ausstellen und Unterschreiben ist in vielen Ländern
            bereits vor Jahren für den Wirtschaftsverkehr zwischen Unternehmen
            eingeschränkt oder abgeschafft worden. So können in Deutschland und
            Österreich Bürgschaften und Garantien für Unternehmen immer auch
            digital ausgestellt und abgewickelt werden. Bevor wir unsere
            Dienstleistungen in einem Land anbieten, führen wir immer eine
            gründliche juristische Analyse durch, wobei wir durch internationale
            Großkanzleien unterstützt werden.
          </Paragraph>
          <Spacer size="s" />
          <Paragraph fontStyle="italic">
            <b>TreasuryLog: </b> Wie sieht der typische Kunde von Digital Vault Services aus?
          </Paragraph>

          <Paragraph>
            <b>Janßen: </b> Ganz grundsätzlich steht der Guarantee Vault allen interessierten
            Unternehmen jeglicher Größe und Branchen offen, richtet sich aber
            naturgemäß an Firmen mit nennenswertem Avalgeschäft. Als
            Avalbegünstigter bietet die Nutzung des Vaults schon ab einigen
            wenigen Avalen im Jahr erhebliche Vorteile. Wichtig ist mir auch zu
            betonen, dass es sich dabei neben Bankavalen und
            Kautionsversiche-rungen der Kreditversicherer insbesondere auch um
            Konzernavale handeln kann.
          </Paragraph>
          <Spacer size="s" />
          <Paragraph fontStyle="italic">
            <b>TreasuryLog: </b> Sie sprachen von Vorteilen. Welche sind das im Wesentlichen?
          </Paragraph>

          <Paragraph>
            <b>Janßen: </b> Zunächst sind ganz erhebliche Effizienzge-winne und
            Kosteneinspareffekte zu nennen. Nie-mand beschäftigt sich gerne mit
            Papierkrieg. Wir ge-hen gegenüber dem Papierprozess von einem
            Ge-samteffekt von durchschnittlich 35 Prozent für jeden der
            Beteiligten aus. Zusätzlich werden durch die nahtlose
            Datenübermittlung Fehlerquellen mini-miert, die Prozesstransparenz
            erhöht und die Ab-wicklung insgesamt signifikant beschleunigt.
          </Paragraph>
          <Spacer size="s" />
          <Paragraph fontStyle="italic">
            <b>TreasuryLog: </b>  Welche Voraussetzungen muss ein Unternehmen erfüllen, um bei DVS
            anzudocken?
          </Paragraph>

          <Paragraph>
            <b>Janßen: </b> Es gibt grundsätzlich für keinen der Avalbeteiligten technische
            Mindeststandards. Zugang zum Guarantee Vault und die Nutzung
            verschiedener digitaler Vorteile sind für jeden bereits mittels der
            gängi-gen Webbrowser möglich. Zur Nutzung aller Vorteile des Vaults
            sollte sich ein Avalauftraggeber jedoch di-gital an den Vault
            anbinden. Dazu kann er sich direkt an uns wenden oder an seine
            Kreditversicherer oder Banken – hier sind wir mit vielen
            hinsichtlich Anbindung an den Guarantee Vault im Gespräch bzw.
            bereits in Umsetzung und live. Ein Avalbegünstigter braucht
            zunächst grundsätzlich nichts unternehmen. Er erhält vom Guarantee
            Vault aufgrund der vom Auftraggeber bereitgestellten Informationen
            automatisch den digitalen Zugang zu seinem Aval.
          </Paragraph>

          <ImageComponent src={platformChannels} alt="DVS bietet verschiedene Ein- und Ausgangs-kanäle auf und von  ihrer  Aval-Plattform." />

          <Spacer size="s" />


          <Paragraph fontStyle="italic"><b>TreasuryLog: </b>
           Können Sie bereits Angaben zu den Kosten machen, die durch die
          Auslagerung auf DVS entstehen?
          </Paragraph>
          <Paragraph>   <b>Janßen: </b>
            Die Zusammenarbeit ist für die bei kleinen und mittelgroßen
            Begünstigten zu erwartenden Avalmengen grundsätzlich kostenlos.
            Ehrlicherweise profitiert er von der digitalen Umstellung sofort und
            ganz erheblich. Avalauftraggeber haben die Möglichkeit, zwischen
            einem Starterpaket und drei unter-schiedlichen, mengenabhängig
            gestaffelten, sogenannten Bundles, zu wählen. Beim Starterpaket
            erfolgt der Zugang zunächst per Webbrowser, eine API kann
            problemlos über ein Bundle zugebucht werden. Beim Starterpaket fällt
            je Aval eine einmalige Transaktionsgebühr von 14 Euro an, die
            sämtliche Services beinhaltet, inklusive künftiger Änderungen,
            Verlängerungen oder Rückgabe des Avals. Alle Bundles beinhalten in
            ihrem Paketpreis neben einem professionellen Onboarding auch die
            kostenlose API-An-bindung an den Vault, inklusive kostenloser
            Abwicklung einer fest vereinbarten Avalmenge. Lediglich die Kosten
            der internen API-Erstellung auf Seiten des Auftraggebers kommen noch
            hinzu.
          </Paragraph>
          <Spacer size="s" />

          <Paragraph fontStyle="italic">
            <b>TreasuryLog: </b> Welche Garantieinstrumente und welche Märkte bedienen Sie –
            weltweit oder im deutsch-sprachigen Raum?
          </Paragraph>

          <Paragraph>
            <b>Janßen: </b> Wir decken alle direkten Bürgschaften und Garantien ab, das heißt
            Bankavale, Kautionsversi-cherungen und Konzernbürgschaften. Die
            deutlich komplexeren und juristisch anspruchsvolleren indirekten
            Avale sowie Standby Letters of Credit werden zu einem späteren
            Zeitpunkt folgen. Nach erfolgreicher Einführung im
            deutschsprachigen Raum wird die Plattform weltweit auf andere dafür
            geeignete Regionen ausgeweitet werden. Die erste Expansion nach
            Frankreich und in die Schweiz ist bereits beschlossen und für das
            vierte Quartal 2021 in Vorbereitung.
          </Paragraph>
          <Spacer size="s" />
          <Paragraph fontStyle="italic">
            <b>TreasuryLog: </b> Welche Sicherheits- und Verfügbarkeitsstandards darf man von Ihrer
            Plattform erwarten?
          </Paragraph>

          <Paragraph>
            <b>Janßen: </b> Der Guarantee Vault entspricht höchsten technischen
            Sicherheitsstandards. Dabei garantieren wir die auch von Banken und
            Kreditversicherungen bekannte permanente Verfügbarkeit von
            mindestens 99,5 Prozent. Ohne Gewährleistung dieses Levels würden
            wir von den mit uns zusammenarbei-tenden nationalen und
            internationalen Banken und Kreditversicherungen auch gar nicht als
            Partner akzeptiert. Darüber hinaus läuft zurzeit auch unsere
            Zertifizierung nach ISO 27001, was wiederum die Einhaltung diverser
            Qualitäts- und Prozessstandards sicherstellt.
          </Paragraph>


          <ImageComponent src={costSavings} alt="Durch die Digitalisierung von Avalen sollen Effizienz-gewinne von rund 40 Pro-zent realisierbar sein." />



          <Paragraph>
            {t("sourceArticleText")}
            <LinkComponent
              color="blue"
              target="_blank"
              href="https://www.slg.co.at/publikationen/treasurylog/"
            >
              www.slg.co.at
            </LinkComponent>
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

Article.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

Article.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(Article);
