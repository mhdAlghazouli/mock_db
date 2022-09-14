const table = document.getElementById('table');
const btn = document.getElementById('btn')
let header = ` <tr>
<th class="has-background-danger">Name</th>
<th class="has-background-danger">Alter Ego</th>
<th class="has-background-danger">Universe</th>
<th class="has-background-danger">Powers</th>
<th class="has-background-danger">Arch Enemy</th>
</tr>`
let inner = ''
let inner2 = ''

window.addEventListener('DOMContentLoaded', (e) => {
  e.preventDefault();
  inner += header;
  inner += render(heroes);
  table.innerHTML = inner;

  btn.addEventListener('click', () => {
    heroes.sort( compare );
    inner2 += header;
    inner2 += render(heroes);
    table.innerHTML = inner2;
    btn.disabled = 'true';
  });
  
});