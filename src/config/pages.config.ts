const pages = {
  index: {
    entry: 'src/pages/index/index.ts',
    template: 'src/pages/index/index.html',
    filename: 'index.html',
    title: 'Indx Page',
    chunks: ['chunk-vendors', 'chunk-common', 'index'],
  },
  admin: {
    entry: 'src/pages/admin/admin.ts',
    template: 'src/pages/admin/admin.html',
    filename: 'admin.html',
    title: 'Admin Page',
    chunks: ['chunk-vendors', 'chunk-common', 'admin'],
  },
};

module.exports =  pages;
