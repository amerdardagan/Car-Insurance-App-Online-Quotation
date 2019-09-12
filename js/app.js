//Variables
const form = document.getElementById ('request-quote'); //AA1/ get Quote Form/Button



//Event Listeners

eventListeners ();

function eventListeners () {

document.addEventListener ('DOMContentLoaded', function (){ 
    //Create <option> for Years
    const html = new HTMLUI ();
    html.displayYears () //shows the current year

})

//when the form is submitted (AA2)
form.addEventListener ('submit' , function (e) { 
    //When i submit the form: print 1.make,2.year
    e.preventDefault ();
    const make = document.getElementById ('make').value; //BB1  what continents insurance/car made//1,2, or 3
    const year = document.getElementById ('year').value; //CC1   what year
    //Read the radio buttons (I have radio preferance on level of insurance)
    const level = document.querySelector ('input[name="level"]:checked').value; //DD1 returns what level (BASIC or ADVANCEDis checked

    //check that all fields have something
    if (make === '' || year === '' || level === '') {
        console.log ('Error');
    } else {
        console.log ('Alright')
    }



    console.log (make);
    console.log (year);

})

}



//Objects+Prototypes) 

//OBJECT-all related to HTML goes here
function HTMLUI () {}

//PROTOTYPE-displayes latest 20 years in -select 
HTMLUI.prototype.displayYears = function () {
    //max & min years
    const Max = new Date ().getFullYear (), //every year it will be updated 2020/2000/
          Min = Max-20;


    //Generate the List with latest 20 years
    const selectYear = document.getElementById ('year');

    //Print the values
    for (i = Max; i >= Min; i--) {  //not from 0 but begin from  Max; end until and >= Min; i-- jer smanjuje se
        const option = document.createElement ('option');
        option.value = i //the current year
        option.textContent = i;
        selectYear.appendChild (option);

    }                 
}

