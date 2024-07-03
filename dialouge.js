var speeds = {
   pause: 500,
   slow: 100,
   normal:10,
   fast: 5,
   superFast: 10
};

function revealOneCharacter(list) {
   var next = list.splice(0, 1)[0];
   next.span.classList.add("revealed");
   next.classes.forEach((c) => {
      next.span.classList.add(c);
   });
   var delay = next.isSpace && !next.pause ? 0 : next.delayAfter;

   if (list.length > 0) {
      setTimeout(function () {
         revealOneCharacter(list);
      }, delay);
   }
}

 
 

startButton.addEventListener("click", function (){
   var container = document.querySelector("#contexttext");
 
 var textLines = [
    { speed: speeds.fast, string: "You're staying with your uncle for the fall while your parents are away for work." },
    { speed: speeds.normal, string: "Attending Chesterfield High School and working at your uncle's convenience store has" },
    { speed: speeds.normal, string: "become your new routine. The town of Chesterfield is bustling with activities, especially" },
    { speed: speeds.normal, string: "with the upcoming mayoral election. Every year, Mayor Baxter hosts a grand gala at his" },
    { speed: speeds.normal, string: "manor, which is the highlight of the community calendar. Today, however, has been slow at" },
    { speed: speeds.normal, string: "the store, and you're feeling the weight of boredom settle in. That's when Maya, a friend" },
    { speed: speeds.normal, string: "from school, walks through the door, a determined look on her face." },
   ];
   var characters = [];
   textLines.forEach((line, index) => {
      if (index < textLines.length - 1) {
         line.string += " "; 
      }
   
      line.string.split("").forEach((character) => {
         var span = document.createElement("span");
         span.textContent = character;
         container.appendChild(span);
         characters.push({
            span: span,
            isSpace: character === " " && !line.pause,
            delayAfter: line.speed,
            classes: line.classes || []
         });
      });
   });
   setTimeout(() => {
      revealOneCharacter(characters);   
      }, 600)
   });



nextButton.addEventListener("click", function (){
  var container = document.querySelector("#page2text");
var textLines = [
   { speed: speeds.normal, string: "You are working the day shift at Uncle Randy's shop. It's 3 PM, and the store is pretty" },
   { speed: speeds.normal, string: "empty aside from the occasional customer. The bright fluorescent lights flicker occasionally, and the only sound is the constant" },
   { speed: speeds.normal, string: "hum of the refrigerators in the back. The shelves are a bit disorganized, with some" },
   { speed: speeds.normal, string: "items knocked over or just not where they are supposed to be." }
];
var characters = [];
textLines.forEach((line, index) => {
   if (index < textLines.length - 1) {
      line.string += " "; 
   }
   line.string.split("").forEach((character) => {
      var span = document.createElement("span");
      span.textContent = character;
      container.appendChild(span);
      characters.push({
         span: span,
         isSpace: character === " " && !line.pause,
         delayAfter: line.speed,
         classes: line.classes || []
      });
   });
});
setTimeout(() => {
   revealOneCharacter(characters);   
}, 600)
  });


  next2.addEventListener("click", function (){
    var container = document.querySelector("#page3text");
  var textLines = [
     { speed: speeds.normal, string: "There's a faint smell of stale hot dogs from the roller grill and freshly brewed coffee that" },
     { speed: speeds.normal, string: "lingers in the air. You are standing behind the counter, feeling bored and wondering how to " },
     { speed: speeds.normal, string: "pass the time. What do you do?" },
  ];
  var characters = [];
  textLines.forEach((line, index) => {
     if (index < textLines.length - 1) {
        line.string += " "; 
     }
     line.string.split("").forEach((character) => {
        var span = document.createElement("span");
        span.textContent = character;
        container.appendChild(span);
        characters.push({
           span: span,
           isSpace: character === " " && !line.pause,
           delayAfter: line.speed,
           classes: line.classes || []
        });
     });
  });
  setTimeout(() => {
     revealOneCharacter(characters);   
  }, 600)
    });




    option1.addEventListener("click", function (){
      var container = document.querySelector("#page4text");
    var textLines = [
       { speed: speeds.normal, string: "You decide to make yourself useful and head to the back room to get some cleaning supplies." },
       { speed: speeds.normal, string: "The back room is cluttered with boxes and shelves stacked with extra inventory. You grab a mop and bucket, thinking it's a good way to kill some time." },
      ];
    var characters = [];
    textLines.forEach((line, index) => {
       if (index < textLines.length - 1) {
          line.string += " "; 
       }
    
       line.string.split("").forEach((character) => {
          var span = document.createElement("span");
          span.textContent = character;
          container.appendChild(span);
          characters.push({
             span: span,
             isSpace: character === " " && !line.pause,
             delayAfter: line.speed,
             classes: line.classes || []
          });
       });
    });
    setTimeout(() => {
       revealOneCharacter(characters);   
    }, 600)
      });
    
   
      


      
    option1.addEventListener("click", function (){
      var container = document.querySelector("#page6text");
    var textLines = [
       { speed: speeds.normal, string: "As you re-enter the main store, the bell above the door jingles. You look up to see Maya, a friend from Chesterfield High, walking in with a determined look on her face. She spots you with the cleaning supplies and raises an eyebrow." },
       { speed: speeds.normal, string:"She looks down at the bucket and mop in your hands briefly then focuses her attention back to you." },
       { speed: speeds.normal, classes:["bold"], string:"Maya: 'Caught you in the middle of something important, I see.'" },
      ];
    var characters = [];
    textLines.forEach((line, index) => {
       if (index < textLines.length - 1) {
          line.string += " "; 
       }
    
       line.string.split("").forEach((character) => {
          var span = document.createElement("span");
          span.textContent = character;
          container.appendChild(span);
          characters.push({
             span: span,
             isSpace: character === " " && !line.pause,
             delayAfter: line.speed,
             classes: line.classes || []
          });
       });
    });
      setTimeout(() => {
       revealOneCharacter(characters);   
    }, 600)
      });

      
      
      next6.addEventListener("click", function (){
      var container = document.querySelector("#page10text");
   var textLines = [
       { speed: speeds.normal, string: "You follow her gaze down to your hands and look up with a smile" },
       { speed: speeds.normal, classes:["bold"], string:"You: 'Hey, Maya. Just trying to stay busy. What's going on?'" },
      ];
       var characters = [];
    textLines.forEach((line, index) => {
       if (index < textLines.length - 1) {
          line.string += " "; 
       }
    
       line.string.split("").forEach((character) => {
          var span = document.createElement("span");
          span.textContent = character;
          container.appendChild(span);
          characters.push({
             span: span,
             isSpace: character === " " && !line.pause,
             delayAfter: line.speed,
             classes: line.classes || []
          });
       });
    });
    setTimeout(() => {
       revealOneCharacter(characters);   
    }, 600)
      });


      
      next10.addEventListener("click", function (){
         var container = document.querySelector("#page11text");
       var textLines = [
          { speed: speeds.normal, string: "As Maya approaches, you notice her determined expression. Her eyes are bright with curiosity and a hint of excitement. The notebook in her hand is filled with scribbled notes and clippings, and the camera over her shoulder suggests she's been busy. A story's brewing." },

         ];
         var characters = [];
       textLines.forEach((line, index) => {
          if (index < textLines.length - 1) {
             line.string += " "; 
          }
       
          line.string.split("").forEach((character) => {
             var span = document.createElement("span");
             span.textContent = character;
             container.appendChild(span);
             characters.push({
                span: span,
                isSpace: character === " " && !line.pause,
                delayAfter: line.speed,
                classes: line.classes || []
             });
          });
       });
      setTimeout(() => {
          revealOneCharacter(characters);   
       }, 600)
         });



         next8.addEventListener("click", function (){
            var container = document.querySelector("#page15text");
         var textLines = [
             { speed: speeds.normal, string: " Maya leans on the counter and gets suddenly serious."},
             { speed: speeds.normal, classes:["bold"], string: "Maya: 'I need your help...'"},
             { speed: speeds.normal, string: "You raise an eyebrow, intrigued by the sudden seriousness in her tone"},
            ];
         var characters = [];
          textLines.forEach((line, index) => {
             if (index < textLines.length - 1) {
                line.string += " "; 
             }
          
             line.string.split("").forEach((character) => {
                var span = document.createElement("span");
                span.textContent = character;
                container.appendChild(span);
                characters.push({
                   span: span,
                   isSpace: character === " " && !line.pause,
                   delayAfter: line.speed,
                   classes: line.classes || []
                });
             });
          });
          setTimeout(() => {
             revealOneCharacter(characters);   
          }, 600)
            });


            next11.addEventListener("click", function (){
               var container = document.querySelector("#page12text");
              var textLines = [
                { speed: speeds.normal, string: " Maya leans on the counter and gets suddenly serious."},
                { speed: speeds.normal, classes:["bold"], string: "Maya: 'I need your help...'"},
                { speed: speeds.normal, string: "You raise an eyebrow, intrigued by the sudden seriousness in her tone"},
               ];
               var characters = [];
             textLines.forEach((line, index) => {
                if (index < textLines.length - 1) {
                   line.string += " "; 
                }
             
                line.string.split("").forEach((character) => {
                   var span = document.createElement("span");
                   span.textContent = character;
                   container.appendChild(span);
                   characters.push({
                      span: span,
                      isSpace: character === " " && !line.pause,
                      delayAfter: line.speed,
                      classes: line.classes || []
                   });
                });
             });
           setTimeout(() => {
                revealOneCharacter(characters);   
             }, 600)
               });


            next12.addEventListener("click", function (){
               var container = document.querySelector("#page13text");
            var textLines = [
                { speed: speeds.normal, string: "You set down the bucket and mop behind the counter. "},
                { speed: speeds.normal, classes:["bold"], string: "You: 'Sure, Maya. What's going on?'"},
               ];
             
             var characters = [];
             textLines.forEach((line, index) => {
                if (index < textLines.length - 1) {
                   line.string += " "; 
                }
             
                line.string.split("").forEach((character) => {
                   var span = document.createElement("span");
                   span.textContent = character;
                   container.appendChild(span);
                   characters.push({
                      span: span,
                      isSpace: character === " " && !line.pause,
                      delayAfter: line.speed,
                      classes: line.classes || []
                   });
                });
             });
             setTimeout(() => {
                revealOneCharacter(characters);   
             }, 600)
               });



               next13.addEventListener("click", function (){
                  var container = document.querySelector("#page14text");
                var textLines = [
                   { speed: speeds.normal, string: "Maya scans the store making sure its empty. She leans in even more and lowers her voice."},
                   { speed: speeds.normal, classes:["bold"], string: "Maya: I've been investigating something for the school newspaper. It seems someone is trying to sabotage the mayor's annual gala, and I think it's more than just a few pranks.'"},
                  ];
                  var characters = [];
                textLines.forEach((line, index) => {
                   if (index < textLines.length - 1) {
                      line.string += " "; 
                   }
                
                   line.string.split("").forEach((character) => {
                      var span = document.createElement("span");
                      span.textContent = character;
                      container.appendChild(span);
                      characters.push({
                         span: span,
                         isSpace: character === " " && !line.pause,
                         delayAfter: line.speed,
                         classes: line.classes || []
                      });
                   });
                });
               setTimeout(() => {
                   revealOneCharacter(characters);   
                }, 600)
                  });
      
   

                  next9.addEventListener("click", function (){
                     var container = document.querySelector("#page14text");
                   var textLines = [
                      { speed: speeds.normal, string: "Maya scans the store making sure its empty. She leans in even more and lowers her voice."},
                      { speed: speeds.normal, classes:["bold"], string: "Maya: I've been investigating something for the school newspaper. It seems someone is trying to sabotage the mayor's annual gala, and I think it's more than just a few pranks.'"},
                     ];
                   
                   var characters = [];
                   textLines.forEach((line, index) => {
                      if (index < textLines.length - 1) {
                         line.string += " "; 
                      }
                   
                      line.string.split("").forEach((character) => {
                         var span = document.createElement("span");
                         span.textContent = character;
                         container.appendChild(span);
                         characters.push({
                            span: span,
                            isSpace: character === " " && !line.pause,
                            delayAfter: line.speed,
                            classes: line.classes || []
                         });
                      });
                   });
                    setTimeout(() => {
                      revealOneCharacter(characters);   
                   }, 600)
                     });

 option2.addEventListener("click", function (){
                     var container = document.querySelector("#page5text");
                    var textLines = [
                      { speed: speeds.normal, string: "You lean against the counter, pulling out your phone to scroll through YouTube. The latest updates from Slushy Noobz distract you from the monotony of the day. Suddenly, the bell above the door jingles, snapping you out of the slushy virus."},
                     ];
                   
                   var characters = [];
                   textLines.forEach((line, index) => {
                      if (index < textLines.length - 1) {
                         line.string += " "; 
                      }
                   
                      line.string.split("").forEach((character) => {
                         var span = document.createElement("span");
                         span.textContent = character;
                         container.appendChild(span);
                         characters.push({
                            span: span,
                            isSpace: character === " " && !line.pause,
                            delayAfter: line.speed,
                            classes: line.classes || []
                         });
                      });
                   });
                   setTimeout(() => {
                      revealOneCharacter(characters);   
                   }, 600)
                     });
         


                     next5.addEventListener("click", function (){
                        var container = document.querySelector("#page7text");
                      var textLines = [
                         { speed: speeds.normal, string: "Maya, your friend from Chesterfield High, strides into the store. She walks towards the counter, her smirk widening into a playful grin. There's a glint of mischief in her eyes, and you know she's up to something."},
                         { speed: speeds.normal,classes:["bold"],  string: "Maya: 'Working hard or hardly working?'"},
                        ];
                      
                      var characters = [];
                      textLines.forEach((line, index) => {
                         if (index < textLines.length - 1) {
                            line.string += " "; 
                         }
                      
                         line.string.split("").forEach((character) => {
                            var span = document.createElement("span");
                            span.textContent = character;
                            container.appendChild(span);
                            characters.push({
                               span: span,
                               isSpace: character === " " && !line.pause,
                               delayAfter: line.speed,
                               classes: line.classes || []
                            });
                         });
                      });
                      setTimeout(() => {
                         revealOneCharacter(characters);   
                      }, 600)
                        });
            



                      next7.addEventListener("click", function (){
                       var container = document.querySelector("#page8text");
                        var textLines = [
                            { speed: speeds.normal, string: "The notebook in her hand is filled with scribbled notes and clippings, and the camera over her shoulder suggests she's been busy."},
                            { speed: speeds.normal, string: "You can't help but grin back at her."},
                            { speed: speeds.normal,classes:["bold"],  string: "You: 'Hey, Maya. You caught me. What's up?'"},
                           ];
                          
                         var characters = [];
                         textLines.forEach((line, index) => {
                            if (index < textLines.length - 1) {
                               line.string += " "; 
                            }
                         
                         line.string.split("").forEach((character) => {
                               var span = document.createElement("span");
                               span.textContent = character;
                               container.appendChild(span);
                               characters.push({
                                  span: span,
                                  isSpace: character === " " && !line.pause,
                                  delayAfter: line.speed,
                                  classes: line.classes || []
                               });
                            });
                         });
                        setTimeout(() => {
                            revealOneCharacter(characters);   
                         }, 600)
                           });



                           
            next15.addEventListener("click", function (){
               var container = document.querySelector("#page9text");
             var textLines = [
                { speed: speeds.normal, string: "You put your phone in your pocket. "},
                { speed: speeds.normal, classes:["bold"], string: "You: 'Sure, Maya. What's going on?'"},
               ];
             
             var characters = [];
             textLines.forEach((line, index) => {
                if (index < textLines.length - 1) {
                   line.string += " "; 
                }
             
                line.string.split("").forEach((character) => {
                   var span = document.createElement("span");
                   span.textContent = character;
                   container.appendChild(span);
                   characters.push({
                      span: span,
                      isSpace: character === " " && !line.pause,
                      delayAfter: line.speed,
                      classes: line.classes || []
                   });
                });
             });
             setTimeout(() => {
                revealOneCharacter(characters);   
             }, 600)
               });
               
                                  
            next14.addEventListener("click", function (){
               var container = document.querySelector("#page16text");
             var textLines = [
                { speed: speeds.normal, string: "How do you react to Maya?"},
               
               ];
             
             var characters = [];
             textLines.forEach((line, index) => {
                if (index < textLines.length - 1) {
                   line.string += " "; 
                }
             
                line.string.split("").forEach((character) => {
                   var span = document.createElement("span");
                   span.textContent = character;
                   container.appendChild(span);
                   characters.push({
                      span: span,
                      isSpace: character === " " && !line.pause,
                      delayAfter: line.speed,
                      classes: line.classes || []
                   });
                });
             });
             setTimeout(() => {
                revealOneCharacter(characters);   
             }, 600)
               });



               interested.addEventListener("click", function (){
                  var container = document.querySelector("#page17text");
                 var textLines = [
                   { speed: speeds.normal, string: "You lean in genuinely curious."},
                   { speed: speeds.normal, classes:["bold"], string: "You: 'Sabotage?"},
                   { speed: speeds.pause, classes:["bold"], string: "", pause:true},
                   { speed: speeds.normal, classes:["bold"], string: "that sounds serious. What have you found out so far?'"},
                  ];
                
                var characters = [];
                textLines.forEach((line, index) => {
                   if (index < textLines.length - 1) {
                      line.string += " "; 
                   }
                
                   line.string.split("").forEach((character) => {
                      var span = document.createElement("span");
                      span.textContent = character;
                      container.appendChild(span);
                      characters.push({
                         span: span,
                         isSpace: character === " " && !line.pause,
                         delayAfter: line.speed,
                         classes: line.classes || []
                      });
                   });
                });
                setTimeout(() => {
                   revealOneCharacter(characters);   
                }, 600)
                  });



                  

               next17.addEventListener("click", function (){
                  var container = document.querySelector("#page18text");
               var textLines = [
                   { speed: speeds.normal, string: "She nods, her eyes sparkling with excitement."},
                   { speed: speeds.normal, classes:["bold"], string: "Maya: 'It's serious. All the fundraisers this season have gone wrong and I think someone is up to no good. I need help connecting the dots.?"},
            
                  ];
                
                var characters = [];
                textLines.forEach((line, index) => {
                   if (index < textLines.length - 1) {
                      line.string += " "; 
                   }
                
                   line.string.split("").forEach((character) => {
                      var span = document.createElement("span");
                      span.textContent = character;
                      container.appendChild(span);
                      characters.push({
                         span: span,
                         isSpace: character === " " && !line.pause,
                         delayAfter: line.speed,
                         classes: line.classes || []
                      });
                   });
                });
                setTimeout(() => {
                   revealOneCharacter(characters);   
                }, 600)
                  });
            
            


                  next18.addEventListener("click", function (){
                     var container = document.querySelector("#page19text");
                    var textLines = [
                      { speed: speeds.normal, classes:["bold"], string: " You: 'Tell me more. How do you think we can figure this out?'"},
               
                     ];
                   
                   var characters = [];
                   textLines.forEach((line, index) => {
                      if (index < textLines.length - 1) {
                         line.string += " "; 
                      }
                   
                      line.string.split("").forEach((character) => {
                         var span = document.createElement("span");
                         span.textContent = character;
                         container.appendChild(span);
                         characters.push({
                            span: span,
                            isSpace: character === " " && !line.pause,
                            delayAfter: line.speed,
                            classes: line.classes || []
                         });
                      });
                   });
                   setTimeout(() => {
                      revealOneCharacter(characters);   
                   }, 600)
                     });
               



                     next19.addEventListener("click", function (){
                        var container = document.querySelector("#page20text");
                       var textLines = [
                         { speed: speeds.normal, string: "A grin spreads across her face."},
                         { speed: speeds.normal, classes:["bold"], string: " Maya: 'I knew I could count on you. We'll start by interviewing some people.'"},
                        ];
                      
                      var characters = [];
                      textLines.forEach((line, index) => {
                         if (index < textLines.length - 1) {
                            line.string += " "; 
                         }
                      
                         line.string.split("").forEach((character) => {
                            var span = document.createElement("span");
                            span.textContent = character;
                            container.appendChild(span);
                            characters.push({
                               span: span,
                               isSpace: character === " " && !line.pause,
                               delayAfter: line.speed,
                               classes: line.classes || []
                            });
                         });
                      });
                      setTimeout(() => {
                         revealOneCharacter(characters);   
                      }, 600)
                        });



                        skeptical.addEventListener("click", function (){
                           var container = document.querySelector("#page21text");
                         var textLines = [
                            { speed: speeds.normal, string: "You cock your eyebrow, skepticism written all over your face."},
                            { speed: speeds.normal, classes:["bold"], string: "You: 'Are you sure it's not just some kid pulling a prank? Why would anyone want to ruin the gala?'"},
                           ];
                         
                         var characters = [];
                         textLines.forEach((line, index) => {
                            if (index < textLines.length - 1) {
                               line.string += " "; 
                            }
                         
                            line.string.split("").forEach((character) => {
                               var span = document.createElement("span");
                               span.textContent = character;
                               container.appendChild(span);
                               characters.push({
                                  span: span,
                                  isSpace: character === " " && !line.pause,
                                  delayAfter: line.speed,
                                  classes: line.classes || []
                               });
                            });
                         });
                        setTimeout(() => {
                            revealOneCharacter(characters);   
                         }, 600)
                           });




                      next21.addEventListener("click", function (){
                      var container = document.querySelector("#page22text");
                    var textLines = [
                               { speed: speeds.normal, string: "She frowns and looks slightly defensive."},
                               { speed: speeds.normal, classes:["bold"], string: "Maya: 'I know it sounds far-fetched, but I have a gut feeling. If you don't believe me, that's fine, but I could"},
                               { speed: speeds.slow, classes:["bold"], string: "really"},
                               { speed: speeds.normal, classes:["bold"], string: "use some help.'"},
                              ];
                        var characters = [];
                            textLines.forEach((line, index) => {
                               if (index < textLines.length - 1) {
                                  line.string += " "; 
                               }
                            line.string.split("").forEach((character) => {
                                  var span = document.createElement("span");
                                  span.textContent = character;
                                  container.appendChild(span);
                                  characters.push({
                                     span: span,
                                     isSpace: character === " " && !line.pause,
                                     delayAfter: line.speed,
                                     classes: line.classes || []
                                  });
                               });
                            });
                         setTimeout(() => {
                               revealOneCharacter(characters);   
                            }, 600)
                              });


                      next22.addEventListener("click", function (){
                        var container = document.querySelector("#page23text");
                     var textLines = [
                                  { speed: speeds.normal, string: "You sigh, feeling a bit conflicted."},
                                  { speed: speeds.normal, classes:["bold"], string: "You: 'Alright"},
                                  { speed: speeds.pause, pause:true, classes:["bold"], string: "..."},
                                  { speed: speeds.normal, classes:["bold"], string: ", I'll help you. What do we do first?'"},
                                 ];
                          var characters = [];
                               textLines.forEach((line, index) => {
                                  if (index < textLines.length - 1) {
                                     line.string += " "; 
                                  }
                            line.string.split("").forEach((character) => {
                                     var span = document.createElement("span");
                                     span.textContent = character;
                                     container.appendChild(span);
                                     characters.push({
                                        span: span,
                                        isSpace: character === " " && !line.pause,
                                        delayAfter: line.speed,
                                        classes: line.classes || []
                                     });
                                  });
                               });
                          setTimeout(() => {
                                  revealOneCharacter(characters);   
                               }, 600)
                                 });



                       next23.addEventListener("click", function (){
                       var container = document.querySelector("#page24text");
                 var textLines = [ { speed: speeds.normal, string: " She relaxes a bit, though you can tell she's still upset."},
                                  { speed: speeds.normal, classes:["bold"], string: "Maya: 'Thank you."},
                                  { speed: speeds.pause, pause:true, classes:["bold"], string: ""},
                                  { speed: speeds.normal, classes:["bold"], string: "We need to start by talking to people who were at the events.'"},
                                    ];
                         var characters = [];
                                  textLines.forEach((line, index) => {
                                     if (index < textLines.length - 1) {
                                        line.string += " "; 
                                     }
                                  
                                     line.string.split("").forEach((character) => {
                                        var span = document.createElement("span");
                                        span.textContent = character;
                                        container.appendChild(span);
                                        characters.push({
                                           span: span,
                                           isSpace: character === " " && !line.pause,
                                           delayAfter: line.speed,
                                           classes: line.classes || []
                                        });
                                     });
                                  });
                         setTimeout(() => {
                                     revealOneCharacter(characters);   
                                  }, 600)
                                    });
         

                         refuse.addEventListener("click", function (){
                           var container = document.querySelector("#page25text");
                           var textLines = [
                                        { speed: speeds.normal, string: "You bite your lip, glancing around the store. You promised your uncle you'd help today after school."},
                                        { speed: speeds.normal, classes:["bold"], string: "You: 'I'd love to help, but I'm stuck here with work. Maybe you should ask someone else?'"},
                                       ];
                            var characters = [];
                                     textLines.forEach((line, index) => {
                                        if (index < textLines.length - 1) {
                                           line.string += " "; 
                                        }
                                     
                            line.string.split("").forEach((character) => {
                                           var span = document.createElement("span");
                                           span.textContent = character;
                                           container.appendChild(span);
                                           characters.push({
                                              span: span,
                                              isSpace: character === " " && !line.pause,
                                              delayAfter: line.speed,
                                              classes: line.classes || []
                                           });
                                        });
                                     });
                                     
                            setTimeout(() => {
                                        revealOneCharacter(characters);   
                                     }, 600)
                                       });


                         next25.addEventListener("click", function (){
                       var container = document.querySelector("#page26text");
                        var textLines = [
                                        { speed: speeds.normal, string: "She glances around the empty store, raising an eyebrow sarcastically."},
                                        { speed: speeds.normal, classes:["bold"], string: "Maya: 'Yeah, looks like you're swamped.'"},
                                        { speed: speeds.normal, string: "You open your mouth to protest, but she cuts you off, stepping closer with a pleading look."},
                                       ];
                           var characters = [];
                                     textLines.forEach((line, index) => {
                                        if (index < textLines.length - 1) {
                                           line.string += " "; 
                                        }
                                     
                                        line.string.split("").forEach((character) => {
                                           var span = document.createElement("span");
                                           span.textContent = character;
                                           container.appendChild(span);
                                           characters.push({
                                              span: span,
                                              isSpace: character === " " && !line.pause,
                                              delayAfter: line.speed,
                                              classes: line.classes || []
                                           });
                                        });
                                     });
                            setTimeout(() => {
                                        revealOneCharacter(characters);   
                                     }, 600)
                                       });


                          next26.addEventListener("click", function (){
                           var container = document.querySelector("#page27text");
                          var textLines = [
                                           { speed: speeds.normal, classes:["bold"], string: "Maya: 'Come on, you're the best detective I know, and my best friend.'"},
                                           { speed: speeds.normal, string: "She draws out the last word, pouting slightly."},
                                           { speed: speeds.slow, classes:["bold"], string: "'please?'"},
                                           
                                          ];
                           var characters = [];
                                        textLines.forEach((line, index) => {
                                           if (index < textLines.length - 1) {
                                              line.string += " "; 
                                           }
                                        
                                           line.string.split("").forEach((character) => {
                                              var span = document.createElement("span");
                                              span.textContent = character;
                                              container.appendChild(span);
                                              characters.push({
                                                 span: span,
                                                 isSpace: character === " " && !line.pause,
                                                 delayAfter: line.speed,
                                                 classes: line.classes || []
                                              });
                                           });
                                        });
                           setTimeout(() => {
                                           revealOneCharacter(characters);   
                                        }, 600)
                                          });


                                          next27.addEventListener("click", function (){
                                             var container = document.querySelector("#page28text");
                                            var textLines = [
                                               { speed: speeds.normal, string: "You feel a pang of guilt. It's true, Maya was the first person to welcome you to town, and since then, she's been a constant source of fun and excitement. She's always dragging you into her adventures, and deep down, you know you wouldn't have it any other way."},
                                                          ];
                                             var characters = [];
                                                          textLines.forEach((line, index) => {
                                                             if (index < textLines.length - 1) {
                                                                line.string += " "; 
                                                             }
                                                          
                                                             line.string.split("").forEach((character) => {
                                                                var span = document.createElement("span");
                                                                span.textContent = character;
                                                                container.appendChild(span);
                                                                characters.push({
                                                                   span: span,
                                                                   isSpace: character === " " && !line.pause,
                                                                   delayAfter: line.speed,
                                                                   classes: line.classes || []
                                                                });
                                                             });
                                                          });
                                             setTimeout(() => {
                                                             revealOneCharacter(characters);   
                                                          }, 600)
                                                            });


                                                            next28.addEventListener("click", function (){
                                                               var container = document.querySelector("#page29text");
                                                              var textLines = [
                                                  { speed: speeds.normal, string: "You sigh, your resistance crumbling."},
                                                                               { speed: speeds.normal, classes:["bold"], string: "You: 'I guess I could help.'"},
                                                                               
                                                                              ];
                                                               var characters = [];
                                                                            textLines.forEach((line, index) => {
                                                                               if (index < textLines.length - 1) {
                                                                                  line.string += " "; 
                                                                               }
                                                                            
                                                                               line.string.split("").forEach((character) => {
                                                                                  var span = document.createElement("span");
                                                                                  span.textContent = character;
                                                                                  container.appendChild(span);
                                                                                  characters.push({
                                                                                     span: span,
                                                                                     isSpace: character === " " && !line.pause,
                                                                                     delayAfter: line.speed,
                                                                                     classes: line.classes || []
                                                                                  });
                                                                               });
                                                                            });
                                                               setTimeout(() => {
                                                                               revealOneCharacter(characters);   
                                                                            }, 600)
                                                                              });

                                                                              next29.addEventListener("click", function (){
                                                                                 var container = document.querySelector("#page30text");
                                                                                var textLines = [
                                                                    { speed: speeds.normal, string: "Her face brightens up, a hopeful smile spreading across her lips."},
                                                                                                 { speed: speeds.normal, classes:["bold"], string: "Maya: 'Great! We can start by talking to people who were at the events. Thanks for coming through.'"},
                                                                                                 ];
                                                                                 var characters = [];
                                                                                              textLines.forEach((line, index) => {
                                                                                                 if (index < textLines.length - 1) {
                                                                                                    line.string += " "; 
                                                                                                 }
                                                                                              
                                                                                                 line.string.split("").forEach((character) => {
                                                                                                    var span = document.createElement("span");
                                                                                                    span.textContent = character;
                                                                                                    container.appendChild(span);
                                                                                                    characters.push({
                                                                                                       span: span,
                                                                                                       isSpace: character === " " && !line.pause,
                                                                                                       delayAfter: line.speed,
                                                                                                       classes: line.classes || []
                                                                                                    });
                                                                                                 });
                                                                                              });
                                                                                 setTimeout(() => {
                                                                                                 revealOneCharacter(characters);   
                                                                                              }, 600)
                                                                                                });




                                 
                                          next30.addEventListener("click", function (){
                                             var container = document.querySelector("#page31text");
                                            var textLines = [
                                                             { speed: speeds.normal, classes:["bold"], string: "You: 'So what's the situation?'"},
                                                            ];
                                             var characters = [];
                                                          textLines.forEach((line, index) => {
                                                             if (index < textLines.length - 1) {
                                                                line.string += " "; 
                                                             }
                                                          
                                                             line.string.split("").forEach((character) => {
                                                                var span = document.createElement("span");
                                                                span.textContent = character;
                                                                container.appendChild(span);
                                                                characters.push({
                                                                   span: span,
                                                                   isSpace: character === " " && !line.pause,
                                                                   delayAfter: line.speed,
                                                                   classes: line.classes || []
                                                                });
                                                             });
                                                          });
                                             setTimeout(() => {
                                                             revealOneCharacter(characters);   
                                                          }, 600)
                                                            });                  
                                                           
                  next20.addEventListener("click", function (){
                     var container = document.querySelector("#page31text");
                       var textLines = [
                        { speed: speeds.normal, classes:["bold"], string: "You: 'So what's the situation?'"},
                             ];
                             var characters = [];
                             textLines.forEach((line, index) => {
                           if (index < textLines.length - 1) {
                             line.string += " "; 
                               }
                                                                            
                               line.string.split("").forEach((character) => {
                                  var span = document.createElement("span");
                                      span.textContent = character;
                                   container.appendChild(span);
                                characters.push({
                                   span: span,
                                    isSpace: character === " " && !line.pause,
                                    delayAfter: line.speed,
                                       classes: line.classes || []
                                        });
                                      });
                                    });
                                    setTimeout (() => {
                                    revealOneCharacter(characters);   
                                     }, 600)
                                      }); 


                                      next24.addEventListener("click", function (){
                                       var container = document.querySelector("#page31text");
                                         var textLines = [
                                          { speed: speeds.normal, classes:["bold"], string: "You: 'So what's the situation?'"},
                                               ];
                                               var characters = [];
                                               textLines.forEach((line, index) => {
                                             if (index < textLines.length - 1) {
                                               line.string += " "; 
                                                 }
                                                                                              
                                                 line.string.split("").forEach((character) => {
                                                    var span = document.createElement("span");
                                                        span.textContent = character;
                                                     container.appendChild(span);
                                                  characters.push({
                                                     span: span,
                                                      isSpace: character === " " && !line.pause,
                                                      delayAfter: line.speed,
                                                         classes: line.classes || []
                                                          });
                                                        });
                                                      });
                                                      setTimeout (() => {
                                                      revealOneCharacter(characters);   
                                                       }, 600)
                                                        }); 

                                      next31.addEventListener("click", function (){
                                       var container = document.querySelector("#page32text");
                                         var textLines = [
                                          { speed: speeds.normal, classes:["bold"], string: "Maya: 'I know you've only been here for a semester, but as you know every year the mayor hosts a gala at his manor. It's this whole decadent thing with fancy dresses, live music, the whole shebang.'"},
                                               ];
                                               var characters = [];
                                               textLines.forEach((line, index) => {
                                             if (index < textLines.length - 1) {
                                               line.string += " "; 
                                                 }
                                                                                              
                                                 line.string.split("").forEach((character) => {
                                                    var span = document.createElement("span");
                                                        span.textContent = character;
                                                     container.appendChild(span);
                                                  characters.push({
                                                     span: span,
                                                      isSpace: character === " " && !line.pause,
                                                      delayAfter: line.speed,
                                                         classes: line.classes || []
                                                          });
                                                        });
                                                      });
                                                      setTimeout (() => {
                                                      revealOneCharacter(characters);   
                                                       }, 600)
                                                        });   


                                                        next32.addEventListener("click", function (){
                                                         var container = document.querySelector("#page33text");
                                                           var textLines = [
                                                            { speed: speeds.normal, classes:["bold"], string: "Maya: 'To raise money for the gala, the town organizes a series of fundraisers throughout the fall. So far we've had several incidents at different fundraising events across town. It started with the bake sale at Sunstone Park. Let's go talk to Mrs. Robinson'"},
                                                                 ];
                                                                 var characters = [];
                                                                 textLines.forEach((line, index) => {
                                                               if (index < textLines.length - 1) {
                                                                 line.string += " "; 
                                                                   }
                                                                                                                
                                                                   line.string.split("").forEach((character) => {
                                                                      var span = document.createElement("span");
                                                                          span.textContent = character;
                                                                       container.appendChild(span);
                                                                    characters.push({
                                                                       span: span,
                                                                        isSpace: character === " " && !line.pause,
                                                                        delayAfter: line.speed,
                                                                           classes: line.classes || []
                                                                            });
                                                                          });
                                                                        });
                                                                        setTimeout (() => {
                                                                        revealOneCharacter(characters);   
                                                                         }, 600)
                                                                          });  
                                                                          
                                                                          

                                                        next33.addEventListener("click", function (){
                                                         var container = document.querySelector("#page34text");
                                                           var textLines = [
                                                            { speed: speeds.normal, string: "You can see that this investigation means a lot to her, and she genuinely believes there's something more to the story.'"},
                                                            { speed: speeds.normal, classes:["bold"], string: "You: 'OK but first I need someone to cover my shift.'"},
                                                                 ];
                                                                 var characters = [];
                                                                 textLines.forEach((line, index) => {
                                                               if (index < textLines.length - 1) {
                                                                 line.string += " "; 
                                                                   }
                                                                                                                
                                                                   line.string.split("").forEach((character) => {
                                                                      var span = document.createElement("span");
                                                                          span.textContent = character;
                                                                       container.appendChild(span);
                                                                    characters.push({
                                                                       span: span,
                                                                        isSpace: character === " " && !line.pause,
                                                                        delayAfter: line.speed,
                                                                           classes: line.classes || []
                                                                            });
                                                                          });
                                                                        });
                                                                        setTimeout (() => {
                                                                        revealOneCharacter(characters);   
                                                                         }, 600)
                                                                          });   
                                                         
                                                                          

                                                                          next34.addEventListener("click", function (){
                                                                           var container = document.querySelector("#page35text");
                                                                             var textLines = [
                                                                              { speed: speeds.normal, string: "It's late afternoon, and the store is quiet except for the occasional customer browsing the aisles. You know you need to find a way to get off work if you're going to help Maya with her investigation. You glance at the clock nervously, weighing your options."},
                                                                       ];
                                                                                   var characters = [];
                                                                                   textLines.forEach((line, index) => {
                                                                                 if (index < textLines.length - 1) {
                                                                                   line.string += " "; 
                                                                                     }
                                                                                                                                  
                                                                                     line.string.split("").forEach((character) => {
                                                                                        var span = document.createElement("span");
                                                                                            span.textContent = character;
                                                                                         container.appendChild(span);
                                                                                      characters.push({
                                                                                         span: span,
                                                                                          isSpace: character === " " && !line.pause,
                                                                                          delayAfter: line.speed,
                                                                                             classes: line.classes || []
                                                                                              });
                                                                                            });
                                                                                          });
                                                                                          setTimeout (() => {
                                                                                          revealOneCharacter(characters);   
                                                                                           }, 600)
                                                                                            });                             
                        
                        
                     
                     
                                       
                  
                                    
                              
                           
                           
                           
                        
                        
                        
                        
                        
                     
                     
                     
                        
                        
                        
                     
                     
                     
                     
                     
                  
                  
                        
      
      
   
   
                     

                  
            
         
         
         
      
      
      
      
      
   
   
   
      
      
      
   
   
   
   
   


