const express = require('express');
const webpack = require('webpack');
const favicon = require('serve-favicon');
const path = require('path');
const cors = require('cors');
const compression = require('compression');

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';

import RootApp from './src/components/Layout';
//import RootApp from './src';

const app = express();
const HTTP_PORT = process.env.HTTP_PORT || 3000;
const HOST = process.env.HOST || null;

const webpackConfig = require('./webpack.config.js');
const compiler = webpack(webpackConfig);

app.use( express.static( path.resolve( __dirname, './dist' ) ) );
app.use(express.json());
app.use(cors());
app.use(compression());//add this as the 1st middleware

app.use('/images', express.static(__dirname + '/assets/images'));
app.use('/icons', express.static(__dirname + '/assets/icons'));

app.use(favicon(path.join('assets', 'icons', 'favicon.ico')));

app.use(require('webpack-dev-middleware')(compiler, {
  clientLogLevel: 'warning',
  hot: true,
  inline: true,
  progress: true,
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
  },
}));
app.use(require('webpack-hot-middleware')(compiler));

app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

app.post('/api/register', (req, res) => {
  let response = { 
    'message': 'Registration Successfull',
    'status': 200
  };
  return res.send(response);
});

/* app.get('/app', (req, res) => {
  const fileName = path.join(compiler.outputPath, 'index.html');
  compiler.outputFileSystem.readFile(fileName, (err, file) => {
    if(err){
      return res.status(400)(err);
    }

    return res.send(file.toString());
  });
}); */

app.get( '/*', ( req, res ) => {
  const context = { };
  const jsx = (
      <StaticRouter context={ context } location={ req.url }>
          <RootApp />
      </StaticRouter> 
  );
  //const jsx = ( <div> testing </div>);
  const reactDom = ReactDOMServer.renderToString(jsx);

  res.writeHead( 200, { 'Content-Type': 'text/html' } );
  res.end( htmlTemplate( reactDom ) );
} );

//start server
app.listen(HTTP_PORT, HOST, error => {
  if (!error) {
    console.log(`Server Started at ${HOST} @ port : ${HTTP_PORT}`);
  } else if (error) {
    console.log(`Error encountered : ${error}`);
  }
});

function htmlTemplate( reactDom ) {
  return `
      <!DOCTYPE html>
      <html lang="en ">
      <head>
          <meta charset='utf-8'>
          <title>React SSR</title>
      </head>
      
      <body>
          <div id='app'>${ reactDom }</div>
          <script src='./bundle.js'></script>
      </body>
      </html>
  `;
}
