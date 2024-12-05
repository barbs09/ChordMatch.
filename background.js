const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');

canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.width = '100%';
canvas.style.height = '100%';
canvas.style.zIndex = '-1'; // Mantém o fundo atrás de tudo

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

const colors = ['#7B1FA2', '#E91E63']; // Tons de roxo escuro e rosa
const notes = ['♪', '♫', '♩', '♬']; // Notas musicais

function drawWave() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Desenha ondas
    for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height / (3 - i));
        for (let x = 0; x < canvas.width; x++) {
            ctx.lineTo(
                x,
                canvas.height / (3 - i) +
                Math.sin(x * 0.01 + i * 100) * 20 * (3 - i)
            );
        }
        ctx.strokeStyle = colors[i % colors.length];
        ctx.lineWidth = 2;
        ctx.stroke();
    }

    // Desenha notas musicais
    for (let i = 0; i < 10; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const note = notes[Math.floor(Math.random() * notes.length)];
        ctx.font = `${Math.random() * 20 + 10}px Arial`;
        ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
        ctx.fillText(note, x, y);
    }

    requestAnimationFrame(drawWave);
}

drawWave();
