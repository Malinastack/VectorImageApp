module.exports = {
  defaultNamespace: 'translation',
  createOldCatalogs: false,
  locales: ['en'],
  output: 'src/translations/$LOCALE/$NAMESPACE.json',
  input: 'src/**/*.{js,ts,tsx}',
  sort: true,
};
