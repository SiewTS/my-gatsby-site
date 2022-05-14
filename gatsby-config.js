module.exports = {
    siteMetadata: {
        title: "My First Gatsby Website",
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `blogs`,
                path: `${__dirname}/blogs`,
            },
        },
        "gatsby-plugin-mdx",
    ],
}
