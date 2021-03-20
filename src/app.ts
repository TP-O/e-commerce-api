import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { logger } from '@logger';
import { registerRouter } from '@router';
import { handler } from '@exception/handler';

// Init app
const app = express();

// Logger
logger.applyFor(app);

// Security
app.use(cors());
app.use(helmet());

// Return only json
app.use(express.json());

// Set static files
app.use(express.static('public'));

// Set up routes
registerRouter(app);

// Handle exceptions
handler.handleFor(app);

export { app };
