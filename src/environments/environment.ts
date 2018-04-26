// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDLnFVp-c0fRDxSVzL4PUXnhVEOlUMUnJE',
    authDomain: 'trackme-b33b5.firebaseapp.com',
    databaseURL: 'https://trackme-b33b5.firebaseio.com/',
    projectId: 'trackme-b33b5',
    storageBucket: 'trackme-b33b5.appspot.com',
    messagingSenderId: '36265645292'
  }
};
