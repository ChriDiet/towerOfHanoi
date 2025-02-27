// model
//   hvor er diskene, 0 = venstre tårn, 1 = midten, 2 = høyre
//   alle starter til venstre
let smallDiskTowerIndex = 0;
let mediumDiskTowerIndex = 0;
let largeDiskTowerIndex = 0;

let disableButtons = [true, false, false, true, true, true, true, true, true];

// view 
updateView();

function updateView() {
   document.getElementById('app').innerHTML = /*HTML*/ `
         <div class="game-container">
            ${createTowerHtml(0)}
            ${createTowerHtml(1)}
            ${createTowerHtml(2)}
         </div>
            Flytt liten disk til 
             <button onclick="moveSmallDisk(0)" ${disableButtons[0] ? 'disabled' : ''}>venstre tårn</button>
             
            <button onclick="moveSmallDisk(1)" ${disableButtons[1] ? 'disabled' : ''}>midtre tårn</button>
            <button onclick="moveSmallDisk(2)" ${disableButtons[2] ? 'disabled' : ''}>høyre tårn</button>
            <br/>
            Flytt medium disk
            <button onclick="moveMediumDisk(0)" ${disableButtons[3] ? 'disabled' : ''}>venstre tårn</button>
            <button onclick="moveMediumDisk(1)" ${disableButtons[4] ? 'disabled' : ''}>midtre tårn</button>
            <button onclick="moveMediumDisk(2)" ${disableButtons[5] ? 'disabled' : ''}>høyre tårn</button>
            <br/>
            Flytt stor disk
            <button onclick="moveLargeDisk(0)" ${disableButtons[6] ? 'disabled' : ''}>venstre tårn</button>
            <button onclick="moveLargeDisk(1)" ${disableButtons[7] ? 'disabled' : ''}>midtre tårn</button>
            <button onclick="moveLargeDisk(2)" ${disableButtons[8] ? 'disabled' : ''}>høyre tårn</button>
            <br/>
      `;
}


function createBtnHtml(moveFunc, index) {
   return /*html*/ `
      <button onclick="${moveFunc(index)}" ${smallDisable[index] ? 'disabled' : ''}>venstre tårn</button>
   `;
}


function drawDisks(pos) {
   return /*html*/ `
      ${largeDiskTowerIndex === pos ? createLargeDiskHtml() : ''}
      ${mediumDiskTowerIndex === pos ? createMediumDiskHtml() : ''}
      ${smallDiskTowerIndex === pos ? createSmallDiskHtml() : ''}
   `;
}

function createLargeDiskHtml() {
   return /*html*/ `
      <div class="disk" style="width: 70px"></div>
   `;
}
function createMediumDiskHtml() {
   return /*html*/ `
      <div class="disk" style="width: 50px"></div>
   `;
}
function createSmallDiskHtml() {
   return /*html*/ `
      <div class="disk" style="width: 30px"></div>
   `;
}

function createTowerHtml(towerIndex) {
   return /*html*/ `
      <div class="tower-container">
         <div class="tower">
            ${drawDisks(towerIndex)}
         </div>
      </div>
   `;
}


// controller
function moveSmallDisk(toTowerIndex) {
   smallDiskTowerIndex = checkDiskIndex(toTowerIndex);
   canMove();
   updateView();
}

function moveMediumDisk(toTowerIndex) {
   mediumDiskTowerIndex = checkDiskIndex(toTowerIndex);
   canMove();
   updateView();
}

function moveLargeDisk(toTowerIndex) {
   largeDiskTowerIndex = checkDiskIndex(toTowerIndex);
   canMove();
   updateView();
}

function checkDiskIndex(index) {
   leftTower = 0;
   midTower = 1;
   rightTower = 2;
   switch (index) {
      case leftTower:
         return leftTower;
      case midTower:
         return midTower;
      case rightTower:
         return rightTower;
   }
}

function getState() {
   return [smallDiskTowerIndex, mediumDiskTowerIndex, largeDiskTowerIndex];
}

function disableBtn(btnType, index, value) {
   btnType[index] = value;
}

function canMove() {
   const pos = [0, 1, 2];
   const mediumButton = 3;
   const largeButton = 6;

   let state = getState();


   for (let i = 0; i < state.length; i++) {


      const isSmallDisabled = state[0] === pos[i];
      disableBtn(disableButtons, pos[i], isSmallDisabled);

      const isMediumDisabled = state.slice(0, 2).includes(pos[i]);
      disableBtn(disableButtons, pos[i] + mediumButton, isMediumDisabled);

      const isLargeDisabled = state.slice(0, 3).includes(pos[i]);
      disableBtn(disableButtons, pos[i] + largeButton, isLargeDisabled);

      if (state[0] === state[1]) {
         disableBtn(disableButtons, pos[i] + mediumButton, true);
      }

      if (state[0] === state[2] || state[1] === state[2]) {
         disableBtn(disableButtons, pos[i] + largeButton, true);
      }

   }
}