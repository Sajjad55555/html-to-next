import {defineField, defineType} from 'sanity'

const bestCourse = ({
    name: 'bestCourse',
    title: 'bestCourse',
    type: 'document',
    fields: [
     ({
        name: 'title',
        title: 'Title',
        type: 'string',
      }),
    
     ({
        name: 'descration',
        title: 'Descration',
        type: 'string',
      }),
   
    ({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    })
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection:any) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
export default bestCourse
