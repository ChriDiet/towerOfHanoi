// model
//   hvor er diskene, 0 = venstre tårn, 1 = midten, 2 = høyre
//   alle starter til venstre
let smallDiskTowerIndex = 0;
let mediumDiskTowerIndex = 0;
let largeDiskTowerIndex = 0;

let disableButtons = [true, false, false, true, true, true, true, true, true];

const mediumButtonsRangeOffset = 3;
const largeButtonsRangeOffset = 6;

let solved = false;

// view 
updateView();

function updateView() {
   !solved
      ? document.getElementById('app').innerHTML = /*HTML*/ `
      <div class="game-container">
         ${createTowerHtml(0)}
         ${createTowerHtml(1)}
         ${createTowerHtml(2)}
      </div>

   Flytt liten disk til 
   ${createButtonsHtml('moveSmallDisk')}

   
   <br/>
   Flytt medium disk
   ${createButtonsHtml('moveMediumDisk')}
   <br/>
   Flytt stor disk
   ${createButtonsHtml('moveLargeDisk')}
   <br/>
      `
      : document.getElementById('app').innerHTML = /*html*/ `
      <div>Congratulations</div>
      ${createButtonHtml('restart', '', 'Start nytt spill')}
   `;
}

// set in controller or in view?
function restart() {
   smallDiskTowerIndex = 0;
   mediumDiskTowerIndex = 0;
   largeDiskTowerIndex = 0;
   solved = false;
   updateView();
}

function createButtonsHtml(diskType) {
   const labels = ['venstre tårn', 'midtre tårn', 'høyre tårn'];
   let buttonHtml = ``;

   labels.forEach((label, index) => {
      buttonHtml += createButtonHtml(diskType, index, label)
   })

   return buttonHtml;
}
function createButtonHtml(onclick, index, label) {
   return /*html*/ `
      <button onclick="${onclick}(${index})" ${isDisabled(onclick, index)}>
         ${label}
      </button>
   `;
}
function isDisabled(type, index) {
   if (type === 'moveSmallDisk') return disableButtons[index] ? 'disabled' : '';
   if (type === 'moveMediumDisk') return disableButtons[index + mediumButtonsRangeOffset] ? 'disabled' : '';
   if (type === 'moveLargeDisk') return disableButtons[index + largeButtonsRangeOffset] ? 'disabled' : '';

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
   canMoveDisk();
   updateView();
}

function moveMediumDisk(toTowerIndex) {
   mediumDiskTowerIndex = checkDiskIndex(toTowerIndex);
   canMoveDisk();
   updateView();
}

function moveLargeDisk(toTowerIndex) {
   largeDiskTowerIndex = checkDiskIndex(toTowerIndex);
   canMoveDisk();
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

function canMoveDisk() {
   const pos = [0, 1, 2];
   let state = getState();


   for (let i = 0; i < state.length; i++) {
      const isSmallDisabled = state[0] === pos[i];
      disableBtn(disableButtons, pos[i], isSmallDisabled);

      const isMediumDisabled = state.slice(0, 2).includes(pos[i]);
      disableBtn(disableButtons, pos[i] + mediumButtonsRangeOffset, isMediumDisabled);

      const isLargeDisabled = state.slice(0, 3).includes(pos[i]);
      disableBtn(disableButtons, pos[i] + largeButtonsRangeOffset, isLargeDisabled);

      if (state[0] === state[1]) disableBtn(disableButtons, pos[i] + mediumButtonsRangeOffset, true);

      if (state[0] === state[2] || state[1] === state[2]) disableBtn(disableButtons, pos[i] + largeButtonsRangeOffset, true);
   }
   solvedHanoiGame();
}


function solvedHanoiGame() {
   const state = getState();

   const isSolved = (diskPositions) => diskPositions === 2;
   state.every(isSolved) ? solved = true : false;
}