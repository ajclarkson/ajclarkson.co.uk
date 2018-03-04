import React from 'react';
import Typekit from 'react-typekit';


const stylesStr = `
    html, body {
        margin: 0;
        padding: 0;
    }
`;

const HTML = (props) => {
  const css = (
    <style
      id="gatsby-inlined-css"
      dangerouslySetInnerHTML={{ __html: stylesStr }} // eslint-disable-line react/no-danger
    />
  );
  return (
    <html lang="en" {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
        {css}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key="body"
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }} // eslint-disable-line react/no-danger
        />
        {props.postBodyComponents}
        <Typekit kitId="ahk4squ" />
      </body>
    </html>
  );
};

module.exports = HTML;
