import { v6 as uuidv6 } from 'uuid';

export class ItemsController {
    private items: { id: string; name: string; description: string }[] = [];
    // private currentId: number = 1;

    public createItem(name: string, description: string) {
        if (typeof name !== 'string' || name.trim().length === 0) {
            throw new Error('Item name is required and must be a non-empty string.');
        }
        
        const newItem = { id: uuidv6(), name, description };
        this.items.push(newItem);
        return newItem;
    }

    public getItems() {
        return this.items;
    }

    public getItemById(id: string) {
        return this.items.find(item => item.id === id);
    }

    public updateItem(id: string, name: string, description: string) {
        const itemIndex = this.items.findIndex(item => item.id === id);
        if (itemIndex !== -1) {
            this.items[itemIndex] = { id, name, description };
            return this.items[itemIndex];
        }
        return null;
    }

    public deleteItem(id: string) {
        const itemIndex = this.items.findIndex(item => item.id === id);
        if (itemIndex !== -1) {
            const deletedItem = this.items[itemIndex];
            this.items.splice(itemIndex, 1);
            return deletedItem;
        }
        return null;
    }

    // public hasUniqueIdentifiers(): boolean {
    //     const ids = new Set(this.items.map(item => item.id));
    //     return ids.size === this.items.length;
    // }
    
    // public allItemsHaveName(): boolean {
    //     return this.items.every(item => typeof item.name === 'string' && item.name.trim().length > 0);
    // }
}
