import Head from 'next/head'
// import favIcon from 'favicon.ico'
import favIcon32 from 'favicon-32x32.png'
import favIcon16 from 'favicon-16x16.png'
import favIconAppleTouch from 'apple-touch-icon.png'
import ogImage from 'images/cover-image-w1560.png'


const Meta = (props) => (
    <Head>
        <title>{props.title}</title>
        {/* <meta name="description" content={props.desc} /> */}
        <meta property="og:type" content="website" />
        <meta name="title" property="og:title" content={props.title} />
        <meta name="description" property="og:description" content={props.desc} />
        <meta property="og:site_name" content="Digital Vault Services" />
        <meta property="og:url" content={`${props.url}`} />
        <meta name="article:published_time" property="article:published_time" content={`${props.publishDate}`} />

        {
            props.image ? (
                <meta name="image" property="og:image" content={`${props.image}`} />
                // <meta property="og:image:width" content="1200" />,
                // <meta property="og:image:height" content="675" />
            ) : (
                    <meta name="image" property="og:image" content={`'https://digitalvaultservices.com/'+ ${ogImage}`} />
                    // <meta property="og:image:width" content="1200" />,
                    // <meta property="og:image:height" content="675" />
                )
        }
        <meta property="og:image:width" content="1200" />,
        <meta property="og:image:height" content="675" />
        <link rel="apple-touch-icon" sizes="180x180" href={favIconAppleTouch} />
        <link rel="icon" type="image/png" sizes="32x32" href={favIcon32} />
        <link rel="icon" type="image/png" sizes="16x16" href={favIcon16} />
        <meta name="google-site-verification" content="XpsIbQ2rPh2xr-kO10TUVH-xj_pJVZyt1VnIUhjEIM4" />
        <meta name="robots" content={props.content}></meta>

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

        {/* {
            props.image &&
            <meta name="twitter:image" content={`${props.image}`} />
        } */}
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