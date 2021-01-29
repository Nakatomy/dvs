import PropTypes from "prop-types";
import { withTranslation } from "i18n";
import {
  Header,
  Section,
  Container,
  Paragraph,
  Heading,
  Title,
  Button,
  UlList,
  ListItem,
  LinkComponent,
  Spacer,
} from "components";

const PrivacyPolicy = ({ t }) => {
  return (
    <>
      <Header />
      <Section>
        <Container width="normal-width" margin="marginTop96">
          <Title>{t("pageTitle")}</Title>
          <Paragraph>
            {t("paragraph1")}
            <LinkComponent href="./" color="blue">
              www.digitalvaultservices.com
            </LinkComponent>
          </Paragraph>
          <Spacer size="s" />
          <Heading>
            <strong>{t("heading1")}</strong>
          </Heading>
          <Paragraph>{t("paragraph2")}</Paragraph>
          <UlList listStyle="list-style-none">
            <ListItem>Digital Vault Services GmbH</ListItem>
            <ListItem>Stahlgruberring 43</ListItem>
            <ListItem>81829 Munich</ListItem>
            <ListItem>Tel.: +49 175 8868021</ListItem>
            <ListItem>E-Mail: contact@digitalvaultservices.com</ListItem>
            <ListItem>Website: https://www.digitalvaultservices.com</ListItem>
          </UlList>
          <Spacer size="s" />
          <Heading>
            <strong>{t("heading2")}</strong>
          </Heading>
          <Paragraph>{t("paragraph3")}</Paragraph>

          <UlList listStyle="list-style-none">
            <ListItem>Dr. David Saive</ListItem>
            <ListItem>Stahlgruberring 43</ListItem>
            <ListItem>81829 Munich</ListItem>
            <ListItem>E-Mail: david.saive@digitalvaultservices.com</ListItem>
          </UlList>
          <Spacer size="s" />
          <Heading>
            <strong>{t("heading3")}</strong>
          </Heading>
          <Paragraph>{t("paragraph4")}</Paragraph>

          <UlList>
            <ListItem>{t("listItem1")}</ListItem>
          </UlList>

          <Paragraph>{t("paragraph5")}</Paragraph>

          <UlList>
            <ListItem>{t("listItem2")}</ListItem>
          </UlList>

          <Paragraph>{t("paragraph6")}</Paragraph>
          <div>
            <Paragraph>{t("paragraph7")}</Paragraph>
            <UlList>
              <ListItem>{t("listItem3")}</ListItem>
              <ListItem>{t("listItem4")}</ListItem>
              <ListItem>{t("listItem5")}</ListItem>
              <ListItem>{t("listItem6")}</ListItem>
              <ListItem>{t("listItem7")}</ListItem>
              <ListItem>{t("listItem8")}</ListItem>
            </UlList>
          </div>

          <Paragraph>{t("paragraph8")}</Paragraph>
          <Paragraph>{t("paragraph9")}</Paragraph>

          <UlList>
            <ListItem>{t("listItem9")}</ListItem>
          </UlList>

          <Paragraph>{t("paragraph10")}</Paragraph>
          <Spacer size="s" />
          <Heading>
            <strong>{t("heading4")}</strong>
          </Heading>
          <Paragraph>{t("paragraph11")}</Paragraph>
          <Paragraph>{t("paragraph12")}</Paragraph>
          <Paragraph>{t("paragraph13")}</Paragraph>
          <Paragraph>{t("paragraph14")}</Paragraph>

          <UlList>
            <ListItem>
              <strong>{t("name")}</strong>
              {t("name1")}
            </ListItem>
            <ListItem>
              <strong>{t("functionality")}</strong>
              {t("functionality1")}
            </ListItem>
            <ListItem>
              <strong>{t("expiration")}</strong>
              {t("expiration1")}
            </ListItem>
          </UlList>

          <UlList>
            <ListItem>
              <strong>{t("name")}</strong>
              {t("name2")}
            </ListItem>
            <ListItem>
              <strong>{t("functionality")}</strong>
              {t("functionality2")}
            </ListItem>
            <ListItem>
              <strong>{t("expiration")}</strong>
              {t("expiration2")}
            </ListItem>
          </UlList>

          <UlList>
            <ListItem>
              <strong>{t("name")}</strong>
              {t("name3")}
            </ListItem>
            <ListItem>
              <strong>{t("functionality")}</strong>
              {t("functionality3")}
            </ListItem>
            <ListItem>
              <strong>{t("expiration")}</strong>
              {t("expiration3")}
            </ListItem>
          </UlList>

          <UlList>
            <ListItem>
              <strong>{t("name")}</strong>
              {t("name4")}
            </ListItem>
            <ListItem>
              <strong>{t("expiration")}</strong>
              {t("expiration4")}
            </ListItem>
          </UlList>

          <Spacer size="s" />
          <Heading>
            <strong>{t("heading5")}</strong>
          </Heading>
          <Paragraph>{t("paragraph15")}</Paragraph>
          <UlList listStyle="list-style-none">
            <ListItem>
              <strong>{t("listItem10")}</strong>
            </ListItem>
            <ListItem>{t("listItem11")}</ListItem>
          </UlList>

          <UlList listStyle="list-style-none">
            <ListItem>
              <strong>{t("listItem12")}</strong>
            </ListItem>
            <ListItem>{t("listItem13")}</ListItem>
          </UlList>

          <UlList listStyle="list-style-none">
            <ListItem>
              <strong>{t("listItem14")}</strong>
            </ListItem>
            <ListItem>{t("listItem15")}</ListItem>
          </UlList>

          <UlList listStyle="list-style-none">
            <ListItem>
              <strong>{t("listItem16")}</strong>
            </ListItem>
            <ListItem>{t("listItem17")}</ListItem>
          </UlList>

          <UlList listStyle="list-style-none">
            <ListItem>
              <strong>{t("listItem18")}</strong>
            </ListItem>
            <ListItem>{t("listItem19")}</ListItem>
          </UlList>

          <UlList listStyle="list-style-none">
            <ListItem>
              <strong>{t("listItem20")}</strong>
            </ListItem>
            <ListItem>{t("listItem21")}</ListItem>
          </UlList>

          <UlList listStyle="list-style-none">
            <ListItem>
              <strong>{t("listItem22")}</strong>
            </ListItem>
            <ListItem>{t("listItem23")}</ListItem>
          </UlList>

          <Paragraph>{t("paragraph16")}</Paragraph>
          <Paragraph>{t("paragraph17")}</Paragraph>
          <UlList listStyle="list-style-none">
            <ListItem>{t("listItem24")}</ListItem>
            <ListItem>Promenade 18</ListItem>
            <ListItem>91504 Ansbach</ListItem>
            <ListItem>Telefon: +49 (0) 981 180093-0</ListItem>
            <ListItem>Fax: +49 (0) 981 180093-800</ListItem>
            <ListItem>E-Mail: poststelle@lda.bayern.de</ListItem>
          </UlList>

          <UlList listStyle="list-style-none">
            <ListItem>
              <strong>{t("listItem25")}</strong>
            </ListItem>
            <ListItem>{t("listItem26")}</ListItem>
          </UlList>
          <Spacer size="s" />
          <Heading>
            <strong>{t("heading6")}</strong>
          </Heading>
          <Paragraph>{t("paragraph18")}</Paragraph>
          <Paragraph>{t("paragraph19")}</Paragraph>
          <Paragraph>{t("paragraph20")}</Paragraph>
          <Spacer size="s" />
          <Heading>
            <strong>{t("heading7")}</strong>
          </Heading>
          <Paragraph>{t("paragraph21")}</Paragraph>
          <Spacer size="s" />
          <Button
            href="/"
            title="Back to Home Page"
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

PrivacyPolicy.getInitialProps = async () => ({
  namespacesRequired: ["privacyPolicy"],
});

PrivacyPolicy.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("privacyPolicy")(PrivacyPolicy);
