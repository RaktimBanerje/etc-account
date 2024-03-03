import { CollectionConfig } from 'payload/types'

const Student: CollectionConfig = {
  slug: 'students',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Basic Details', // required
          fields: [
            {
              name: 'name',
              type: 'text',
            },
            {
              name: 'college', // required
              type: 'relationship', // required
              relationTo: 'colleges', // required
              hasMany: false,
              required: true,
            },
            {
              name: 'course', // required
              type: 'relationship', // required
              relationTo: 'courses', // required
              hasMany: false,
              required: true,
            }
          ],
        },
        {
          label: 'Documents',
          fields: [
            {
              name: 'ten_class_marksheet',
              label: '10th Class Marksheet',
              type: 'upload', 
              relationTo: 'media',
              required: true
            },
            {
              name: 'ten_class_admitcard',
              label: '10th Class Admit Card',
              type: 'upload', 
              relationTo: 'media',
              required: true
            },
            {
              name: 'ten_class_registration',
              label: '10th Class Registration',
              type: 'upload', 
              relationTo: 'media',
              required: true
            },
            {
              name: 'ten_class_certificate',
              label: '10th Class Certificate',
              type: 'upload', 
              relationTo: 'media',
              required: true
            },
            {
              name: 'twelve_class_marksheet',
              label: '12th Class Marksheet',
              type: 'upload', 
              relationTo: 'media',
              required: true
            },
            {
              name: 'twelve_class_admitcard',
              label: '12th Class Admit Card',
              type: 'upload', 
              relationTo: 'media',
              required: true
            },
            {
              name: 'twelve_class_registration',
              label: '12th Class Registration',
              type: 'upload', 
              relationTo: 'media',
              required: true
            },
            {
              name: 'twelve_class_certificate',
              label: '12th Class Certificate',
              type: 'upload', 
              relationTo: 'media',
              required: true
            },
            {
              name: 'aadhar',
              label: 'Aadhar Card',
              type: 'upload', 
              relationTo: 'media',
              required: true
            },
            {
              name: 'caste_certificate',
              label: 'Caste Certifricate',
              type: 'upload', 
              relationTo: 'media',
            },
            {
              name: 'photo',
              label: 'photo',
              type: 'upload', 
              relationTo: 'media',
              required: true
            },
            {
              name: 'school_leaving_certificate',
              label: 'School Leaving Certificate',
              type: 'upload', 
              relationTo: 'media',
              required: true
            },
            {
              name: 'wbjee_rank_card',
              label: 'WBJEE Rank Card',
              type: 'upload', 
              relationTo: 'media',
              required: true
            },
          ],
        },
        {
          label: 'Fees Structure', // required
          fields: [
            {
              name: 'fees',
              type: 'array',
              fields: [
                {
                  name: 'fees_for',
                  label: "Fees For",
                  type: 'text',
                },
                {
                  name: 'amount',
                  label: "Amount",
                  type: 'number',
                }
              ]
            },
          ],
        },
      ]
    },
  ],
  timestamps: true,
}

export default Student
