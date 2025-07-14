import express from 'express';
import { fetchTokenInfo } from './evmToken/fetchInfo';

const router = express.Router();

router.get('/info', async (req, res) => {
    try {
        const { tokenAddress } = req.query;
        if (!tokenAddress)
            throw new Error('tokenAddress is required');

        const info = await fetchTokenInfo(tokenAddress?.toString());
        res.json({ info });
    } catch (e: any) {
        res.json({ error: e.message })
    }
});

export default router;