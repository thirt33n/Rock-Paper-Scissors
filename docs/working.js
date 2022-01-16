let userscore = 0;
let compscore = 0;
let user_scorespan = document.getElementById("player-score");
let computer_scorespan = document.getElementById("comp-score");
let scores_div = document.querySelector(".scores");
const result_p = document.querySelector(".result");
const words_p = document.querySelector(".new");
let rock_div = document.getElementById("rock");
let paper_div = document.getElementById("paper");
let scissors_div = document.getElementById("scissors");
let find = document.getElementById("message");
let tem;
let temp;


function refresh1()
{
    
     alert("Click ok to start new game!");
     window.location.reload();
}

function decider(userscore,compscore)
{
    if(userscore == 5)
        {
            words_p.innerHTML = "CONGRATULATIONS YOU HAVE WON!!! ";
            setTimeout(refresh1,1000);
            
        }
     if(compscore == 5)
        {
             words_p.innerHTML = "BOOO YOU LOST TO A COMPUTER!!! GAME OVER ";
             setTimeout(refresh1,1000);
            //break;
        }
}


function getcompchoice()
{
    const ch = ['r','p','s'];
    const num = (Math.floor(Math.random() *3));
    return ch[num];
}


function worder(a)
{
    if (a === "r") return "Rock";
    if (a === "s") return "Scissors";
    if (a === "p") return  "Paper";
    return 0
        
}

function wins(userchoice,compchoice,temp)
{
    if(temp != 0)
        {
            userscore = 0;
            compscore = 0;
        }
        //temp = 0;
        userscore ++;
        user_scorespan.innerHTML = userscore;
        computer_scorespan.innerHTML = compscore;
        result_p.innerHTML = "Player :  "+ worder(userchoice)+"    "+"Computer : "+worder(compchoice);
        words_p.innerHTML = "Player Wins!";
        decider(userscore,compscore);
    
    
}

function loses(userchoice,compchoice,temp)
{
    if(temp != 0)
        {
            userscore = 0;
            compscore = 0;
            
        }
        //temp = 0;
        compscore++;
        user_scorespan.innerHTML = userscore;
        computer_scorespan.innerHTML = compscore;
        result_p.innerHTML = "Player :  "+ worder(userchoice)+"    "+"Computer : "+worder(compchoice);
        words_p.innerHTML = "Computer Wins!";
        decider(userscore,compscore);
        
    
}
function draws(userchoice)
{
     user_scorespan.innerHTML = userscore;
    computer_scorespan.innerHTML = compscore;
    result_p.innerHTML = "It's A Draw";
    words_p.innerHTML = "Go Again!";
    
}


function game(userChoice,tem)
{
   const compchoice = getcompchoice();
   switch(userChoice + compchoice)
       {
           case "rs":
           case "sp":
           case "pr":
               wins(userChoice,compchoice,tem);
               break;
           case "rp":
           case "sr":
           case "ps":
               loses(userChoice,compchoice,tem);
               break;
           case "ss":
           case "rr":
           case "pp":
               draws(userChoice);
               break;
       }
    
}




function main(no)
{
    if(no == 0) 
        {
            rock_div.addEventListener('click', function() {
                game("r",no);
            })
            paper_div.addEventListener('click', function() {
                game("p",no);
            })
            scissors_div.addEventListener('click', function() {
                game("s",no);
            })
        }
    else{
        rock_div.addEventListener('click', function() {
                game("r",no);
            })
            paper_div.addEventListener('click', function() {
                game("p",no);
            })
            scissors_div.addEventListener('click', function() {
                game("s",no);
            })
    }
}
main(0);


