import { CollectionConfig } from 'payload/types'

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'roles',
      type: 'select',
      hasMany: true,
      options: [
        {
          label: 'Admin',
          value: 'admin',
        },
        {
          label: 'Agent',
          value: 'agent',
        },
        {
          label: 'Counsellor',
          value: 'counsellor',
        },
      ],
    },
  ],
  timestamps: true,
}

export default Users
