document.getElementById('local-guide-btn').addEventListener('click', function() {
    document.getElementById('local-guide-form').classList.remove('hidden');
    document.getElementById('traveler-form').classList.add('hidden');
    document.getElementById('guide-posts').classList.add('hidden');
});

document.getElementById('traveler-btn').addEventListener('click', function() {
    document.getElementById('traveler-form').classList.remove('hidden');
    document.getElementById('local-guide-form').classList.add('hidden');
    document.getElementById('guide-posts').classList.add('hidden');
});

document.getElementById('find-guides-btn').addEventListener('click', function() {
    var location = document.getElementById('location').value;
    if(location !== '') {
        document.getElementById('guide-posts').classList.remove('hidden');
        // You can add logic here to fetch and display local guide's posts based on location
    } else {
        alert('Please enter a location to find guides.');
    }
});