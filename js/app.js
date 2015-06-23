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


      var postOneHeading = document.querySelector("#post-one-heading")
      var postTwoHeading = document.querySelector("#post-two-heading")
      var postThreeHeading = document.querySelector("#post-three-heading")
      postOneHeading.addEventListener("click", collapseOne, false);
      postTwoHeading.addEventListener("click", collapseTwo, false);
      postThreeHeading.addEventListener("click", collapseThree, false);
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
