const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet')
const coockieParser = require('cookie-parser');
const errorHandler = require('./middleware/error');
const connectDB = require('./config/db');

// Load env vars
dotenv.config({ path: './config/config.env' });

// Connect to database
connectDB();

// Route files
const workspaces = require('./routes/workspaces');
const workingEnv = require('./routes/working-env');
const auth = require('./routes/auth');
const user = require('./routes/user');

const app = express();

// Body parser
app.use(express.json());

// Cookie Parser
app.use(coockieParser());

// Dev logging middleware
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Sanitize data
app.use(mongoSanitize());

// Set security headers
app.use(helmet());

// Mount routers
app.use('/api/v1/workspaces', workspaces);
app.use('/api/v1/working-env', workingEnv);
app.use('/api/v1/auth', auth);
app.use('/api/v1/user', user);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.brightBlue.bold));

// Handle unhandled promise rejections
process.on('unhadledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red.italic);
    //Close server & exit process
    server.close(() => process.exit(1));
})
