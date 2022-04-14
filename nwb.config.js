module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactDDGStyles',
      externals: {
        react: 'React'
      }
    }
  }
}
