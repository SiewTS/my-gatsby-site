import React from "react"
import Layout from "../components/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"

const BlogsPage = ({ data }) => {
    return (
        <Layout pageTitle="My Blogs">
            {data.allMdx.nodes.map(node => (
                <article key={node.id}>
                    <h2>{node.frontmatter.title}</h2>
                    <p>Posted: {node.frontmatter.date}</p>

                    <MDXRenderer>{node.body}</MDXRenderer>
                </article>
            ))}
        </Layout>
    )
}

export const query = graphql`
    query {
        allMdx(sort: { fields: frontmatter___date, order: DESC }) {
            nodes {
                frontmatter {
                    title
                    date(formatString: "MMMM DD, YYYY")
                }
                id
                body
            }
        }
    }
`

export default BlogsPage
