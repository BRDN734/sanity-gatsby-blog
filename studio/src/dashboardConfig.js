export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eea2e097a276d90c5751b8b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-72q3ry1b',
                  apiId: 'a9d8ab7d-9d7b-4d88-b7cd-efa46c3b4baf'
                },
                {
                  buildHookId: '5eea2e09d8ca06b0d9ce9845',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-c66e398s',
                  apiId: 'ccb144d0-de4b-4449-acfb-051433c801f3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/BRDN734/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-c66e398s.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
