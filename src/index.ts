import express, { json } from 'express';
import cors from 'cors';
import evmRoutes from './routes/evmRoutes';

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(cors());
app.use(json());
app.use('/api/evm', evmRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});