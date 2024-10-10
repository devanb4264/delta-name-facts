//$ jquery land
//beast descriptions

let phoenixDesc = "The Phoenix is a renowned mythical animal from the Greek and Roman legends. This mythical bird is recognized for its beauty as its immortality and has a blazing plumage of colors – red, orange, yellow, and gold, that symbolize the fire element. It symbolizes eternal life, transformation, death, and rebirth in its fire. It is believed that when a Phoenix dies in its fire, it will rise again from the ashes soon.";
let minotaurDesc = "The Minotaur is a mythical creature from classical Greek mythology. It has been portrayed with the head and tail of a bull and the body of a man. The Minotauros or the Minotaur was a bull-headed monster born to Queen Pasiphae and Minos of Krete. It was the offspring of Pasiphae and a bull sent to Minos by the god Poseidon for sacrifice. The creature resided in a twisting maze underground where it was offered a regular sacrifice of young people to satisfy its perpetual hunger.";
let krakenDesc = "The Kraken is a legendary sea monster that looked like a giant squid. Its story originated from Scandinavian folklore, where the Kraken takes the shape of a number 8 which is the symbol for infinity when drawn on its back. This represents a life without end and it is also thought to be a sacred animal. The Kraken attacked and harassed ships with its strong arms. It was said to haunt the seas from Norway through Iceland and Greenland, as per Nordic folklore. It was a horrifying creature that had starfish-like suckers.";
let cerberusDesc = "According to Greek mythology, Cerberus is also known as the hound of Hades which is a multi-headed dog who was deployed as the guards gates of the Underworld to prevent the dead from leaving. It is believed that Cerberus was the offspring of the monsters Echidna and Typhon and appearance can be described with three heads, a tail, and snakes protruding from multiple parts of his body."
let unicornDesc = "The unicorn is a legendary creature that has kept children and adults in awe for ages. It has been described as a pure white magical horse with a single, pointed, spiral horn projecting from its forehead. This mystical horse is hard to catch and a very rare find and legend have it that people with an absolutely pure heart can only see it. This mythical creature had the power to render poisoned water potable, heal sickness, and has magical powers.";

//beast finder function
function mythBeast(name){
    nameValue = (name.length * name.charCodeAt(0)) % 5;

    return nameValue;
}

$( document ).ready(function() {

    $("#submit").click(function(){
        let name = $('#name').val();
        let beast = mythBeast(name);
        console.log("nameValue is " + beast);

        switch(beast){
            case 0:
                $("#beastTitle").text(name + "'s beast is the Phoenix!");
                $("#beastDesc").text(phoenixDesc);
                break;
            case 1:
                $("#beastTitle").text(name + "'s beast is the Minotaur!");
                $("#beastDesc").text(minotaurDesc);
                break;
            case 2:
                //cycle start point for single letter
                $("#beastTitle").text(name + "'s beast is the Kraken!");
                $("#beastDesc").text(krakenDesc);
                break;
            case 3:
                $("#beastTitle").text(name + "'s beast is Cerberus!");
                $("#beastDesc").text(cerberusDesc);
                break;
            case 4:
                $("#beastTitle").text(name + "'s beast is the Unicorn!");
                $("#beastDesc").text(unicornDesc);
                break;
            default:
                console.log("no beast found");
        }
    });

});