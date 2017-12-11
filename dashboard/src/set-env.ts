import { writeFile } from 'fs';
import { argv } from 'yargs';

require('dotenv').config();

// The variable will be passed to the script like this: `ts-node set-env.ts --environment=dev`
const environment = argv.environment;
const isProd = environment === 'prod';

const targetPath = `./dashboard/src/environments/environment.ts`;
const envConfigFile = `// This file's contents will be overwritten by the values in the .env file during build.
export const environment = {
  production: ${isProd},
  APP_ID: ${process.env.APP_ID}
  MASTER_KEY: ${process.env.MASTER_KEY}
  SERVER_URL: '${process.env.SERVER_URL}',
  FLURRY_APP_ANALYTICS_TOKEN: '${process.env.FLURRY_APP_ANALYTICS_TOKEN}'
};
`
writeFile(targetPath, envConfigFile, function (err) {
  if (err) {
    console.log(err);
  }

  console.log(`Output generated at ${targetPath}`);
});
