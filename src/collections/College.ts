import { CollectionConfig } from 'payload/types'

const College: CollectionConfig = {
  slug: 'colleges',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
  ],
  timestamps: true,
}

export default College
