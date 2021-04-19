import { app } from '../index';
import { nodeConfig } from '@configs/node';
import { DBConnection } from '@modules/database/core';

// Activate server
app.listen(nodeConfig.port, async () => {
  await DBConnection.establish();

  console.log(`
    \t------------------------------------
    \t\x1b[1mE-commerce API\n
    \tEnvironment: \x1b[0m${nodeConfig.env}\n
    \t\x1b[1mListening: \x1b[0m\x1b[34mhttp://127.0.0.1:${nodeConfig.port}
    \t\x1b[0m------------------------------------
  `);
});
