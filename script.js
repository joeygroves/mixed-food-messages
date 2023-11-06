// mixed-food-messages

const randomNumber = nums => {
    return Math.floor(Math.random() * nums);
}

const foodObject = {
    time: ['breakfast', 'brunch', 'lunch', 'dinner'],
    spice: ['sweet', 'sour', 'salty', 'spicy', 'bitter'],
    food: ['pizza', 'pasta', 'soup', 'burger', 'salad','sushi']
}

let weirdMixFood = [];
  
for (let prop in foodObject) {
    let randIndex = randomNumber(foodObject[prop].length);

    switch(prop) {
        case 'time':
            weirdMixFood.push(`For '${foodObject[prop][randIndex]}',`)
            break
        case 'spice':
            weirdMixFood.push(` you should make a '${foodObject[prop][randIndex]}' version`)
            break
        case 'food':
            weirdMixFood.push(` of '${foodObject[prop][randIndex]}'.`)
            break
        default:
            weirdMixFood.push("There's not enough information.");
    }
}
  
const formatWeirdFood = weirdFood => {
    const formatted = weirdMixFood.join('');
    console.log(formatted);
}

console.log('Mixed Food Messages - What should I eat today? \n')
formatWeirdFood(weirdMixFood);
