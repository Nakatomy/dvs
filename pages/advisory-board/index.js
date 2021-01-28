import {Header, Section, Container, AdvisoryMember, Title, Button} from 'components'
// import styles from './style.module.css';
import PropTypes from 'prop-types'
import { i18n, withTranslation } from 'i18n'

const AdvisoryBoard = ({t}) => {
    return (
    <>
    <Header />
    <Section>
    
    <Container  width="normal-width" margin="marginTop">
    <Title>Advisory Board</Title>
    </Container>
        <Container display="grid" width="normal-width" margin="marginBottom80" >
        <AdvisoryMember name="Alex Gurin" title='Chairman of the Investment Committee' company="GlobalTrade Corporation" location="Toronto/Canada"/>
        <AdvisoryMember name="Günther Greil" title='Managing Director Finance & HR' company="Lindner Group SE" location="Arnstorf/Deutschland"/>
        <AdvisoryMember name="Jaime Gimeno" title='Head of Technology, Product' company="Digital Vault Services GmbH" location="Stockholm/Sweden"/>
        <AdvisoryMember name="Nick Pachnev" title='Chief Executive Officer' company="GlobalTrade Corporation" location="Toronto/Canada"/>
        </Container>
      <Container width="normal-width">
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
    )
}

AdvisoryBoard.getInitialProps = async () => ({
    namespacesRequired: ['advisoryBoard'],
  })
  
  AdvisoryBoard.propTypes = {
    t: PropTypes.func.isRequired,
  }
  
  export default withTranslation('advisoryBoard')(AdvisoryBoard)