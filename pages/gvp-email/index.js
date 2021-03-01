import sven from "images/gvp-email/sven-matzelsberger.png"
import ludger from "images/gvp-email/ludger-janssen.png"
import logoHeader from "images/gvp-email/logo_header.png"
import logoFooterOnWhite from "images/gvp-email/logo__footer-w.png"
import logoFooterOnDark from "images/gvp-email/logo__footer-b.png"
import { Meta, ImageComponent } from "components"



const GvpEmail = ({ t }) => {
    return (
        <>
            <Meta
                content="noindex"
            />
            <ImageComponent
                src={sven}

            />
            <ImageComponent
                src={ludger}
            />
            <ImageComponent
                src={logoHeader}
            />
            <ImageComponent
                src={logoFooterOnWhite}
            />
            <ImageComponent
                src={logoFooterOnDark}
            />
        </>
    )
}

GvpEmail.getInitialProps = async () => ({
    namespacesRequired: ["gvp-email"],
});


export default GvpEmail
