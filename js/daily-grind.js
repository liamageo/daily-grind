//alert("It's working!");

/*
    One unique image, with appropriate and matching content in the alt tag.  

    A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)

    A unique color that supports the image and paragraph of content


    Here are the items we need to change for each coffee:

    image - src of pic
    alt - alt tag of pic
    description - a paragraph of content about the coffee
    name - a name of today's coffee
    color - a color representing the coffee
    
    We may also use the following, but not part of the coffee itself
    
    today - the current day of the week

*/
function coffeeTemplate(coffee){
    let myReturn = "";

// load w/ data using += (the append operator). MUST use back ticks
    myReturn += 
    `
        <p>
             <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
             <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name}</strong>
             <br>
             ${coffee.desc}
        </p>
    `;
    return myReturn;
}

let myDate = new Date();
let myDay = myDate.getDay();
let coffee = "";


//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate querystring parameters
const urlParams = new URLSearchParams(queryString);


if(urlParams.has("day")){//data on querystring, load from querystring
    myDay = urlParams.get("day");
}

// converts to integer a sit's a string from querystring
myDay = parseInt(myDay);

switch(myDay) {

    case 0:
        today = "Sunday";
        coffee = {
            color: "yellow",
            name: "Cold Brew",
            pic: "images/cold-brew.jpg",
            alt: "A picture of Cold Brew",
            day: "Sunday",
            desc: `Sizes: 12oz - 32oz`
        };
      
      break;
    
      case 1:
        today = "Monday";
        coffee = {
            color: "orange",
            name: "Drip",
            pic: "images/drip.jpg",
            alt: "A picture of Drip coffee",
            day: "Monday",
            desc: `Sizes: 12oz | Hot ONLY`
        };

      break;

      case 2:
        today = "Tuesday";
        coffee = {
            color: "red",
            name: "Frappaccino",
            pic: "images/frappaccino.jpg",
            alt: "A picture of a Frappaccino",
            day: "Tuesday",
            desc: `Sizes: 12oz - 32oz | All drinks are blended 
            <br>
            Flavors: Vanilla bean, Strawberry, Matcha, Caramel, Mocha Chip`
        };
      break;
   
      case 3:
        today = "Wednesday";
    // word, colon, other word, comma
        coffee = {
            color: "green",
            name: "Bubble Tea",
            pic: "images/bubble-tea.jpg",
            alt: "A picture of a Bubble Tea",
            day: "Wednesday",
            desc: `Sizes: 12oz - 32oz | Hot, iced, or blended 
            <br>
            Flavors Available: Taro, Milk Tea, Honeydew, Strawberry, Thai Tea, and Mango` 
        };
        
        break;

        case 4:
          today = "Thursday";
        // word, colon, other word, comma
          coffee = {
             color: "brown",
             name: "Mocha",
             pic: "images/mocha.jpg",
             alt: "A picture of a Mocha",
             day: "Thursday",
             desc: `Sizes: 12oz - 32oz | Hot, iced, or blended` 
        };
    
        break;
        
        case 5:
            today = "Friday";
            coffee = {
                color: "pink",
                name: "caramel latte",
                pic: "images/caramel-latte.jpg",
                alt: "A picture of Caramel Latte",
                day: "Friday",
                desc: `Sizes: 12oz - 32oz | Hot, iced, or blended`
            };
        
        break;

        case 6:
            today = "Saturday";
            coffee = {
                color: "black",
                name: "Pumpkin Spice Latte",
                pic: "images/pumpkin-spice-latte.jpg",
                alt: "A picture of a Pumpkin Spice Latte",
                day: "Saturday",
                desc: `Sizes: 12oz - 32oz | Hot, iced, or blended`
        };
        
        break;


      default:
        today = "Something went wrong!";   
}
        
// let coffeeData = coffeeTemplate(coffee);
// alert(coffeeData);

// load coffee data to page
document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);

document.querySelector("html").style.backgroundColor = coffee.color;

// console.log(coffee);
