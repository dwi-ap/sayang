const canvas = document.getElementById('heartCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawHeart(x, y, size, color) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.bezierCurveTo(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
    ctx.bezierCurveTo(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
    ctx.fillStyle = color;
    ctx.fill();
    
    // Adding jump effect
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(1.2, 1.2); // Scale up the heart
    ctx.fillStyle = color;
    ctx.fill();
    ctx.restore();
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.bezierCurveTo(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
    ctx.bezierCurveTo(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
    ctx.fillStyle = color;
    ctx.fill();
}

document.getElementById('heartBtn').addEventListener('click', () => {
    const colors = ['#ff6f61', '#ff3b2f', '#f94c66', '#fa8072'];
    setInterval(() => {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 50 + 10;
        const color = colors[Math.floor(Math.random() * colors.length)];
        drawHeart(x, y, size, color);
    }, 100);
});
