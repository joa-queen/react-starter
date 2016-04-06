require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  app: {
    title: 'Experiencia Fútbol',
    description: 'Pronto vas a poder ser parte de la experiencia',
    head: {
      titleTemplate: 'Experiencia Fútbol: %s',
      meta: [
        {name: 'description', content: 'Pronto vas a poder ser parte de la experiencia'},
        {charset: 'utf-8'},
        {property: 'og:site_name', content: 'Experiencia Fútbol'},
        {property: 'og:image', content: 'http://www.experienciafutbol.com/images/player-media.png'},
        {property: 'og:locale', content: 'es_AR'},
        {property: 'og:title', content: 'Experiencia Fútbol'},
        {property: 'og:description', content: 'Pronto vas a poder ser parte de la experiencia'},
        {property: 'og:card', content: 'summary'},
        {property: 'og:site', content: '@aerolab'},
        {property: 'og:creator', content: '@aerolab'},
        {property: 'og:image:width', content: '200'},
        {property: 'og:image:height', content: '200'}
      ]
    }
  },

}, environment);
