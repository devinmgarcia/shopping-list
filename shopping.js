const groceryItems = [
    milk = {
        id: 1,
        name: "Milk",
        price: 1.99
    },
    eggs = {
        id: 2,
        name: "Eggs",
        price: 1.49
    },
    bananas = {
        id: 3,
        name: "Bananas",
        price: .99
    },
    bread = {
        id: 4,
        name: "Bread",
        price: 2.49
    },
    cereal = {
        id: 5,
        name: "Cereal",
        price: 3.99
    }
]

var today = new Date()

const addToShoppingList = (id, name, price) => {
    groceryItems.push(
        item = {
            id: id,
            name: name,
            price: price,
            dateCreated: Date()
        }
    )
}

addToShoppingList(6, "Coffee", 5.99);
addToShoppingList(7, "Bananas", 7.59);
addToShoppingList(8, "Apples", 8.72);
addToShoppingList(9, "Lettuce", 13.49);
addToShoppingList(10, "Yogurt", 15.99);

console.log(groceryItems);

// remember to use "of" and not "in". This is not python...
const expensiveItems = (itemList) => {
    for (item of itemList) {
        if (item.price > 8) {
            console.log(`${item.name} is ${item.price}. Do you really need to purchase this?`);
        }
    }
}

expensiveItems(groceryItems);