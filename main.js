//Read off data.txt to fill these.
class Item {
    constructor(link, name, description, tags, price, quantity) {
        //Data for search/sort + relative image link
        this.imagesrc = link;
        this.tags = tags;

        //Additional data for user display
        this.name = name;
        this.desc = description;
        this.price = price;
        this.quantity = quantity;
    }
}

class InventoryHandler {
    constructor() {
        this.inventory = [];
        this.tags = [];
    }
    addItem(item) {
        this.inventory.push(item);
    }
    removeItem(item) {
        let index = this.inventory.indexOf(item);
        if (index > -1) {
            this.inventory.splice(index, 1);
        }
    }

    async initializeInventory() {
        fetch("https://github.com/FourWheelDrive/Project-Arcturus/blob/main/data.txt")
        .then((res) => console.log(res))

        /*
        fetch("C:\\Users\\jeffe\\OneDrive\\Documents\\Project Arcturus\\data.txt")
            .then((res) => res.text())
            .then((n) => {
                console.log(n);
            })
            .catch((err) => {console.log(err)})
        */
    }
}

//Onload function. Pull from data.txt to initialize items.
async function initializePage() {
    var inventory = new InventoryHandler();
    inventory.initializeInventory();
}