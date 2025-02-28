// model
//   hvor er diskene, 0 = venstre tårn, 1 = midten, 2 = høyre
//   alle starter til venstre
let smallDiskTowerIndex = 0;
let mediumDiskTowerIndex = 0;
let largeDiskTowerIndex = 0;

// let disableButtons = [true, false, false, true, true, true, true, true, true];
// const mediumButtonsRangeOffset = 3;
// const largeButtonsRangeOffset = 6;


let disableSmallButton = [true, false, false];
let disableMediumButton = [true, true, true];
let disableLargeButton = [true, true, true];



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

   ${createDiskButtonsHtml('moveSmallDisk', 'Flytt liten disk til')}
   ${createDiskButtonsHtml('moveMediumDisk', 'Flytt medium disk')}
   ${createDiskButtonsHtml('moveLargeDisk', 'Flytt stor disk')}
   
      `
      : document.getElementById('app').innerHTML = /*html*/ `
      <div>Spillet løst</div>
      ${createButtonHtml('restart', 'Start nytt spill')}
   `;
}

function createDiskButtonsHtml(diskType, buttonText) {
   const labels = ['venstre tårn', 'midtre tårn', 'høyre tårn'];
   let buttonHtml = `<br/>${buttonText}`;

   labels.forEach((label, index) => {
      buttonHtml += createButtonHtml(diskType, label, index)
   })

   return buttonHtml;
}
function createButtonHtml(onclick, label, index) {
   return /*html*/ `
      <button onclick="${onclick}(${index})" ${isDisabled(onclick, index)}>
         ${label}
      </button>
   `;
}
function isDisabled(type, index) {
   if (type === 'moveSmallDisk') return disableSmallButton[index] ? 'disabled' : '';
   if (type === 'moveMediumDisk') return disableMediumButton[index] ? 'disabled' : '';
   if (type === 'moveLargeDisk') return disableLargeButton[index] ? 'disabled' : '';


   // use if using disableButtons with offset variables;

   // if (type === 'moveSmallDisk') return disableButtons[index] ? 'disabled' : '';
   // if (type === 'moveMediumDisk') return disableButtons[index + mediumButtonsRangeOffset] ? 'disabled' : '';
   // if (type === 'moveLargeDisk') return disableButtons[index + largeButtonsRangeOffset] ? 'disabled' : '';

}

function drawDisks(position) {
   return /*html*/ `
      ${largeDiskTowerIndex === position ? createLargeDiskHtml() : ''}
      ${mediumDiskTowerIndex === position ? createMediumDiskHtml() : ''}
      ${smallDiskTowerIndex === position ? createSmallDiskHtml() : ''}
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

function getDiskState() {
   return [smallDiskTowerIndex, mediumDiskTowerIndex, largeDiskTowerIndex];
}

function disableButton(buttonType, index, value) {
   buttonType[index] = value;
}

function canMoveDisk() {
   const positions = [0, 1, 2];
   let diskState = getDiskState();

   for (index in diskState) {
      isAllowedToMove(diskState, positions, index);
   }

   // for (let i = 0; i < diskState.length; i++) {
   //    isAllowedToMove(diskState, positions, i);
   // }
   isGameSolved();
}

function isAllowedToMove(diskState, positions, index) {
   let smallDiskIndex = 0;
   let mediumDiskIndex = 1;
   let largeDiskIndex = 2;

   const isSmallDisabled = diskState[smallDiskIndex] === positions[index];
   disableButton(disableSmallButton, positions[index], isSmallDisabled);

   const isMediumDisabled = diskState.slice(0, 2).includes(positions[index]);
   disableButton(disableMediumButton, positions[index], isMediumDisabled);

   const isLargeDisabled = diskState.slice(0, 3).includes(positions[index]);
   disableButton(disableLargeButton, positions[index], isLargeDisabled);

   if (diskState[smallDiskIndex] === diskState[mediumDiskIndex])
      disableButton(disableMediumButton, positions[index], true);
   if (diskState[smallDiskIndex] === diskState[largeDiskIndex] || diskState[mediumDiskIndex] === diskState[largeDiskIndex])
      disableButton(disableLargeButton, positions[index], true);


   // use if using disableButtons with offset variables;

   // const isSmallDisabled = diskState[0] === positions[i];
   // disableButton(disableButtons, positions[i], isSmallDisabled);

   // const isMediumDisabled = diskState.slice(0, 2).includes(positions[i]);
   // disableButton(disableButtons, positions[i] + mediumButtonsRangeOffset, isMediumDisabled);

   // const isLargeDisabled = diskState.slice(0, 3).includes(positions[i]);
   // disableButton(disableButtons, positions[i] + largeButtonsRangeOffset, isLargeDisabled);

   // if (diskState[0] === diskState[1]) disableButton(disableButtons, positions[i] + mediumButtonsRangeOffset, true);

   // if (diskState[0] === diskState[2] || diskState[1] === diskState[2]) disableButton(disableButtons, positions[i] + largeButtonsRangeOffset, true);
}

function isGameSolved() {
   const diskState = getDiskState();
   let solvedDiskPositions = 2

   const isSolved = (diskPositions) => diskPositions === solvedDiskPositions;
   diskState.every(isSolved) ? solved = true : false;
}

// set in controller or in view?
function restart() {
   smallDiskTowerIndex = 0;
   mediumDiskTowerIndex = 0;
   largeDiskTowerIndex = 0;
   solved = false;
   updateView();
}