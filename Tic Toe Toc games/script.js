let boxes = document.querySelectorAll('.box');

let reset_Btn = document.querySelector("#reset_btn");
let newGame_Btn = document.querySelector("#new_btn");
let msg_Container = document.querySelector(".rmsg-conatiner");

let msg = document.querySelector("#msg");

let turn0 = true; //player X, player O

const winningPtn = [
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,0],
[3,4,5],
[6,7,8],

];

// Assuming you have a NodeList called 'boxes' containing box elements

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turn0){
        box.innerText = "O";
        turn0 = false;
        }
        else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const showWINNER = () =>  {
  msg.innerText = `congratulations,WINNER is ${winner}`;
  msg_Container.classList.remove("hide");

}

const checkWinner = (WINNER) => {
  for(let pattern of winningPtn) {
      let pos1Val = boxes[pattern[0]].innerText;
      let pos2Val = boxes[pattern[1]].innerText;
      let pos3Val = boxes[pattern[2]].innerText; 

      if(pos1Val != "" &&pos2Val != "" &&pos3Val != ""){
        if(pos1Val === pos2Val && pos2Val===pos3Val){
          console.log("WINNER",pos1Val);
          showWINNER(pos1Val);
        }
      }
  }
}