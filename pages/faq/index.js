import styles from './style.module.css';
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
    FaqItem
} from "components";
import PropTypes from "prop-types";
import Collapsible from 'react-collapsible';
import { withTranslation } from "i18n";

const FAQS = [
    {
        title: 'Who/What is Digital Vault Services?',
        content: () => (
            <>
                Digital Vault Services GmbH is a SaaS provider, founded in 2019 by the worldwide active Trade Finance IT-provider, GlobalTrade Corporation, Toronto/Canada and the owner-operated Lindner Group KG, Arnstorf/Germany.
                Digital Vault Services GmbH provides Guarantee Vault, a place for the issuance and safekeeping of digital guarantees.
                Guarantee Vault is a true market initiative and the result of a 2 year collaboration with 17 working group members made up of major corporates, banks and sureties.
            </>
        ),
    },
    {
        title: 'What is Guarantee Vault?',
        content: () => (
            <>
                Guarantee Vault is a solution to digitize the existing paper-based process through the central issuance of digital guarantees that are requested, secured and stored electronically.

            </>
        ),
    },
    {
        title: 'What can the Guarantee Vault do for me?',
        content: () => (
            <>
                Gatsby.js is Internet Scale. Forget complicated deploys with databases
                and servers and their expensive, time-consuming setup costs,
                maintenance, and scaling fears. Gatsby.js builds your site as “static”
                files which can be deployed easily on dozens of services.
            </>
        ),
    },
    {
        title: 'How does the Guarantee Vault work?',
        content: () => (
            <>
                Do not build a website with last decade’s tech. The future of the web is
        mobile, JavaScript and APIs—the{` `}
                <LinkComponent href="https://jamstack.org/">JAMstack</LinkComponent>.
        Every website is a web app and every web app is a website. Gatsby.js is
        the universal JavaScript framework you’ve been waiting for.
            </>
        ),
    },
    {
        title: 'Are digital guarantees legally valid in my country?',
        content: () => (
            <>
                Gatsby.js is a static PWA (Progressive Web App) generator. You get code
                and data splitting out-of-the-box. Gatsby loads only the critical HTML,
                CSS, data, and JavaScript so your site loads as fast as possible. Once
                loaded, Gatsby prefetches resources for other pages so clicking around
                the site feels incredibly fast.
            </>
        ),
    },
    {
        title: 'Who/What is Digital Vault Services??',
        content: () => (
            <>
                Digital Vault Services GmbH is a SaaS provider, founded in 2019 by the worldwide active Trade Finance IT-provider, GlobalTrade Corporation, Toronto/Canada and the owner-operated Lindner Group KG, Arnstorf/Germany.
                Digital Vault Services GmbH provides Guarantee Vault, a place for the issuance and safekeeping of digital guarantees.
                Guarantee Vault is a true market initiative and the result of a 2 year collaboration with 17 working group members made up of major corporates, banks and sureties.
            </>
        ),
    },
    {
        title: 'What is Guarantee Vault?',
        content: () => (
            <>
                Guarantee Vault is a solution to digitize the existing paper-based process through the central issuance of digital guarantees that are requested, secured and stored electronically.

            </>
        ),
    },
    {
        title: 'What can the Guarantee Vault do for me?',
        content: () => (
            <>
                Gatsby.js is Internet Scale. Forget complicated deploys with databases
                and servers and their expensive, time-consuming setup costs,
                maintenance, and scaling fears. Gatsby.js builds your site as “static”
                files which can be deployed easily on dozens of services.
            </>
        ),
    },
    {
        title: 'How does the Guarantee Vault work?',
        content: () => (
            <>
                Do not build a website with last decade’s tech. The future of the web is
        mobile, JavaScript and APIs—the{` `}
                <LinkComponent href="https://jamstack.org/">JAMstack</LinkComponent>.
        Every website is a web app and every web app is a website. Gatsby.js is
        the universal JavaScript framework you’ve been waiting for.
            </>
        ),
    },
    {
        title: 'Are digital guarantees legally valid in my country?',
        content: () => (
            <>
                Gatsby.js is a static PWA (Progressive Web App) generator. You get code
                and data splitting out-of-the-box. Gatsby loads only the critical HTML,
                CSS, data, and JavaScript so your site loads as fast as possible. Once
                loaded, Gatsby prefetches resources for other pages so clicking around
                the site feels incredibly fast.
            </>
        ),
    },
];


const Faq = ({ t }) => {
    return (
        <>
            <Meta
                title={"FAQ | Digital Vault Services"}
            />
            <Header />
            <Section>
                <Container width="normal-width" margin="marginTop96">
                    <Title>FAQ</Title>
                    {FAQS.map(({ title, content }) => (
                        <FaqItem title={title} key={title}>
                            {content()}
                        </FaqItem>
                    ))}

                </Container>
            </Section>
        </>
    );
};

Faq.getInitialProps = async () => ({
    namespacesRequired: ["faq"],
});

Faq.propTypes = {
    t: PropTypes.func.isRequired,
};

export default withTranslation("faq")(Faq);
