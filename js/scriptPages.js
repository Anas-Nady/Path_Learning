// Filter Books
let allBook = Array.from(document.querySelectorAll(".main-box-books .book"));
let allBtnFilterBook = Array.from(
  document.querySelectorAll(".filte-books div")
);

function filteBooks(allbooks, jsbooks, cleancodeBooks) {
  allBtnFilterBook.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      allBtnFilterBook.forEach((e) => {
        e.classList.remove("active");
      });

      e.target.classList.add("active");
    });

    btn.addEventListener("click", (e) => {
      if (e.target.classList.contains(allbooks)) {
        allBook.forEach((book) => {
          book.classList.remove("d-none");
        });
      }

      if (e.target.classList.contains(jsbooks)) {
        allBook.forEach((book) => {
          book.classList.add("d-none");

          if (book.classList.contains("js-books")) {
            book.classList.remove("d-none");
          }
        });
      }

      if (e.target.classList.contains(cleancodeBooks)) {
        allBook.forEach((book) => {
          book.classList.add("d-none");

          if (book.classList.contains(cleancodeBooks)) {
            book.classList.remove("d-none");
          }
        });
      }
    });
  });
}

filteBooks("all-books", "js-books", "cleanCode-books");
