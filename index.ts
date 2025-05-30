import express from 'express';
import { setItemsRoutes } from './routes/itemsRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

setItemsRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});