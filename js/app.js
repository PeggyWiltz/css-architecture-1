if('querySelector' in document
    && 'localStorage' in window
    && 'addEventListener' in window) {

    var paragraph = document.querySelector("#post-one")
    paragraph.classList.add("collapse");

    var paragraph = document.querySelector("#post-two")
    paragraph.classList.add("collapse");

    var paragraph = document.querySelector("#post-three")
    paragraph.classList.add("collapse");

    function collapseOne() {
    var paragraph = document.querySelector("#post-one");
    paragraph.classList.toggle("collapse");
  }

    function collapseTwo() {
    var paragraph = document.querySelector("#post-two");
    paragraph.classList.toggle("collapse");
  }

    function collapseThree() {
    var paragraph = document.querySelector("#post-three");
    paragraph.classList.toggle("collapse");
  }
}
