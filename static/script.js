document.getElementById("error").style.display = "none"


function processBook(event) {
    event.preventDefault();

    const bookInput = document.getElementById("book").value;

    if (!bookInput) {
        document.getElementById("error").style.display = "block"
    } else {
        document.getElementById("error").style.display = "none"
        document.getElementById("form").submit();
    }
}