module.exports = {
  apps: [
    {
      name: 'e-commerce_server',
      script: 'dist/bundle.js',
      time: true,
      exec_mode: 'fork',
      instances: 1,
      autorestart: true,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
