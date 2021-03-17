const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const connectDB = require('./config/db');

// Load env vars
dotenv.config({ path: './config/config.env' });

// Connect to database
connectDB();

// Route files
const workspaces = require('./routes/workspaces');
const workingEnv = require('./routes/working-env');

const app = express();

// Body parser
app.use(express.json());

// Dev logging middleware
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Mount routers
app.use('/api/v1/workspaces', workspaces);
app.use('/api/v1/working-env', workingEnv);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.brightBlue.bold));

// Handle unhandled promise rejections
process.on('unhadledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red.italic);
    //Close server & exit process
    server.close(() => process.exit(1));
})
