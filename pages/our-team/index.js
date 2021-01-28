import {Header, Section, Container, Member, Title, Button} from 'components'
import ludgerPhoto from 'images/team/MG_Janssen_Ludger_HF.jpg'
import svenPhoto from 'images/team/_MG_Matzelsberger-Sven-QF.jpg'
import jaimePhoto from 'images/team/_MG_Gimeno-Jaime-QF.jpg'
import davidPhoto from 'images/team/_MG_Saive-David-QF.jpg'
import felixPhoto from 'images/team/_MG_Scholle-Felix-QF.jpg'
import valeriePhoto from 'images/team/MG_Pfannenstiel_Valerie_HF.jpg'
import lenaPhoto from 'images/team/_MG_Kimpfbeck-Lena-QF.jpg'
import marinaPhoto from 'images/team/_MG_Simmerl-Marina-QF.jpg'
import sabinePhoto from 'images/team/_MG_Ostermeier-Sabine-QF.jpg'
import julianPhoto from 'images/team/_MG_Geddo-Julian-QF.jpg'
import araPhoto from 'images/team/_MG_Trujillo-Ara.jpg'
import annaPhoto from 'images/team/_MG_Mitrovic-Anna-QF.jpg'
import udoPhoto from 'images/team/_MG_Hohlschuh-Udo-QF.jpg'
import styles from './style.module.css';
import PropTypes from 'prop-types'
import { i18n, withTranslation } from 'i18n'

const Team = ({t}) => {
    return (
    <>
    <Header />
    <Section>
    <Container width="normal-width" height="minHeight" margin="marginTop">
        <Title>{t('pageTitle')}</Title>
        <div className={styles.team__container}>
        <Member src={ludgerPhoto} name="Ludger Janßen" job="MD - Sales, Business Analysis, Onboarding, Legal" />
        <Member src={svenPhoto} name="Sven Matzelsberger" job="MD – Finance, HR" />
        <Member src={jaimePhoto} name="Jaime Gimeno" job="Head of Technology, Product" />
        <Member src={davidPhoto} name="Dr. iur. David Saive" job="Head of Legal" />
        <Member src={felixPhoto} name="Felix Scholle" job="Sales Director" />
        <Member src={valeriePhoto} name="Valerie Pfannenstiel" job="Onboarding Manager" />
        <Member src={lenaPhoto} name="Lena Kimpfbeck" job="Onboarding Manager" />
        <Member src={marinaPhoto} name="Marina Simmerl" job="PR & Marketing Manager" />
        <Member src={sabinePhoto} name="Sabine Ostermeier" job="Office Manager"/>
        <Member src={jaimePhoto} name="Julian Geddo" job="Business Analyst"/>
        <Member src={araPhoto} name="Ara Trujillo" job="Onboarding Manager"/>
        <Member src={annaPhoto} name="Anna Mitrovic" job="Business Analyst" />
        <Member src={udoPhoto} name="Udo Holschuh" job="Onboarding Manager"/>
        </div>
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

Team.getInitialProps = async () => ({
    namespacesRequired: ['teamPage'],
  })
  
  Team.propTypes = {
    t: PropTypes.func.isRequired,
  }
  
  export default withTranslation('teamPage')(Team)