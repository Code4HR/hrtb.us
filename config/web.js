/**
 * Server Configuration
 * (app.config.web)
 *
 * Configure the Web Server
 *
 * @see {@link http://trailsjs.io/doc/config/web}
 */

const path = require('path')

module.exports = {

  /**
   * The port to bind the web server to
   */
  port: process.env.PORT || 3000,

  plugins: [
    {
      register: require('vision'),
      options: { }
    },
    {
      register: require('inert'),
      options: { }
    }
  ],

  onPluginsLoaded: function (err) {
    // Note that `this` is Trails `app` instance

    console.log(__dirname);

    this.packs.hapi.server.views({
      engines: {
        js: require('hapi-react-views')
      },
      relativeTo: path.join(__dirname, '..'),
      path: 'dist',
      compileOptions: {
        renderMethod: 'renderToString',
        layoutPath: path.join(__dirname, '..', 'dist', 'components'),
        layout: 'layout'
      }
    })
  }

}
