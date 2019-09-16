//Variables
const form = document.getElementById ('request-quote'); //AA1/ get Quote Form/Button



//Event Listeners

eventListeners ();

function eventListeners () {

    document.addEventListener ('DOMContentLoaded', function (){ 
    //Create <option> for Years
    const html = new HTMLUI (); //enter this after making object
    html.displayYears (); //shows the current year -- enter this after making prototype

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
        const html = new HTMLUI ();
        //Print the result from HTMLUI object
        html.showResults (price, insurance);

    }
    
    });

}
//Objects+Prototypes) 

//Everything related to calculation and quotation is insurance //FF2

function Insurance (make, year, level) { //interpret const insurance = new Insurace (make, year, level) as .this -currently selected//make,year,level value already exists
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
        const difference = this.getYearDifference (year); //enter after new prototype//this is used here because its outside insurance (this.)

        //each year cost of insurance will be 3% cheaper (thats why below I needed year difference)
       price = price - ((difference * 3) * price) / 100;  
       
       //check the level of insurance
       const level = insurance.level;

       price = this.calculateLevel (price, level);  //this is used here because its outside insurance (this.)


       return price; //Finally after all prototypes return price;
    
}


//get the year difference (from this year selected--new prototype
Insurance.prototype.getYearDifference = function (year) {
           return new Date().getFullYear () - year; //current date - selected date 
}

//Adds the value based on level of insurance
Insurance.prototype.calculateLevel = function (price, level) { //BASIC-will increase value 30%/ COMPLETE-for 50%
    if (level === 'Basic') {
        price = price * 1.30;
    } else {
        price = price * 1.50;
    }
    return price;
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

//Print the result in HTML

HTMLUI.prototype.showResults = function (price, insurance) {
        //print the result
        const result = document.getElementById ('result');
        //create a div wuth a result
        const div = document.createElement ('div'); //a block for injecting html

        //I want other info printed:make; //Get make from object and assign names//returbs 1,2,3-I want to be written
        let make = insurance.make 
        
        switch (make) {
            case '1':
                make='American';
                break;
            case '2':
                make='Asian';
                break;
            case '3':
                make='European';
                break;
        }

        
        console.log (make);
    

        //insert the result
        div.innerHTML = `
                        <p class="header">Summary</p>
                        <p>Make: ${make}</p>
                        <p>Year: ${insurance.year}</p>
                        <p>Level: ${insurance.level}</p>
                        <p class="total">Total: ${price}</p>


        `
        // Insert this into htnml
        result.appendChild (div);

            
    

}