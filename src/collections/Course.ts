import { CollectionConfig } from 'payload/types'

const Course: CollectionConfig = {
  slug: 'courses',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'semesters',
      type: 'number',
    },
  ],
  timestamps: true,
}

export default Course
