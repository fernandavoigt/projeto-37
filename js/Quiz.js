class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref("gameState");
    gameStateRef.on("value",function(data){
       gameState = data.val();
    });

  }

  update(state){
    database.ref("/").update({
      gameState: state
    });
  }

 start(){
    
      contestant = new Contestant();
      contestantCount = contestant.getCount();
      
      question = new Question()
      question.display();
    
  }

  play(){
    question.hide();
    background("Yellow");
   
       
  }
}