import { CollectionConfig } from 'payload/types'

const Payment: CollectionConfig = {
  slug: 'payments',
  admin: {
    useAsTitle: 'student',
  },
  fields: [
    {
        name: 'student',
        label: 'Student',
        type: 'relationship',
        relationTo: 'students',
        required: true
    },
    {
        name: 'amount',
        label: 'Amount',
        type: 'number',
        required: true
    },
    {
        name: 'receipt',
        label: 'Upload Receipt Copy',
        type: 'upload', 
        relationTo: 'media',
        required: true
    }
  ],
  timestamps: true,
}

export default Payment
