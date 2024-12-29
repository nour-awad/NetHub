
function createSparkles() {
    const container = document.getElementById('sparkles-container');
    
    for (let i = 0; i < 30; i++) { 
      const sparkle = document.createElement('div');
      sparkle.classList.add('sparkle');
      
      
      const xPosition = Math.random() * window.innerWidth;
      const yPosition = Math.random() * window.innerHeight;
      sparkle.style.left = `${xPosition}px`;
      sparkle.style.top = `${yPosition}px`;
      
      
      container.appendChild(sparkle);
      
      
      setTimeout(() => {
        sparkle.remove();
      }, Math.random() * 2000 + 1000);
    }
  }
  
  
  setInterval(createSparkles, 1000);
  