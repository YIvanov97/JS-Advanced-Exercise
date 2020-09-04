function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onSearch);
   let input = document.querySelector('#searchField');

   function onSearch(e) {
      let query = input.value.trim().toLocaleLowerCase();
      if (query.trim().length > 0) {
         let tbody = document.querySelector('tbody')
         Array.from(tbody.querySelectorAll('tr')).forEach(r => {
            r.classList.remove('select')
         });

         Array.from(tbody.querySelectorAll('td')).forEach(d => {
            if (d.textContent.trim().toLocaleLowerCase().includes(query)) {
               d.parentNode.classList.add('select');
            }
         });
         input.value = '';
      }
   }
}