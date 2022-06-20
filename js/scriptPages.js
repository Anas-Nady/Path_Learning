// Filter Books
let allBook = Array.from(document.querySelectorAll(".main-box-books .book"));
let allBtnFilterBook = Array.from(
  document.querySelectorAll(".filte-books div")
);
let dateNow = new Date();
let setDateInFooter = document.querySelector("footer .date");

// Set Date Created Website In Footer
setDateInFooter.innerHTML = dateNow.getFullYear();

// filter Books
allBtnFilterBook.forEach((btn) => {
  btn.addEventListener("click", removeActive);
  btn.addEventListener("click", manageBooks);
});

function removeActive() {
  allBtnFilterBook.forEach((btn) => {
    btn.classList.remove("active");
    this.classList.add("active");
  });
}

function manageBooks() {
  allBook.forEach((book) => {
    book.classList.add("d-none");
  });

  document.querySelectorAll(this.dataset.book).forEach((book) => {
    book.classList.remove("d-none");
  });
}

let tipsQuestion = document.querySelectorAll(".box-tips .question");

tipsQuestion.forEach((e) => {
  e.addEventListener("click", (e) => {
    tipsQuestion.forEach((e) => e.classList.remove("active"));

    e.target.classList.add("active");
  });
});
