import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import favicon from '../assets/images/favicon.png'

function SEO({ description, lang, meta, keywords, title }: any) {
    return (
        <StaticQuery
            query={detailsQuery}
            render={(data) => {
                const metaDescription = description || data.site.siteMetadata.description
                return (
                    <Helmet
                        htmlAttributes={{
                            lang,
                        }}
                        title={title}
                        titleTemplate={data.site.siteMetadata.title}
                        link={[{ rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }]}
                        meta={[
                            {
                                name: `description`,
                                content: metaDescription,
                            },
                            {
                                property: `og:title`,
                                content: title,
                            },
                            {
                                property: `og:description`,
                                content: metaDescription,
                            },
                            {
                                property: `og:type`,
                                content: `website`,
                            },
                            {
                                name: `twitter:card`,
                                content: `summary`,
                            },
                            {
                                name: `twitter:creator`,
                                content: data.site.siteMetadata.author,
                            },
                            {
                                name: `twitter:title`,
                                content: title,
                            },
                            {
                                name: `twitter:description`,
                                content: metaDescription,
                            },
                        ]
                            .concat(
                                keywords.length > 0
                                    ? {
                                          name: `keywords`,
                                          content: keywords.join(`, `),
                                      }
                                    : []
                            )
                            .concat(meta)}
                    />
                )
            }}
        />
    )
}

SEO.defaultProps = {
    lang: `en`,
    meta: [],
    keywords: [],
}

export default SEO

const detailsQuery = graphql`
    query DefaultSEOQuery {
        site {
            siteMetadata {
                title
                description
                author
            }
        }
    }
`
