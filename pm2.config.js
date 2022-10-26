/*
  Prod : pm2 start pm2.config.js --only jspaude

*/

module.exports = {
  apps: [
    {
      name: 'jspaude',
      script: 'npm',
      args: 'run start',
      env: { NODE_ENV: 'production' },
    },
  ],
};
