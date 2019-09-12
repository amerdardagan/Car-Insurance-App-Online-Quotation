//Variables




//Event Listeners
document.addEventListener ('DOMContentLoaded', function (){
    //Create <option> for Years
    const html = new HTMLUI ();
    html.displayYears () //shows the current year


})



//Objects (Prototypes) 

//OBJECT-all related to HTML goes here
function HTMLUI () {}

//PROTOTYPE-displayes latest 20 years in -select 
HTMLUI.prototype.displayYears = function () {
    //max & min years
    const Max = new Date ().getFullYear (), //every year it will be updated 2020/2000/
          Min = Max-20;

    console.log (Min);

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