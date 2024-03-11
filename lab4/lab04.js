let title;

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))


async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const json = await response.json();
        title = json.title;
        console.log(json);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

fetchData();

const btn = document.getElementById('doBtn');
headingElement = document.getElementById('head');

btn.addEventListener('click', function() {
    headingElement.textContent = title;
});
