import uniqid from 'uniqid';

export default class List {
    constructor() {
        this.items = [];
    }

    addItem(count, unit, ingredient) {
        const item = {
            id: uniqid(),
            count,
            unit,
            ingredient
        }
        this.items.push(item);
        return item;
    }

    deleteItem (id) {
        const index = this.items.findIndex(el => el.id === id);
        // [2, 4, 8] splice(1, 2) --> return [4, 8], orignal array is [2] (splice takes start index and length as parameter)
        // [2, 4, 8] slice(1, 2) --> return 4, orignal array is [2, 4, 8] (slice takes start index and end Index as parameter)
        this.items.splice(index, 1);
    }

    updateCount(id, newCount) {
        this.items.find(el => el.id === id).count = newCount;
    }
}