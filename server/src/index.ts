import express from 'express';
import cors from 'cors';

import transactionRoutes from './routes/transactionRoutes';

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use('/transaction', transactionRoutes);

app.listen(3000, () => {
    console.log('Server has started on port 8080');
});
