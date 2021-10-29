exports.createPages = async ({ graphql, actions }) => {
    const { data } = await graphql(`
    query project {
        allMarkdownRemark {
          nodes {
            frontmatter {
              slug
            }
          }
        }
      }
      
    `)
    data.allMarkdownRemark.nodes.forEach(node => {
        actions.createPage({
            path: `/project/${node.frontmatter.slug}`,
            component: require.resolve('./src/templates/blog-details.js'),
            context: {
                slug: node.frontmatter.slug
            }
        })
    })
}