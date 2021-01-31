import { Header, Section, Container, AdvisoryMember, Meta, Title, Button, Spacer } from 'components'
import PropTypes from 'prop-types'
import { withTranslation } from 'i18n'


const AdvisoryBoard = ({ t }) => {
  return (
    <>
      <Meta
        title={t("pageTitle") + " | Digital Vault Services"}

      />
      <Header />
      <Section>

        <Container width="normal-width" margin="marginTop96">
          <Title>{t('pageTitle')}</Title>
        </Container>
        <Container display="grid" width="normal-width" >
          <AdvisoryMember name="Alex Gurin" title='Chairman of the Investment Committee' company="GlobalTrade Corporation" location="Toronto/Canada" />
          <AdvisoryMember name="Günther Greil" title='Managing Director Finance & HR' company="Lindner Group SE" location="Arnstorf/Deutschland" />
          <AdvisoryMember name="Jaime Gimeno" title='Head of Technology, Product' company="Digital Vault Services GmbH" location="Stockholm/Sweden" />
          <AdvisoryMember name="Nick Pachnev" title='Chief Executive Officer' company="GlobalTrade Corporation" location="Toronto/Canada" />
        </Container>
        <Spacer size="m" />
        <Container width="normal-width">
          <Button
            href="/"
            title={t('ButtonBackToHomePage')}
            size="size-l"
            textColor="text-white"
            background="blue"
            border="border-white"
          />
        </Container>

      </Section>
    </>
  )
}

AdvisoryBoard.getInitialProps = async () => ({
  namespacesRequired: ['advisoryBoardPage'],
})

AdvisoryBoard.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('advisoryBoardPage')(AdvisoryBoard)