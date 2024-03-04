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
      hasMany: false,
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
    {
      name: 'college',
      type: 'relationship', // required
      relationTo: 'colleges', // required
      hasMany: false,
      admin: {
        condition: (data) => data.roles === 'counsellor',
      },
      required: true,
    }
  ],
  timestamps: true,
}

export default Users
