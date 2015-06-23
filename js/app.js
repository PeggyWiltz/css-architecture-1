if('querySelector' in document
    && 'localStorage' in window
    && 'addEventListener' in window) {

    function init() {
      var postOne = document.querySelector("#post-one");
      postOne.classList.add("collapse");
      var postTwo = document.querySelector("#post-two")
      postTwo.classList.toggle("collapse");
      var postThree = document.querySelector("#post-three")
      postThree.classList.toggle("collapse");

      postOne.addEventListener("click", collapseOne, false);
      postTwo.addEventListener("click", collapseOne, false);
      postThree.addEventListener("click", collapseOne, false);
    }

    function collapseOne() {
    var postOne = document.querySelector("#post-one");
    postOne.classList.toggle("collapse");
  }

    function collapseTwo() {
    var postTwo = document.querySelector("#post-two");
    postTwo.classList.toggle("collapse");
  }

    function collapseThree() {
    var postThree = document.querySelector("#post-three");
    postThree.classList.toggle("collapse");
  }
}
