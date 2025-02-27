// view 
updateView();

function updateView() {
    
    let towerLeft = '';
    let towerMiddle = '';
    let towerRight = '';

    if (largeDiskTowerIndex === 0) {
        towerLeft += `<div class="disk" style="width: 70px"></div>`;
    }
    if (largeDiskTowerIndex === 1) {
        towerMiddle += `<div class="disk" style="width: 70px"></div>`;
    }
    if (largeDiskTowerIndex === 2) {
        towerRight += `<div class="disk" style="width: 70px"></div>`;
    }

    if (mediumDiskTowerIndex === 0) {
        towerLeft += `<div class="disk" style="width: 50px"></div>`;
    }
    if (mediumDiskTowerIndex === 1) {
        towerMiddle += `<div class="disk" style="width: 50px"></div>`;
    }
    if (mediumDiskTowerIndex === 2) {
        towerRight += `<div class="disk" style="width: 50px"></div>`;
    }

    if (smallDiskTowerIndex === 0) {
        towerLeft += `<div class="disk" style="width: 30px"></div>`;
    }
    if (smallDiskTowerIndex === 1) {
        towerMiddle += `<div class="disk" style="width: 30px"></div>`;
    }
    if (smallDiskTowerIndex === 2) {
        towerRight += `<div class="disk" style="width: 30px"></div>`;
    }

    console.log('towerLeft:', towerLeft);
    console.log('towerMiddle:', towerMiddle);
    console.log('towerRight:', towerRight);

    document.getElementById('app').innerHTML = /*HTML*/`
         <div class="game-container">
            <div class="tower-container">
               <div class="tower">
                  ${towerLeft}
               </div>
            </div>
            <div class="tower-container">
               <div class="tower">
                  ${towerMiddle}
               </div>
            </div>
            <div class="tower-container">
               <div class="tower">
                  ${towerRight}
               </div>
            </div>
         </div>

         Flytt liten disk til 
         <button onclick="moveSmallDisk(0)">venstre tårn</button>
         <button onclick="moveSmallDisk(1)">midtre tårn</button>
         <button onclick="moveSmallDisk(2)">høyre tårn</button>
         <br/>

         Flytt medium disk
         <button onclick="moveMediumDisk(0)">venstre tårn</button>
         <button onclick="moveMediumDisk(1)">midtre tårn</button>
         <button onclick="moveMediumDisk(2)">høyre tårn</button>
         <br/>

         Flytt stor disk
         <button onclick="moveLargeDisk(0)">venstre tårn</button>
         <button onclick="moveLargeDisk(1)">midtre tårn</button>
         <button onclick="moveLargeDisk(2)">høyre tårn</button>
         <br/>
      `;
}
