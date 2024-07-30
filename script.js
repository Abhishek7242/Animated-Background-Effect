document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');

    function createDivs() {
        for (let i = 0; i < 4; i++) {
            const div = document.createElement('div');
            div.classList.add('moving-div');

            // Randomly assign one of the colors
            const colors = ['#e52165', '#12a4d9 '];
            const color = colors[Math.floor(Math.random() * colors.length)];
            div.style.backgroundColor = color;

            // Initially set box-shadow to none, and use the background color for shadow at the top
            div.style.boxShadow = `0 0 0 ${color}`;

            // Randomly set the size
            const size = Math.random() * 40 + 20; // 20px to 60px
            div.style.width = `${size}px`;
            div.style.height = `${size}px`;

            // Randomly set the horizontal position
            const left = Math.random() * (window.innerWidth - size);
            div.style.left = `${left}px`;

            // Randomly set the animation duration
            const duration = Math.random() * 4 + 12;
            
            div.style.setProperty('--animation-duration', `${duration}s`);
            div.style.setProperty('--box-shadow-color', color); // Set custom property for animation

            container.appendChild(div);
            div.addEventListener('animationend', () => {
                div.remove();
            });
        }
    }

    // Create new divs every 1000ms
    setInterval(createDivs, 1000);
});

