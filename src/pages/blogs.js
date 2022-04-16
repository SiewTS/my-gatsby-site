import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const BlogsPage = ({ data }) => {
    return (
        <Layout pageTitle="My Blogs">
            <ul>
                {data.allFile.edges.map(edge => {
                    return <li>{edge.node.name}</li>
                })}
            </ul>
        </Layout>
    )
}

export const query = graphql`
    query {
        allFile(filter: { sourceInstanceName: { eq: "blogs" } }) {
            edges {
                node {
                    name
                }
            }
        }
    }
`

export default BlogsPage
