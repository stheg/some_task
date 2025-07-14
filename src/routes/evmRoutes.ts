import express from 'express';

const router = express.Router();

router.get('/info', async (req, res) => {
    try {
        res.json({ test: 'test' });
    } catch (e: any) {
        res.json({ error: e.message })
    }
});

export default router;