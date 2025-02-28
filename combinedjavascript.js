let smallDiskTowerIndex = 0;
let mediumDiskTowerIndex = 0;
let largeDiskTowerIndex = 0;

let smallDisable = [false, false, false];
let mediumDisable = [true, true, true];
let largeDisable = [true, true, true];


updateView()
function updateView() {
   let towerLeftDisks = '';
   let towerMiddleDisks = '';
   let towerRightDisks = '';
   let smallDisk = '<div class="disk" style="width: 30px"></div>';
   let mediumDisk = '<div class="disk" style="width: 50px"></div>';
   let largeDisk = '<div class="disk" style="width: 70px"></div>';

   if (largeDiskTowerIndex === 0) {
      towerLeftDisks += largeDisk;
   }
   if (largeDiskTowerIndex === 1) {
      towerMiddleDisks += largeDisk;
   }
   if (largeDiskTowerIndex === 2) {
      towerRightDisks += largeDisk;
   }

   if (mediumDiskTowerIndex === 0) {
      towerLeftDisks += mediumDisk;
   }
   if (mediumDiskTowerIndex === 1) {
      towerMiddleDisks += mediumDisk;
   }
   if (mediumDiskTowerIndex === 2) {
      towerRightDisks += mediumDisk;
   }

   if (smallDiskTowerIndex === 0) {
      towerLeftDisks += smallDisk;
   }
   if (smallDiskTowerIndex === 1) {
      towerMiddleDisks += smallDisk;
   }
   if (smallDiskTowerIndex === 2) {
      towerRightDisks += smallDisk;
   }

   document.getElementById('app').innerHTML = /*HTML*/`
   <div class="game-container">
   <div class="tower-container">
      <div class="tower">
         ${towerLeftDisks}
      </div>
   </div>
   <div class="tower-container">
      <div class="tower">
         ${towerMiddleDisks}
      </div>
   </div>
   <div class="tower-container">
      <div class="tower">
         ${towerRightDisks}
      </div>
   </div>
</div>
      <div class="buttons">
         ${createButtonsHtml('small',smallDisable)}
         ${createButtonsHtml('medium',mediumDisable)}
         ${createButtonsHtml('large',largeDisable)}
      </div>
      `;
}

function createButtonsHtml(size,disableButton) {
   return /*HTML*/ `
   <div id="${size}">
   Move ${size} Disk
      <button onclick="moveDisk('${size}',0)" ${disableButton[0] ? 'disabled' : ''}>Venstre tårn</button>
      <button onclick="moveDisk('${size}',1)" ${disableButton[1] ? 'disabled' : ''}>Midtre tårn</button>
      <button onclick="moveDisk('${size}',2)"${disableButton[2] ? 'disabled' : ''}>Høyre tårn</button>
   </div>
   `;
}

function moveDisk(size,newPos) {
   if (size == 'small') 
      smallDiskTowerIndex = newPos;
      disableButtons()
   if (size == 'medium' && smallDiskTowerIndex != newPos && mediumDiskTowerIndex != smallDiskTowerIndex) 
      mediumDiskTowerIndex = newPos;
      disableButtons()
   if (size == 'large' && smallDiskTowerIndex != newPos && mediumDiskTowerIndex != newPos 
      && largeDiskTowerIndex != smallDiskTowerIndex && largeDiskTowerIndex != mediumDiskTowerIndex) 
      largeDiskTowerIndex = newPos;
      disableButtons()
   
   updateView()
   }

   function disableButtons() {
      let pos = [];
      let disksIndex = [smallDiskTowerIndex, mediumDiskTowerIndex, largeDiskTowerIndex];
      
      for (let i = 0; i < disksIndex.length; i++) {
         pos.push(i);

      const isSmallDisabled = disksIndex.slice(0, 1).includes(pos[i]);
      const isMediumDisabled = disksIndex.slice(0, 2).includes(pos[i]);
      const isLargeDisabled = disksIndex.slice(0, 3).includes(pos[i]);

      disableBtn(smallDisable, pos[i], isSmallDisabled);
      disableBtn(mediumDisable, pos[i], isMediumDisabled);
      disableBtn(largeDisable, pos[i], isLargeDisabled);
      }
   }

   function disableBtn(btnType,index,value) {
      btnType[index] = value;
   }