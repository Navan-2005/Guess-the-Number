let randomNumber =parseInt(Math.random()*100+1);
const submit=document.querySelector('#subt');
const userinput=document.querySelector('#guessfield');
const guessSlot=document.querySelector('.Guesses');
const remaining =document.querySelector('.lastresult');
const startOver  =document.querySelector('.result');
const lowOrhi  =document.querySelector('.loworhig');

const p=document.createElement('p');

let prev=[];
let numofguess=1;
let playgame=true;

if(playgame)
{
    submit.addEventListener('click',function(e)
    {
       e.preventDefault();
       const guess=parseInt(userinput.value);
       validateguess(guess);
    })
}
function validateguess(guess)
{
   if(isNaN(guess))
   {
    alert(`Please Enter a valid NUmber `);
   }
   else if(guess<1)
    alert(`Enter Number Greater than one `);
   else if(guess>100)
    alert(`Enter Number smaller than hundred`);
   else{
     prev.push(guess);
     if(numofguess>10)
     {
        displayguess(guess);
        displayMessage(`Game over Random Number was ${randomNumber}`);
        endgame();
     }
     else{
        displayguess(guess);
        checkguess(guess);
     }
   }
   
}
function checkguess(guess)
{
   if(guess==randomNumber){
    displayMessage(`You guessed it right`);
    endgame();
   }
   else if(guess<randomNumber) displayMessage(`Your Number is lower`);
   else displayMessage(`Your Number is larger`);
}
function displayguess(guess)
{
   userinput.value='';
   guessSlot.innerHTML+=`${guess} , `;
   numofguess++;
   remaining.innerHTML=`${11-numofguess}`;
}
function displayMessage(message)
{
    lowOrhi.innerHTML=`<h2>${message}</h2>`;
}
function endgame()
{
    userinput.value='';
    userinput.setAttribute('disabled','')
    p.classList.add('botton')
    p.innerHTML=`<h2 id ="newgame">Start new game </h2>`;
    startOver.appendChild(p);
    playgame=false;
    newgame();
}
function newgame()
{
   const newgameButton = document.querySelector('#newgame')
   newgameButton.addEventListener('click',function(e){
    randomNumber =parseInt(Math.random()*100+1);
    prev=[];
   numofguess=1;

   guessSlot.innerHTML='';
   remaining.innerHTML=`${12-numofguess}`;
   userinput.removeAttribute('disabled')
   startOver.removeChild(p)
   playgame=true;
   

   })
}