import { CollectionConfig } from 'payload/types'

const Payment: CollectionConfig = {
  slug: 'payments',
  admin: {
    useAsTitle: 'student',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Payment Entry', // required
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
            },
          ]
        },
        {
          label: 'Other Details', // required
          fields: [
            {
              name: 'method',
              label: 'Payment Method',
              type: 'select',
              options: [
                {
                  label: 'Cash',
                  value: 'cash',
                },
                {
                  label: 'UPI/ Bank Transfer',
                  value: 'online',
                },
              ],
            },
            {
              name: 'transaction_id',
              label: "UTR No/ Transaction ID",
              type: 'text',
            }
          ]
        }
      ]
    }

  ],
  timestamps: true,
}

export default Payment
