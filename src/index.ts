import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import 'express-async-errors';
import { container } from 'tsyringe';
import { Logger } from '@modules/logger';
import { registerRouter } from '@routers';
import { Handler } from '@app/exceptions/handler';

// Init app
const app = express();

// Use cookie
app.use(cookieParser());

// Logger
container.resolve(Logger).applyFor(app);

// Security
app.use(
  cors({
    credentials: true,
  }),
);
app.use(helmet());

// Return only json
app.use(express.json());

// Set static files
app.use(express.static('public'));

// Set up routes
registerRouter(app);

// Handle exceptions
container.resolve(Handler).handleFor(app);

export { app };
