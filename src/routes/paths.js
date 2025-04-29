export const rootPaths = {
    root: '/',
    portfolioRoot: 'portfolio',
    leasingRoot: 'leasing',
    contactsRoot: 'contacts',
    errorRoot: ''
  };
  
  export default {
    dashboard: `/`,
    units: `/${rootPaths.portfolioRoot}/units`,
    properties: `/${rootPaths.portfolioRoot}/properties`,
    all: `/${rootPaths.leasingRoot}/all`,
    draft: `/${rootPaths.leasingRoot}/draft`,
    tenants: `/${rootPaths.contactsRoot}/tenants`,
    home: `/${rootPaths.root}`,
    // mywork: `/${rootPaths.pageRoot}/mywork`,
    404: `/${rootPaths.errorRoot}/404`,
  };