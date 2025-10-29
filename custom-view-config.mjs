/**
 * @type {import('@commercetools-frontend/application-config').ConfigOptionsForCustomView}
 */
const config = {
  name: 'My Ct Custom View',
  cloudIdentifier: 'aws-eu',
  env: {
    development: {
      initialProjectKey: 'ct-training-1',
    },
    production: {
      customViewId: 'cmhbsqvaz0007w101miolfjz8',
      url: 'https://ct-view-custom.netlify.app/',
    },
  },
  oAuthScopes: {
    view: ['view_products','view_orders'],
    manage: ['manage_products','manage_orders'],
  },
  type: 'CustomPanel',
  typeSettings: {
    size: 'LARGE',
  },
  locators: ['products.product_details.general'],
};

export default config;
