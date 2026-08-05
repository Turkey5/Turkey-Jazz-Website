// very basic json reader for the website 
// **very work in progress**
function readJsonFile(filePath) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('JSON data:', data);
            document.getElementById('jsonData').textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => console.error('Error reading JSON file:', error));
}