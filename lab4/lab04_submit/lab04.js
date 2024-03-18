const button = document.getElementById('doBtn');
const list = document.getElementById('list');
countryTitle = document.getElementById('CountryNameTitle');
reg = document.getElementById('regId');
pop = document.getElementById('popId');
cap = document.getElementById('capitalId')
const list_items = document.createElement('ul');
const article = document.getElementById('article1');

button.addEventListener('click', function () {
    
    fetchData();
});

async function fetchData() {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all ');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        let info = await response.json();
        //console.log(info)
        countryDetails = info.filter(country => country.name.common == document.getElementById('country').value);
        countryTitle.textContent = countryDetails[0].name.common;
        cap.textContent += countryDetails[0].capital[0];
        reg.textContent += countryDetails[0].region;
        pop.textContent += countryDetails[0].population;

        document.getElementById("CountryImg").src = countryDetails[0].flags.png; 
        
        if(countryDetails[0].capital.length > 1){
            for (let i = 1; i < countryDetails[0].capital.length; i++) {
                cap.textContent += ", " + countryDetails[0].capital[i];
              }
        }
        list_items.style.listStyle='none';
        for(let i = 0; i < countryDetails[0].borders.length; i++){

            let neigh = info.filter(country => country.cca3 == countryDetails[0].borders[i]);
            var item = document.createElement('li');
            item.style.display = 'flex';
            item.style.justifyContent='space-between';
            item.style.flexDirection = 'row';
            item.style.alignItems = 'center';

            var htmlImg = document.createElement('img');
            htmlImg.src = neigh[0].flags.png;
            htmlImg.height= 20;
            htmlImg.width = 40

            var neigName = document.createElement('p');
            neigName.textContent = neigh[0].name.common;

            item.appendChild(neigName);
            item.appendChild(htmlImg);
            list_items.appendChild(item);
        }
        neig1 = info.filter(country => country.cca3 == "ZAF");
        neig1[0].name.common;
        console.log(countryDetails[0].borders);

        article.appendChild(list_items);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}
