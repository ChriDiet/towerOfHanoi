// model
//   hvor er diskene, 0 = venstre tårn, 1 = midten, 2 = høyre
//   alle starter til venstre
let smallDiskTowerIndex = 0;
let mediumDiskTowerIndex = 0;
let largeDiskTowerIndex = 0;

// view 
updateView();
function updateView() {
   document.getElementById('app').innerHTML = /*HTML*/`
         <div class="game-container">
            <div class="tower-container">
               <div class="tower">
                  <div class="disk" style="width: 70px"></div>                            
               </div>
            </div>
            <div class="tower-container">
                  <div class="tower">
                     <div class="disk" style="width: 50px"></div>
                  </div>
            </div>
            <div class="tower-container">
                  <div class="tower">
                     <div class="disk" style="width: 30px"></div>                            
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

// controller
function moveSmallDisk(toTowerIndex) {

   updateView();
}

function moveMediumDisk(toTowerIndex) {

   updateView();
}

function moveLargeDisk(toTowerIndex) {

   updateView();
}