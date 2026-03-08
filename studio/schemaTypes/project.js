export const project = {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'description', title: 'Description', type: 'text', rows: 3 },
    {
      name: 'span',
      title: 'Span',
      type: 'number',
      options: {
        list: [
          { title: 'Small (4)', value: 4 },
          { title: 'Medium (6)', value: 6 },
          { title: 'Full (12)', value: 12 },
        ],
      },
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'projectType',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Project', value: 'project' },
          { title: 'Component', value: 'component' },
          { title: 'Blog', value: 'blog' },
        ],
        layout: 'radio',
      },
    },
  ],
}
