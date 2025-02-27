// model
//   hvor er diskene, 0 = venstre tårn, 1 = midten, 2 = høyre
//   alle starter til venstre
let smallDiskTowerIndex = 0;
let mediumDiskTowerIndex = 0;
let largeDiskTowerIndex = 0;

let smallDisable = [true, false, false];
let mediumDisable = [true, false, false];
let largeDisable = [true, false, false];

// let state = getState();

// view 
updateView();

function updateView() {
   document.getElementById('app').innerHTML = /*HTML*/ `
         <div class="game-container">
            <div class="tower-container">
               <div class="tower">
                  ${drawDisks(0)}
               </div>
            </div>
            <div class="tower-container">
                  <div class="tower">
                     ${drawDisks(1)}
                  </div>
            </div>
            <div class="tower-container">
                  <div class="tower">
                     ${drawDisks(2)};
                  </div>
            </div>
         </div>
            Flytt liten disk til 
            <button onclick="moveSmallDisk(0)" ${smallDisable[0] ? 'disabled' : ''}>venstre tårn</button>
            <button onclick="moveSmallDisk(1)" ${smallDisable[1] ? 'disabled' : ''}>midtre tårn</button>
            <button onclick="moveSmallDisk(2)" ${smallDisable[2] ? 'disabled' : ''}>høyre tårn</button>
            <br/>
            Flytt medium disk
            <button onclick="moveMediumDisk(0)" ${mediumDisable[0] ? 'disabled' : ''}>venstre tårn</button>
            <button onclick="moveMediumDisk(1)" ${mediumDisable[1] ? 'disabled' : ''}>midtre tårn</button>
            <button onclick="moveMediumDisk(2)" ${mediumDisable[2] ? 'disabled' : ''}>høyre tårn</button>
            <br/>
            Flytt stor disk
            <button onclick="moveLargeDisk(0)" ${largeDisable[0] ? 'disabled' : ''}>venstre tårn</button>
            <button onclick="moveLargeDisk(1)" ${largeDisable[1] ? 'disabled' : ''}>midtre tårn</button>
            <button onclick="moveLargeDisk(2)" ${largeDisable[2] ? 'disabled' : ''}>høyre tårn</button>
            <br/>
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


// controller
function moveSmallDisk(toTowerIndex) {

   smallDiskTowerIndex = checkDiskIndex(toTowerIndex);
   canMove();
   // getState();
   updateView();
}

function moveMediumDisk(toTowerIndex) {

   mediumDiskTowerIndex = checkDiskIndex(toTowerIndex);
   canMove();
   // getState();
   updateView();
}

function moveLargeDisk(toTowerIndex) {

   largeDiskTowerIndex = checkDiskIndex(toTowerIndex);
   canMove();

   // getState();
   updateView();
}

function checkDiskIndex(index) {
   switch (index) {
      case 0:
         return 0;
      case 1:
         return 1;
      case 2:
         return 2;
   }
}

function getState() {
   return [smallDiskTowerIndex, mediumDiskTowerIndex, largeDiskTowerIndex];
}

function disableBtn(btnType, index, value) {
   btnType[index] = value;
}

function canMove() {
   let pos = [];
   let state = getState();

   for (let i = 0; i < state.length; i++) {
      pos.push(i);
      // state[0] === positions[i] ? disableBtn(smallDisable, positions[i], true) : disableBtn(smallDisable, positions[i], false)
      // state[1] === positions[i] || state[0] === positions[i] ? disableBtn(mediumDisable, positions[i], true) : disableBtn(mediumDisable, positions[i], false)
      // state[2] === positions[i] || state[0] === positions[i] || state[1] === positions[i] ? disableBtn(largeDisable, positions[i], true) : disableBtn(largeDisable, positions[i], false)

      console.log("current Disk", pos);
      console.log("Value at state index", state[i]);

      const isSmallDisabled = state.slice(0, 1).includes(pos[i]);
      const isMediumDisabled = state.slice(0, 2).includes(pos[i]);
      const isLargeDisabled = state.slice(0, 3).includes(pos[i]);



      // const isLargeDisabledT3 = positions[i] === state[2];

      // if (isLargeDisabledT3) {
      //    disableBtn(largeDisable, positions[i], isLargeDisabled);
      // }

      disableBtn(smallDisable, pos[i], isSmallDisabled);
      disableBtn(mediumDisable, pos[i], isMediumDisabled);
      disableBtn(largeDisable, pos[i], isLargeDisabled);

      // disableBtn(smallDisable, positions[i], isSmallDisabledT);
      // disableBtn(mediumDisable, positions[i], isMediumDisabledT2);
      // disableBtn(largeDisable, positions[i], isLargeDisabledT3);


   }
}