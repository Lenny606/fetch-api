const url = 'https://dummyjson.com/products/1'
const urlPost = 'https://dummyjson.com/products/add'
const container = document.getElementById('data-container');
fetch(url, {

})
    .then(response => response.json())
    .then(data => {

        container.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    })
    .catch(err => {

        container.innerHTML = `<p style="color: red;">Error fetching data: ${err.message}</p>`;
        console.log(err)
    }
    )

//POST

document.getElementById('post-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;
    const rating = document.getElementById('rating').value;

    fetch(urlPost, {
        method: 'POST',
        headers: {
            "Content-type": 'application/json'
        },
        body: JSON.stringify({
            description: description,
            price: price,
            rating: rating
        })
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            alert('Data submitted successfully!');
        })
        .catch(err => {
            console.log(err);
            alert('Error submitting data: ' + err.message);
        });
});