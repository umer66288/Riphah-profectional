//  Footer-script
const currentYear = new Date().getFullYear();
document.getElementById('copyright').innerText = `© ${currentYear} All rights reserved By Riphah International University Computer Science Department`;

//  Clock-script
function drawClock() {
    const canvas = document.getElementById('clock');
    const context = canvas.getContext('2d');
    const radius = canvas.width / 2;
    // Clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
    // Draw clock face
    context.beginPath();
    context.arc(radius, radius, radius - 5, 0, 2 * Math.PI);
    context.fillStyle = '#fff';
    context.fill();
    // Draw clock center
    context.beginPath();
    context.arc(radius, radius, 5, 0, 2 * Math.PI);
    context.fillStyle = '#333';
    context.fill();
    // Draw center dot
    context.beginPath();
    context.arc(radius, radius, 2, 0, 2 * Math.PI);
    context.fillStyle = '#333';
    context.fill();
    // Draw clock numbers, hour, minute, and second bars
    context.font = '12px Arial';
    context.fillStyle = '#333';
    context.textAlign = 'center';
    context.textBaseline = 'middle';

    for (let i = 1; i <= 12; i++) {
        const angle = (i - 3) * (Math.PI / 6);
        const x = radius + 0.8 * radius * Math.cos(angle);
        const y = radius + 0.8 * radius * Math.sin(angle);
        context.fillText(i.toString(), x, y);

        // Draw minute bars
        for (let j = 0; j < 60; j++) {
            const barLength = 1;
            const barWidth = 1;
            const barColor = '#35b4ff';
            const barAngle = (j - 15) * (Math.PI / 30);
            const barX1 = radius + 0.88 * radius * Math.cos(barAngle);
            const barY1 = radius + 0.88 * radius * Math.sin(barAngle);
            const barX2 = radius + (0.88 + barLength) * radius * Math.cos(barAngle);
            const barY2 = radius + (0.88 + barLength) * radius * Math.sin(barAngle);
            context.beginPath();
            context.moveTo(barX1, barY1);
            context.lineTo(barX2, barY2);
            context.lineWidth = barWidth;
            context.strokeStyle = barColor;
            context.stroke();
        }
    }
    // Draw clock hands
    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    drawHand(context, radius * 0.5, hours * 30 + (minutes / 60) * 30, 6, '#333');
    drawHand(context, radius * 0.7, minutes * 6 + (seconds / 60) * 6, 4, '#555');
    drawHand(context, radius * 0.9, seconds * 6, 2, '#ff0000');
    // Update every 1000ms (1 second)
    setTimeout(drawClock, 1000);
}

function drawHand(context, length, angle, width, color) {
    const x = context.canvas.width / 2;
    const y = context.canvas.height / 2;

    context.beginPath();
    context.lineWidth = width;
    context.lineCap = 'round';
    context.moveTo(x, y);
    context.lineTo(x + length * Math.cos((angle - 90) * Math.PI / 180),
        y + length * Math.sin((angle - 90) * Math.PI / 180));
    context.strokeStyle = color;
    context.stroke();
}
// Initial draw
drawClock();

// Function for Reload Page
function refreshBrowser() {
    // Reload the current page
    location.reload();
}
