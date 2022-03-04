let gridContainer=document.querySelector(".grid-easy");
let gridContainerMidd=document.querySelector(".grid-middle");
let gridContainerHard=document.querySelector(".grid-hard");
let choiseUser;
console.log(gridContainer);
document.querySelector('button').addEventListener('click', function(){
  choiseUser=document.querySelector("select").value;
  // reset when you click another level
  reset(gridContainer);
  reset(gridContainerMidd);
  reset(gridContainerHard);

  let squares;
  if(choiseUser === "easy"){
    for (let i = 0; i < 100; i++) {
      squares= createSquare();
      squares.classList.add("easy");
      gridContainer.classList.remove("d-none");
      gridContainer.appendChild(squares);
      // added click to square
      squares.addEventListener('click', function() {
        this.classList.toggle('active');
      })
    }
  }
  else if(choiseUser === "middle"){
    for (let i = 0; i < 81; i++) {
      squares= createSquare();
      squares.classList.add("middle");
      gridContainerMidd.appendChild(squares);
      gridContainerMidd.classList.remove("d-none");
      // added click to square
      squares.addEventListener('click', function(){
        this.classList.toggle("active")
      })
    }
  }
  else{
    for (let i = 0; i < 49; i++) {
      squares= createSquare();
      squares.classList.add("hard");
      gridContainerHard.appendChild(squares);
      gridContainerHard.classList.remove("d-none")
      // added click to square
      squares.addEventListener('click', function(){
        this.classList.toggle("active")
      })
    }
  }
})
/** function that creates a div with class square
 * 
 * @returns 
 */
function createSquare() {
  let square=document.createElement('div');
  square.classList.add("square");
  return square;
}
/**function that adds the class d-none
 * 
 * @param {*} gridTemp 
 * @returns 
 */
function reset(gridTemp){
  gridTemp.classList.add("d-none");
  return gridTemp;
}