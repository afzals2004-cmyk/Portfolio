import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, name, type }) => {
    return (
        <Helmet>
            { /* Standard metadata tags */}
            <title>{title} | Afzal Shaikh Portfolio</title>
            <meta name='description' content={description} />

            { /* Facebook tags */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />

            { /* Twitter tags */}
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:card" content={type} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
        </Helmet>
    )
}

SEO.defaultProps = {
    title: 'Afzal Shaikh',
    description: 'Portfolio of Afzal Shaikh - Data Scientist & Automation Engineer specializing in Python, AI, and Web Development.',
    name: 'Afzal Shaikh',
    type: 'website'
}

export default SEO;
