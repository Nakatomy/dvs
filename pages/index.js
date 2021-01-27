import { Container, Lead, Partners, Section, ImageComponent, GridItem, Title, Paragraph, Button, Header } from 'components'
import abstractWaves from "images/abstract-waves.png";
import solution from 'configs/solution'
import Image from 'next/image'
import PropTypes from 'prop-types'
import { i18n, Link, withTranslation } from '../i18n'

function HomePage({ t }) {
  return (
    <> 
    <Lead />
    <Partners />
    <Section style="gradient" display="grid" width="full-width">
      <Container display='grid' width='full-width'>

          <GridItem>   
              <Image src={abstractWaves} alt='Asbtract waves' width="921" height="647" className="{subItems.classNames}"></Image>
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
                                <Button href="./solution" title='More' size='size-l' textColor='text-blue' border='border-blue' />

          </GridItem>

    
      </Container>
    </Section>
  </>
  );
  }

  HomePage.getInitialProps = async () => ({
    namespacesRequired: ['common'],
  })
  
  HomePage.propTypes = {
    t: PropTypes.func.isRequired,
  }
  
  export default withTranslation('common')(HomePage)