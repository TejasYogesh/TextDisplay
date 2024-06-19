var btn = document.getElementById('btn');

btn.addEventListener('click', function () {
    var inputText = document.getElementById('inputText').value;

    document.getElementById('pass').innerHTML = inputText;
    if (inputText === '') {
        document.getElementById('pass').innerHTML = 'No Text to Display'
        alert("Please Enter the Details")

    }

})

