module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['/src'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@congif': './src/config',
          '@models': './src/models',
          '@navigator': './src/navigator',
          '@pages': './src/pages',
          '@utils': './src/utils',

        },
      },
    ],
  ]
};
