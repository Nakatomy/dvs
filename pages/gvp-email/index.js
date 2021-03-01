
import { Meta, ImageComponent } from "components"



const GvpEmail = ({ t }) => {
    return (
        <>
            <Meta
                content="noindex"
            />
            <ImageComponent
                src="static/assets/gvp-email/sven-matzelsberger.png"
                width={80}
                height={80}

            />
            <ImageComponent
                src="static/assets/gvp-email/ludger-janssen.png"
                width={80}
                height={80}
            />
            <ImageComponent
                src="static/assets/gvp-email/logo-header.png"
                width={250}
                height={211}
            />
            <ImageComponent
                src="static/assets/gvp-email/logo__footer-w.png"
                width={221}
                height={73}
            />
            <ImageComponent
                src="static/assets/gvp-email/logo__footer-b.png"
                width={221}
                height={73}
            />
        </>
    )
}

GvpEmail.getInitialProps = async () => ({
    namespacesRequired: ["gvp-email"],
});


export default GvpEmail
