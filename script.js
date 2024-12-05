document.getElementById('search-btn').addEventListener('click', function () {
    const input = document.getElementById('chord-input').value.trim();
    const resultsList = document.getElementById('results-list');
    
    // Simula busca de músicas (exemplo para teste)
    const songs = [
        { title: "Song 1", chords: "C G Am F" },
        { title: "Song 2", chords: "G D Em C" },
        { title: "Song 3", chords: "Am F C G" },
    ];

    const matches = songs.filter(song => song.chords.includes(input));
    resultsList.innerHTML = matches.length 
        ? matches.map(match => `<li>${match.title} (Chords: ${match.chords})</li>`).join('')
        : '<li>No matches found.</li>';
});

document.getElementById('submit-comment').addEventListener('click', function () {
    const comment = document.getElementById('comment-box').value.trim();
    const commentsList = document.getElementById('comments-list');
    if (comment) {
        const li = document.createElement('li');
        li.textContent = comment;
        commentsList.appendChild(li);
        document.getElementById('comment-box').value = '';
    } else {
        alert('Please write a comment!');
    }
});
