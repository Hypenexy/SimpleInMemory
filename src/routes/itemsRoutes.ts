import { Router } from 'express';
import { ItemsController } from '../controllers/itemsController';

const router = Router();
const itemsController = new ItemsController();

export function setItemsRoutes(app: Router) {
    app.get('/items', (req, res) => {
        const items = itemsController.getItems();
        res.status(200).json(items);
    });
    app.post('/items', (req, res) => {
        const { name, description } = req.body;
        // console.log('Received request to create item:', req.body);
        const item = itemsController.createItem(name, description);
        res.status(201).json(item);
    });
}