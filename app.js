// Year in the html
/* This JavaScript code snippet is retrieving the current year and updating the content of an HTML
element with the id 'year' to display that year. */
const yearHtml = document.getElementById('year')
const date = new Date().getFullYear()
yearHtml.innerText = date