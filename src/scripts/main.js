'use strict';

// write code here
const tableHead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');
const rows = [...tableBody.rows];

function toNumbers(string) {
  return +string.replace(/[$,]/g, '');
}

function sortBy(filter) {
  switch (filter) {
    case 'Name':
      rows.sort(
        (a, b) => a.children[0].innerHTML.localeCompare(b.children[0].innerHTML)
      );
      break;
    case 'Position':
      rows.sort(
        (a, b) => a.children[1].innerHTML.localeCompare(b.children[1].innerHTML)
      );
      break;
    case 'Age':
      rows.sort((a, b) => +a.children[2].innerHTML - +b.children[2].innerHTML);
      break;
    case 'Salary':
      rows.sort(
        (a, b) => toNumbers(a.children[3].innerHTML)
          - toNumbers(b.children[3].innerHTML)
      );
      break;
  }

  rows.forEach(row => {
    tableBody.append(row);
  });
}

tableHead.addEventListener('click', e => {
  if (e.target.tagName !== 'TH') {
    return;
  }

  sortBy(e.target.innerHTML);
});
