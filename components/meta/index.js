import Head from 'next/head'
// import favIcon from 'favicon.ico'
import favIcon32 from 'favicon-32x32.png'
import favIcon16 from 'favicon-16x16.png'
import favIconAppleTouch from 'apple-touch-icon.png'

const Meta = (props) => (
    <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.desc} />
        <meta property="og:type" content="website" />
        <meta name="og:title" property="og:title" content={props.title} />
        <meta name="og:description" property="og:description" content={props.desc} />
        <meta property="og:site_name" content="Digital Vault Services" />
        <meta property="og:url" content={`${props.canonical}`} />
        <link rel="apple-touch-icon" sizes="180x180" href={favIconAppleTouch} />
        <link rel="icon" type="image/png" sizes="32x32" href={favIcon32} />
        <link rel="icon" type="image/png" sizes="16x16" href={favIcon16} />
        {/* <link rel="icon" type="image/x-icon" href={favIcon} /> */}
        {/* <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={props.title} />
        <meta name="twitter:description" content={props.desc} />
        <meta name="twitter:site" content="@" />
        <meta name="twitter:creator" content="@" /> */}
        {/* <link rel="icon" href={favIcon} />
        <link rel="apple-touch-icon" href="images/favicon.ico" /> */}
        {
            props.css &&
            <link rel="stylesheet" href={`${props.css}`} />
        }
        {
            props.image ? (
                <meta property="og:image" content={`${props.image}`} />
            ) : (
                    <meta property="og:image" content="images/cover-image-w1560.png" />
                )
        }
        {
            props.image &&
            <meta name="twitter:image" content={`${props.image}`} />
        }
        {
            props.canonical &&
            <link rel="canonical" href={`${props.canonical}`} />
        }
        {
            props.js &&
            <script type="text/javascript" src={`${props.js}`}></script>
        }
    </Head>
)
export default Meta