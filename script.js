

let startButton = document.querySelector("#startgamebutton")
let startPage = document.querySelector(".story-opening")
let opening = document.querySelector(".contextscreen")
let openingNext = document.querySelector(".openingbtn")
let pageOne = document.querySelector(".option-one-screen")
let alexG= document.querySelector("#alexG")
let alexB= document.querySelector("#alexB")
let characterButton = document.querySelector(".characterbtnf")
let characterButtonB = document.querySelector(".characterbtnb")
let nextButton = document.querySelector(".bn")
let pageTwo = document.querySelector(".option-two-screen")
let pageThree = document.querySelector(".option-three-screen")
let next2 = document.querySelector("#pagetwobtn")
let option1 = document.querySelector("#option1")
let option2 = document.querySelector("#option2")
let pageFour = document.querySelector(".option-four-screen")
let next4 = document.querySelector("#pagefourbtn")
let pageFive = document.querySelector(".screen5")
let pageSix = document.querySelector(".screen6")
let pageSeven = document.querySelector(".screen7")
let pageEight = document.querySelector(".screen8")
let pageNine = document.querySelector(".screen9")
let pageTen = document.querySelector(".screen10")
let pageEleven = document.querySelector(".screen11")
let next6 = document.querySelector("#pagesixbtn")
let next10 = document.querySelector("#pagetenbtn")
let pageTwelve = document.querySelector(".screen12")
let pageThriteen = document.querySelector(".screen13")
let pageFourteen = document.querySelector(".screen14")
let pageFifteen = document.querySelector(".screen15")
let pageSixteen = document.querySelector(".screen16")
let pageSeventeen = document.querySelector(".screen17")
let pageEighteen = document.querySelector(".screen18")
let pageNineteen = document.querySelector(".screen19")
let page20 = document.querySelector(".screen20")
let page21 = document.querySelector(".screen21")
let page22 = document.querySelector(".screen22")
let page23 = document.querySelector(".screen23")
let page24 = document.querySelector(".screen24")
let page25 = document.querySelector(".screen25")
let page26 = document.querySelector(".screen26")
let page27 = document.querySelector(".screen27")
let page28 = document.querySelector(".screen28")
let page29 = document.querySelector(".screen29")
let page30 = document.querySelector(".screen30")
let page31 = document.querySelector(".screen31")
let page32 = document.querySelector(".screen32")
let page33 = document.querySelector(".screen33")
let page34 = document.querySelector(".screen34");
let page35 = document.querySelector(".screen35");
let page36 = document.querySelector(".screen36");
let page37 = document.querySelector(".screen37");
let page38 = document.querySelector(".screen38");
let page39 = document.querySelector(".screen39");
let page40 = document.querySelector(".screen40");
let next11 = document.querySelector("#page11btn")
let next12 = document.querySelector("#page12btn")
let next13 = document.querySelector("#page13btn")
let next14 = document.querySelector("#page14btn")
let next15 = document.querySelector("#page15btn")
let next16 = document.querySelector("#page16btn")
let next17 = document.querySelector("#page17btn")
let next18 = document.querySelector("#page18btn");
let next19 = document.querySelector("#page19btn");
let next20 = document.querySelector("#page20btn");
let next21 = document.querySelector("#page21btn");
let next22 = document.querySelector("#page22btn");
let next23 = document.querySelector("#page23btn");
let next24 = document.querySelector("#page24btn");
let next25 = document.querySelector("#page25btn");
let next26 = document.querySelector("#page26btn");
let next27 = document.querySelector("#page27btn");
let next28 = document.querySelector("#page28btn");
let next29 = document.querySelector("#page29btn");
let next30 = document.querySelector("#page30btn");
let next31 = document.querySelector("#page31btn");
let next32 = document.querySelector("#page32btn");
let next33 = document.querySelector("#page33btn");
let next34 = document.querySelector("#page34btn");
let next35 = document.querySelector("#page35btn");
let next5 = document.querySelector("#page5btn")
let next7 = document.querySelector("#page7btn")
let next8 = document.querySelector("#page8btn")
let next9 = document.querySelector("#page9btn")
let interested = document.querySelector("#Interested")
let skeptical = document.querySelector("#Skeptical")
let refuse = document.querySelector("#Refuse")


startButton.addEventListener('click', function(){
  startPage.style.display= "none"
  opening.style.display= "inline-block"
  });

  openingNext.addEventListener('click', function(){
    opening.style.display= "none"
    pageOne.style.display= "inline-block"
    });

    let characterIcons = {
      main: ['characters/AlexG-default.png', 'characters/AlexB-default.png'],
      angry: ['characters/Alex-angry.png', 'characters/AlexB-default.png'],
      happy: ['characters/Alex-happy.png', 'characters/AlexB-default.png'],
      sad: ['characters/Alex-sad.png', 'characters/AlexB-default.png'],
      defensive: ['characters/Alex-serious.png', 'characters/AlexB-default.png'],
      worried: ['characters/Alex-worriedlipchew.png', 'characters/AlexB-default.png'],
      concerned: ['characters/AlexG-concerned.png', 'characters/AlexB-default.png'],
      shocked: ['characters/Alex-shocked.png', 'characters/AlexB-default.png'],
      sorry: ['characters/Alex-sorrymouthsmile.png', 'characters/AlexB-default.png'],
      unamused: ['characters/Alex-unamused.png', 'characters/AlexB-default.png'],
      grin: ['characters/Alex-evilgrin.png', 'characters/AlexB-default.png'],
      bored: ['characters/Alex-bored.png', 'characters/AlexB-default.png'],
      conflicted: ['characters/Alex-conflicted.png', 'characters/AlexB-default.png'],
      skeptical: ['characters/alex-skeptical.png', 'characters/AlexB-default.png'],
      happyq: ['characters/Alex-happyquestion.png', 'characters/AlexB-default.png'],
      deciding: ['characters/Alex-deciding.png', 'characters/AlexB-default.png']
    };
   
let characterIndex = 0;
let currentEmotion = 'main'; 


let characters = document.querySelector('.characters')
let characterprof3 = document.querySelector('.characterprof3')
let characterprof2n6 = document.querySelector('.characterprof2n6')
let characterprof4 = document.querySelector('.characterprof4')
let prof5 = document.querySelector('.prof5')
let characterprof6 = document.querySelectorAll('.characterprof6')
let nonspeaking = document.querySelectorAll('.nonspeaking')
 
function updateCharacter(){
  
  characters.src = characterIcons[currentEmotion][characterIndex];
  characterprof3.src = characterIcons[currentEmotion][characterIndex];
  characterprof2n6.src = characterIcons[currentEmotion][characterIndex];
  characterprof4.src = characterIcons[currentEmotion][characterIndex];
  prof5.src = characterIcons[currentEmotion][characterIndex];
  characterprof6.forEach(function(char) {
    char.src = characterIcons[currentEmotion][characterIndex];
  });
  nonspeaking.forEach(function(char) {
    char.src = characterIcons[currentEmotion][characterIndex];
  });
}

document.querySelector('#startgamebutton').addEventListener('click', function() {
  characterIndex = 0;
  currentEmotion = 'main'; 
  console.log(characterIndex);
  updateCharacter();
});

 
document.querySelector('.characterbtnb').addEventListener('click', function(){
  if (characterIndex> 0) {
    characterIndex= (characterIndex - 1 );
    console.log(characterIndex)
    updateCharacter();
  }
})
document.querySelector('.characterbtnf').addEventListener('click', function(){
  if (characterIndex < characterIcons[currentEmotion].length - 1) { 
    characterIndex = characterIndex + 1;
    console.log(characterIndex);
    updateCharacter();
  } 
});


function setCharacterEmotion(emotion) {
  currentEmotion = emotion;
  updateCharacter();
}

nextButton.addEventListener("click", function (){
  pageOne.style.display= "none"
pageTwo.style.display= "inline-block"
});

  
 next2.addEventListener('click', function(){
   pageTwo.style.display= "none"
   pageThree.style.display= "inline-block"
   setCharacterEmotion("bored")
   });
   
   option1.addEventListener('click', function(){
     pageThree.style.display= "none"
     pageFour.style.display= "inline-block"
     setCharacterEmotion("main")
     });

     option2.addEventListener('click', function(){
      pageThree.style.display= "none"
      pageFive.style.display= "inline-block"
      setCharacterEmotion("happy")
      });
    
     next4.addEventListener('click', function(){
     pageFour.style.display= "none"
     pageSix.style.display= "inline-block"
     setCharacterEmotion("main")
   });
   
     next6.addEventListener('click', function(){
       pageSix.style.display= "none"
       pageTen.style.display= "inline-block"
       setCharacterEmotion("happy")
   });

   next5.addEventListener('click', function(){
    pageFive.style.display= "none"
   pageSeven.style.display= "inline-block"
   setCharacterEmotion("main")
   });

   next7.addEventListener('click', function(){
    pageSeven.style.display= "none"
   pageEight.style.display= "inline-block"
   setCharacterEmotion("grin")
   });

   next8.addEventListener('click', function(){
    pageEight.style.display= "none"
  pageFifteen.style.display= "inline-block"
  setCharacterEmotion("concerned")
   });

   next15.addEventListener('click', function(){
    pageFifteen.style.display= "none"
  pageNine.style.display= "inline-block"
  setCharacterEmotion("concerned")
   });

   next9.addEventListener('click', function(){
    pageNine.style.display= "none"
  pageFourteen.style.display= "inline-block"
  setCharacterEmotion("concerned")
   });
   
   next10.addEventListener('click', function(){
    pageTen.style.display= "none"
   pageEleven.style.display= "inline-block"
   setCharacterEmotion("happy")
   });

   next11.addEventListener('click', function(){
    pageEleven.style.display= "none"
   pageTwelve.style.display= "inline-block"
   setCharacterEmotion("concerned")
   });

   next12.addEventListener('click', function(){
    pageTwelve.style.display= "none"
   pageThriteen.style.display= "inline-block"
   setCharacterEmotion("concerned")
   });

   next13.addEventListener('click', function(){
    pageThriteen.style.display= "none"
   pageFourteen.style.display= "inline-block"
   setCharacterEmotion("concerned")
   });

   next14.addEventListener('click', function(){
    pageFourteen.style.display= "none"
   pageSixteen.style.display= "inline-block"
   setCharacterEmotion("deciding")
   });

   interested.addEventListener('click', function(){
    pageSixteen.style.display= "none"
   pageSeventeen.style.display= "inline-block"
   setCharacterEmotion("shocked")
   });

   next17.addEventListener('click', function(){
    pageSeventeen.style.display= "none"
   pageEighteen.style.display= "inline-block"
   setCharacterEmotion("main")
   });

   next18.addEventListener('click', function(){
    pageEighteen.style.display= "none"
   pageNineteen.style.display= "inline-block"
   setCharacterEmotion("skeptical")
   });

   next19.addEventListener('click', function(){
    pageNineteen.style.display= "none"
   page20.style.display= "inline-block"
   setCharacterEmotion("skeptical")
   });

   skeptical.addEventListener('click', function(){
    pageSixteen.style.display= "none"
   page21.style.display= "inline-block"
   setCharacterEmotion("skeptical")
   });

   next21.addEventListener('click', function(){
    page21.style.display= "none"
   page22.style.display= "inline-block"
   setCharacterEmotion("skeptical")
   });

   next22.addEventListener('click', function(){
    page22.style.display= "none"
   page23.style.display= "inline-block"
   setCharacterEmotion("conflicted")
   });

   next23.addEventListener('click', function(){
    page23.style.display= "none"
   page24.style.display= "inline-block"
   setCharacterEmotion("conflicted")
   });

   refuse.addEventListener('click', function(){
    pageSixteen.style.display= "none"
   page25.style.display= "inline-block"
   setCharacterEmotion("worried")
   });

   next25.addEventListener('click', function(){
    page25.style.display= "none"
   page26.style.display= "inline-block"
   setCharacterEmotion("worried")
   });
   
   next26.addEventListener('click', function(){
    page26.style.display= "none"
   page27.style.display= "inline-block"
   setCharacterEmotion("worried")
   });

   next27.addEventListener('click', function(){
    page27.style.display= "none"
   page28.style.display= "inline-block"
   setCharacterEmotion("worried")
   });

   next28.addEventListener('click', function(){
    page28.style.display= "none"
   page29.style.display= "inline-block"
   setCharacterEmotion("sorry")
   });

   next29.addEventListener('click', function(){
    page29.style.display= "none"
   page30.style.display= "inline-block"
   setCharacterEmotion("sorry")
   });

    next20.addEventListener('click', function(){
    page20.style.display= "none"
   page31.style.display= "inline-block"
   setCharacterEmotion("happyq")
   });
 
  next30.addEventListener('click', function(){
    page30.style.display= "none"
   page31.style.display= "inline-block"
   setCharacterEmotion("happyq")
   });


   next24.addEventListener('click', function(){
    page24.style.display= "none"
   page31.style.display= "inline-block"
   setCharacterEmotion("skeptical")
   });

   next31.addEventListener('click', function(){
    page31.style.display= "none"
   page32.style.display= "inline-block"
   setCharacterEmotion("skeptical")
   });

   next32.addEventListener('click', function(){
    page32.style.display= "none"
   page33.style.display= "inline-block"
   setCharacterEmotion("main")
   });

   next33.addEventListener('click', function(){
    page33.style.display= "none"
   page34.style.display= "inline-block"
   setCharacterEmotion("main")
   });

   next34.addEventListener('click', function(){
    page34.style.display= "none"
   page35.style.display= "inline-block"
   setCharacterEmotion("deciding")
   });















