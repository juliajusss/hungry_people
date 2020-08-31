let menu = {
    pizza: [
        {
            title: 'Margherita',
            price: '55,68',
            description: 'Mozzarella, tomato, oil and basil'
        },
        {
            title: 'Marinara',
            price: '55,68',
            description: 'Tomato, garlic, oregano and oil'
        },
        {
            title: 'Prosciutto e funghi',
            price: '55,68',
            description: 'Ham and mushrooms'
        },
        {
            title: 'Quattro Stagioni',
            price: '55,68',
            description: 'Cooked ham, mushrooms, artichokes and black olives'
        },
        {
            title: 'Capricciosa',
            price: '55,68',
            description: 'Ham, mushrooms, olives, tomato sauce and mozzarella'
        },
        {
            title: 'Quattro Formaggi',
            price: '55,68',
            description: 'Provolone, parmigiano, mozzarella, fontina or gorgonzola'
        },
        {
            title: 'Ortolana/Vegetariana',
            price: '55,68',
            description: 'Mozzarella, tomato, peppers, aubergines'
        },
        {
            title: 'Diavola',
            price: '55,68',
            description: 'The main ingredient here is spicy salami'
        },
        {
            title: 'Boscaiola',
            price: '55,68',
            description: 'Mushrooms, slices of sausage and mozzarella'
        },
        {
            title: 'Frutti di Mare',
            price: '55,68',
            description: 'Tomato and mozzarella, seafood'
        },
        {
            title: 'Quattro Stagioni',
            price: '55,68',
            description: 'Cooked ham, mushrooms, artichokes and black olives'
        },
        {
            title: 'Capricciosa',
            price: '55,68',
            description: 'Ham, mushrooms, olives, tomato sauce and mozzarella'
        },
        {
            title: 'Quattro Formaggi',
            price: '55,68',
            description: 'Provolone, parmigiano, mozzarella, fontina or gorgonzola'
        },
        {
            title: 'Ortolana/Vegetariana',
            price: '55,68',
            description: 'Mozzarella, tomato, peppers, aubergines'
        },
        {
            title: 'Margherita',
            price: '55,68',
            description: 'Mozzarella, tomato, oil and basil'
        },
        {
            title: 'Marinara',
            price: '55,68',
            description: 'Tomato, garlic, oregano and oil'
        },
        {
            title: 'Prosciutto e funghi',
            price: '55,68',
            description: 'Ham and mushrooms'
        },
        {
            title: 'Quattro Stagioni',
            price: '55,68',
            description: 'Cooked ham, mushrooms, artichokes and black olives'
        },
        {
            title: 'Capricciosa',
            price: '55,68',
            description: 'Ham, mushrooms, olives, tomato sauce and mozzarella'
        },
        {
            title: 'Quattro Formaggi',
            price: '55,68',
            description: 'Provolone, parmigiano, mozzarella, fontina or gorgonzola'
        },
        {
            title: 'Ortolana/Vegetariana',
            price: '55,68',
            description: 'Mozzarella, tomato, peppers, aubergines'
        },
    ],
    soup: [
        {
            title: 'Meatball Soup',
            price: '55,68',
            description: 'Beef broth, italian-style meatballs, vegetables'
        },
        {
            title: 'Avocado soup',
            price: '55,68',
            description: 'With chicken and lime'
        },
        {
            title: 'Pho Ga Soup',
            price: '55,68',
            description: 'Vietnamese chicken noodle soup'
        },
        {
            title: 'Creamy chicken and rice',
            price: '55,68',
            description: 'A supremely filling, hearty soup.'
        },
        {
            title: 'Avocado soup',
            price: '55,68',
            description: 'With chicken and lime'
        },
        {
            title: 'Pho Ga Soup',
            price: '55,68',
            description: 'Vietnamese chicken noodle soup'
        },
        {
            title: 'Creamy chicken and rice',
            price: '55,68',
            description: 'A supremely filling, hearty soup.'
        },
    ],
    pasta: [
        {
            title: 'PASTA . . . .',
            price: '55,68',
            description: 'Integer ullamcorper neque eu purus euismod'
        },
    ],
    desert: [
        {
            title: 'DESERT . . . .',
            price: '55,68',
            description: 'Integer ullamcorper neque eu purus euismod'
        },
    ],
    wine: [
        {
            title: 'RED WINE . . . .',
            price: '55,68',
            description: 'Integer ullamcorper neque eu purus euismod'
        },
    ],
    beer: [
        {
            title: 'GUINNESS . . . .',
            price: '55,68',
            description: 'Integer ullamcorper neque eu purus euismod'
        },
    ],
    drinks: [
        {
            title: 'COFFEE . . . .',
            price: '55,68',
            description: 'Integer ullamcorper neque eu purus euismod'
        },
    ],
}

// const createEl = (tagName, className) => {
//     let e = document.createElement(tagName);
//     e.className = className;
//     return e;
// }


// const createPosition = (array) => {
//     let pos = createEl('div', 'menu__position');
//     let posName = createEl('div', 'position_name');
//     posName.innerHTML = array.title;
//     let posPrice = createEl('div', 'position_price');
//     posPrice.innerHTML = array.price + ' USD';
//     let posDesc = createEl('div', 'position_description');
//     posDesc.innerHTML = array.description;
//     pos.append(posName);
//     pos.append(posPrice);
//     pos.append(posDesc);
//     return pos;
// }

// const createItem = (array, tab) => {
//     let firstCol = createEl('div', `menu__content_item`);
//     let secondCol = createEl('div', `menu__content_item`);
//     let thirdCol = createEl('div', `menu__content_item`);
//     if (menu.array === tab) {
//         for (let i = 0; i < 7; i++) {
//                     firstCol.append(createPosition(menu.pizza[i]));
//                 }
//                 for (let i = 7; i < 14; i++) {
//                     secondCol.append(createPosition(menu.pizza[i]));
//                 }
//                 for (let i = 14; i < 21; i++) {
//                     thirdCol.append(createPosition(menu.pizza[i]));
//                 }
//     }
// }
