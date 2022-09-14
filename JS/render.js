

function render(objArr) {

  let heroesTable = objArr.map(hero => {
    
    let FP = Object.values(hero)[3][0];
    let SP = Object.values(hero)[3][1];
    let TP = Object.values(hero)[3][2];
    
    return `
            <tr>
              <th class="has-background-warning">${Object.values(hero)[0]}</th>
              <th class="has-background-warning">${Object.values(hero)[1]}</th>
              <th class="has-background-warning">${Object.values(hero)[2]}</th>
              <th class="has-background-warning">
                <ol class="ml-3">
                  <li>${FP}</li>
                  <li>${SP}</li>
                  <li>${TP}</li>
                </ol>
              </th>
              <th class="has-background-warning">${Object.values(hero)[4]}</th>
            </tr>
            `
  });
  
  return heroesTable.join('');
};


function compare( a, b ) {
  if ( a.name < b.name ){
    return -1;
  }
  if ( a.name > b.name ){
    return 1;
  }
  return 0;
}


