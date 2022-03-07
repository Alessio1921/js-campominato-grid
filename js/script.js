let gridContainer=document.querySelector(".grid-easy");
// let gridContainerMidd=document.querySelector(".grid-middle");
// let gridContainerHard=document.querySelector(".grid-hard");
let choiseUser;

document.querySelector('button').addEventListener('click', function(){
  choiseUser=document.querySelector("select").value;
  // reset when you click another level
  reset(gridContainer);

  let squares;
  let numberSquare=0;
  gridContainer.innerHTML="";
  if(choiseUser === "easy"){
    numberSquare=100;
  }
  else if(choiseUser === "middle"){
      numberSquare=81;
    }
  else {
    numberSquare=49;
  }
  for (let i = 0; i < numberSquare; i++) {
    squares= createSquare();
    squares.classList.add(`${choiseUser}`); 
    gridContainer.appendChild(squares);
    gridContainer.classList.remove("d-none");
    // added click to square
    squares.addEventListener('click', function(){
      this.classList.add("active");
    })
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