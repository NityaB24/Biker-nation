export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Product Name',
        type: 'string',
      },
      {
        name: "slug",
        title: "Product Slug",
        type: "slug",
        options: {
          source: 'name',
        }
      },
      {
        name: 'description',
        title: 'Product Description',
        type: 'text',
      },
      {
        name: 'price',
        title: 'Product Price',
        type: 'number',
      },
      {
        name: 'price_id',
        title: 'Stripe Product Price ID',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Product Images',
        type: 'array',
        of: [
          {
            type: 'image',
          },
        ],
      },
      {
        name: 'categories',
        title: 'Product Categories',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: {
              type: 'category',
            },
          },
        ],
      },
    ],
  }