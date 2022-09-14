const questions = document.querySelectorAll(".question");

for (let question of questions) {
  question.addEventListener("click", (e) => {
    let x = e.target
    x.className == 'questionText' ? x = x.parentElement : null    
   
        const questionText = x.children[0];
        const arrow = x.children[1];
        const answer = x.parentElement.children[1];

 

        if (answer.classList[1] == "hide") {
        answer.classList.remove("hide");
        answer.classList.add("show");
        questionText.classList.add("bold");
        arrow.classList.add("open");
        } 
        else if (answer.classList[1] == "show") {
        answer.classList.remove("show");
        answer.classList.add("hide");
        questionText.classList.remove("bold");
        arrow.classList.remove("open");
        } 
    
    
  });
}
