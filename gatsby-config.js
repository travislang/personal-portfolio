module.exports = {
    siteMetadata: {
        title: `Travis Lang`,
        description: `My personal software development portfolio website.`,
        author: `@travislang`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: 'UA-133286754-1',
            },
        },
    ],
}
