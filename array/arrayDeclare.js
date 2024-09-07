var cities = ["Atlanta", "Baltimore", "Chicago", "Denver", "Los Angeles", "Seattle"];

for (i = 0; i <= cities.length; i++) {
    console.log("City " + i + ": " + cities[i])
}

var sentence = ["These" ,"mind", "boggling", "things", "are", "too", "one", "of", "the", 7, "wonders", "of", "the", "world", "."]
console.log(sentence.join(" "))

// The same naming rules you learned for ordinary variables apply. Only letters, numbers, $ and _ are legal. 
// The first character can't be a number. No spaces.
var code$ = [1, 2, 3, 4]
console.log(code$)

var name_log = ["a", "b", "c", "d", "e"]
console.log(name_log)

code$ = []
console.log(code$)

pets = [];
pets[0] = "rabbit";
pets[1] = "squirrel";
pets[2] = "parrot";
pets[3] = "dog";
pets[4] = "cats";

console.log(pets)
console.log(pets[5])
pets[5] = "peacock";
console.log(pets);
pets.pop();     // removes the last element
pets.pop();
console.log(pets)
pets.push("fish", "snake");     // pushes the elements at the last of the array
console.log(pets)
pets.push("ferret");
console.log(pets);
pets.shift("peacock");      // removes the first element of the array
pets.unshift("duck", "butterfly");      // adds elements to the start of array
console.log(pets)
// add elements to any place in the array
// first 3: position to insert
// second: how many elements to remove
pets.splice(3, 3, "plants", "crocs", "pig", "emu", "lizard");
console.log(pets)
// removes no element
pets.splice(4, 0, "dragon fly", "cows", "chamelion")
console.log(pets);
// slicing
var newPetsGroup = pets.slice(4,8);
console.log(newPetsGroup)