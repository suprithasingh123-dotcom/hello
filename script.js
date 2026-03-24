document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('stepsChart').getContext('2d');
    
    // Gradient definition for the line
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(255, 182, 193, 0.6)'); // Soft pink
    gradient.addColorStop(1, 'rgba(255, 182, 193, 0.0)'); // Transparent

    // Sample data for the last 7 days
    const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const data = [6500, 7200, 5800, 8900, 10500, 9200, 8245];

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Steps',
                data: data,
                borderColor: '#ff9fb2', // Pastel pink
                backgroundColor: gradient,
                borderWidth: 4,
                pointBackgroundColor: '#ffffff',
                pointBorderColor: '#ff9fb2',
                pointBorderWidth: 3,
                pointRadius: 6,
                pointHoverRadius: 8,
                fill: true,
                tension: 0.5 // Extra smooth curves
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false // Hide legend for cleaner look
                },
                tooltip: {
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    titleColor: '#8b8b8b',
                    bodyColor: '#ff9fb2',
                    titleFont: { family: "'Poppins', sans-serif", size: 13 },
                    bodyFont: { family: "'Poppins', sans-serif", size: 14, weight: 'bold' },
                    borderColor: '#ffe8ec',
                    borderWidth: 2,
                    padding: 15,
                    displayColors: false,
                    cornerRadius: 15,
                    callbacks: {
                        label: function(context) {
                            return context.parsed.y.toLocaleString() + ' steps 🐾';
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false,
                        drawBorder: false
                    },
                    ticks: {
                        color: '#8b8b8b',
                        font: {
                            family: "'Poppins', sans-serif",
                            weight: 500
                        }
                    }
                },
                y: {
                    grid: {
                        color: 'rgba(255, 182, 193, 0.2)', // Faint pink grid
                        drawBorder: false,
                        borderDash: [5, 5] // Cute dashed lines
                    },
                    ticks: {
                        color: '#8b8b8b',
                        font: {
                            family: "'Poppins', sans-serif",
                            weight: 500
                        },
                        stepSize: 2000,
                        callback: function(value) {
                            return value.toLocaleString();
                        }
                    },
                    beginAtZero: true
                }
            },
            interaction: {
                intersect: false,
                mode: 'index',
            },
        }
    });
});
