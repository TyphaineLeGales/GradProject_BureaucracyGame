var deskContainer = document.querySelector("div.deskContainer");

class Desk{
  constructor(id, state, isTheAnswer) {
    this.id = id;
    this.state = state;
    this.isTheAnswer = isTheAnswer;
  }

  displayDeskId() {

  }

  createDesk() {
    var divDesk = document.createElement("div");
    divDesk.classList.add('counterDesk');
    if(this.isTheAnswer) {
      divDesk.classList.add("isTheAnswer");
    }
    deskContainer.appendChild(divDesk);
    var deskId = document.createElement("p");
    deskId.classList.add('deskId');
    divDesk.appendChild(deskId);
    var deskState = document.createElement("p");
    deskState.classList.add('deskState');
    divDesk.appendChild(deskState);
    var divClickTarget = document.createElement("div");
    divClickTarget.classList.add('clickTarget');
    divDesk.appendChild(divClickTarget);
    //inside html desk container
    //<div class="counterDesk">
      //<p class="deskId"></p>
      //<p class="deskState"></p>
      //<div class="clickTarget"></div>
   // </div>
  }
}
