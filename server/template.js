export default function template(body, initialState) {
  return `<!DOCTYPE HTML>
    <html>
    <head>
      <meta charset="UTF-8" />
      <title>Pro MERN Stack</title>
      <script src="https://apis.google.com/js/api:client.js"></script>
      <!-- Minified CSS -->
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
      <!-- Optional Theme -->
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css">
      <link rel="stylesheet" href="/bootstrap/css/bootstrap.min.css" >
      <link rel="stylesheet" href="/react-select/react-select.css" >
    </head>
    <body>
      <div id="contents">${body}</div>
      <script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};</script>
      <script src="/vendor.app.bundle.js"></script>
      <script src="/app.bundle.js"></script>
      <script src="/config.js"></script>
      <!-- jQuery -->
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
      <!-- Minified JavaScript -->
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    </body>
    </html>
    `;
}
