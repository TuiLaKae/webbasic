const itemBox = document.querySelector('div.ui.grid');

const item = [
    {
        name: 'kiet',
    },
    {
        name: 'vi',
    },
    {
        name: 'luan',
    },
    {
        name: 'vinh1',

    },
    {
        name: 'vinh2',

    },
];

function addItem(items) {
    const item1 = document.createElement('div');
    item1.className = 'four wide column';
    item1.innerText = items.name;
    itemBox.appendChild(item1);
}
addItem(item[0]);
addItem(item[1]);
addItem(item[2]);
addItem(item[3]);
addItem(item[4]);
