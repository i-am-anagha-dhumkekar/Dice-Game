alert("Welcome!!!");
var name1=prompt("What is player 1's name?");
var name2=prompt("What is player 2's name?");
var randomNumber1=Math.random();
randomNumber1=randomNumber1*6;
randomNumber1=Math.floor(randomNumber1)+1;
var image1="images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",image1);
var randomNumber2=Math.random();
randomNumber2=randomNumber2*6;
randomNumber2=Math.floor(randomNumber2)+1;
var image2="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",image2);
if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML= name1 +  " Wins";
  document.querySelectorAll("p")[0].innerHTML=name1;
  document.querySelectorAll("p")[1].innerHTML=name2;
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML=name2+" Wins";
  document.querySelectorAll("p")[0].innerHTML=name1;
  document.querySelectorAll("p")[1].innerHTML=name2;
}
else{
  document.querySelector("h1").innerHTML="Its a Tie!";
  document.querySelectorAll("p")[0].innerHTML=name1;
  document.querySelectorAll("p")[1].innerHTML=name2;
}
