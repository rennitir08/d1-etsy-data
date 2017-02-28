// Show me how to calculate the average price of all items. Please console.log the average.
var total = 0;

items.forEach(getPrices);

function getPrices(items) {
    total += items.price;
}
console.log('The average price is' + '' + '$' + Math.round(total /items.length) * 100/100);
// Show me how to get an array of items that cost between $14.00 and $18.00 USD
var cheapItems = items.filter(function(item) {
    return item.price >= 14 && item.price <= 18 && item.currency_code === 'USD'
})
console.log(cheapItems);

// Show me how find the item with a "GBP" currency code and print its name and price. Please console.log the one you find.

var britishItems = items.filter(function(item) {
    return item.currency_code === 'GBP'
})
console.log(britishItems);
// Show me how to find which items are made of wood. Please console.log the ones you find.

var woodItems = items.filter(function(item) {
    return item.materials.indexOf('wood');
})
console.log(woodItems);
// Show me how to find which items are made of eight or more materials. Please console.log the ones you find.
var eightOrMoreMaterials = items.filter(function(item) {
    return(item.materials.length >= 8);
});

eightOrMoreMaterials.forEach(function(item) {
    console.log(item.title + item.materials); 
    })
// Show me how to calculate how many items were made by their sellers
var searchWho = 'i_did'
var totalSold = items.filter(function(item) {
    return item.who_made.includes(searchWho);
}).length;

console.log(totalSold + ' ' + 'were made by their sellers');
