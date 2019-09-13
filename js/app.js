//Variables
const form = document.getElementById ('request-quote'); //AA1/ get Quote Form/Button



//Event Listeners

eventListeners ();

function eventListeners () {

document.addEventListener ('DOMContentLoaded', function (){ 
    //Create <option> for Years
    const html = new HTMLUI (); //enter this after making object
    html.displayYears () //shows the current year -- enter this after making prototype

})

//when the form is submitted (AA2)
form.addEventListener ('submit' , function (e) { 
    //When submit the form: print 1.make,2.year
    e.preventDefault ();
    const make = document.getElementById ('make').value; //BB1  what continents insurance/car made//1,2, or 3
    const year = document.getElementById ('year').value; //CC1   what year
    //Read the radio buttons (I have radio preferance on level of insurance)
    const level = document.querySelector ('input[name="level"]:checked').value; //DD1 returns what level (BASIC is checked)

    //check that all fields have something
    if (make === '' || year === '' || level === '') {
        html.displayError ('All fields are neccessary!')
    } else {
        //make the quotation//FF1
        const insurance = new Insurance (make, year, level); // enter this later after making object 
        const price = insurance.calculateQuotation (insurance);// enter this after making prototype

    }
    
})

}
//Objects+Prototypes) 

//Everything related to calculation and quotation is insurance //FF2

function Insurance (make, year, level) {
    this.make = make;
    this.year = year;
    this.level = level;
}

//Calculate the price for the current quotation
Insurance.prototype.calculateQuotation = function (insurance) {
    let price; //important variable
    const base = 2000;

    //get make
    const make = insurance.make;

    /* 1.American---will increase BASE value for 15% (1.15)
       2.Asian--- 5% (1.05)
       3.European 30% (1.35)*/

       switch (make) {
           case '1':
               price = base * 1.15;
               break;
            case '2':
               price = base * 1.05;
               break;
            case '3':
               price = base * 1.35;
               break;
       }

       //get year

        const year = insurance.year;
        const difference = this.getYearDifference (year); //enter after new prototype

        //each year cost of insurance will be 3% cheaper (thats why below I needed year difference)
       price = price - ((difference * 3) * price) / 100;  
       
       console.log (price);
    
}


//get the year difference (from this year selected--new prototype
Insurance.prototype.getYearDifference = function (year) {
           return new Date().getFullYear () - year; //current date - selected date 
}


//OBJECT-all related to HTML goes here
function HTMLUI () {}

//PROTOTYPE-displayes latest 20 years in -select 
HTMLUI.prototype.displayYears = function () {
    //max & min years
    const Max = new Date ().getFullYear (), //every year it will be updated 2020/2000/
          Min = Max-20;


    //Generate the List with latest 20 years
    const selectYear = document.getElementById ('year');

    //Print the values/Option
    for (i = Max; i >= Min; i--) {  //not from 0 but begin from  Max; end until and >= Min; i-- jer smanjuje se
        const option = document.createElement ('option');
        option.value = i //the year first printed is i/current year
        option.textContent = i; //print the current year on page
        selectYear.appendChild (option);

    }                 
}

