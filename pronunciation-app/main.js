let currentSlideIndex = 0;
let slidesData = [];
let currentAudio = null;
let lastNavTime = 0; // debounce guard: prevents double-click skipping

function navigate(delta) {
    const now = Date.now();
    if (now - lastNavTime < 3000) return; // ignore if clicked within x ms
    lastNavTime = now;

    const next = currentSlideIndex + delta;
    if (next < 0 || next > slidesData.length - 1) return;
    currentSlideIndex = next;
    renderSlide();
    updateNavigation();
}


document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            slidesData = data;
            // Prepend special intro slide
            slidesData.unshift({ type: 'intro' });
            renderSlide();
            updateNavigation();
        })
        .catch(error => {
            console.error('Error loading data:', error);
            document.getElementById('slide-container').innerHTML = `<p style="color:red">Error loading presentation data. Please check data.json exists.</p>`;
        });

    document.getElementById('prev-btn').addEventListener('click', (e) => {
        e.currentTarget.blur(); // prevent the button staying focused and capturing arrow keys
        if (currentSlideIndex > 0) {
            currentSlideIndex--;
            renderSlide();
            updateNavigation();
        }
    });

    document.getElementById('next-btn').addEventListener('click', (e) => {
        e.currentTarget.blur();
        if (currentSlideIndex < slidesData.length - 1) {
            currentSlideIndex++;
            renderSlide();
            updateNavigation();
        } else if (currentSlideIndex === slidesData.length - 1) {
            showCelebration();
        }
    });

    // Keyboard navigation — skip if focus is on an interactive element
    // to avoid double-firing when a focused button also sends arrow key events
    document.addEventListener('keydown', (e) => {
        const tag = document.activeElement?.tagName;
        if (tag === 'BUTTON' || tag === 'INPUT' || tag === 'SELECT') return;

        if (e.key === 'ArrowLeft' && currentSlideIndex > 0) {
            e.preventDefault();
            currentSlideIndex--;
            renderSlide();
            updateNavigation();
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            if (currentSlideIndex < slidesData.length - 1) {
                currentSlideIndex++;
                renderSlide();
                updateNavigation();
            } else {
                showCelebration();
            }
        }
    });
});

function renderSlide() {
    const container = document.getElementById('slide-container');
    const slide = slidesData[currentSlideIndex];

    // Stop any playing audio when changing slides
    if (currentAudio) {
        currentAudio.pause();
        currentAudio = null;
    }

    container.innerHTML = '';

    // Special intro slide
    if (slide.type === 'intro') {
        const intro = document.createElement('div');
        intro.className = 'fade-in intro-slide';
        intro.style = 'overflow:auto';
        intro.innerHTML = `
            <div class="intro-icon">🎙️</div>
            <h2 class="intro-title">How to use this app</h2>
            <ul class="intro-steps">
                <li><span class="intro-step-icon">👂</span> <span>Listen to the word by clicking the <strong>▶ play button</strong>.</span></li>
                <li><span class="intro-step-icon">🔁</span> <span>Repeat the word out loud after hearing it.</span></li>
                <li><span class="intro-step-icon">💡</span> <span>Read the <strong>tip</strong> to understand how to shape your mouth and tongue.</span></li>
                <li><span class="intro-step-icon">🔵</span> <span>The <strong>highlighted letters</strong> show which part of the word makes the target sound.</span></li>
                <li><span class="intro-step-icon">➡️</span> <span>Use <strong>Next / Previous</strong> or your <strong>arrow keys</strong> to navigate slides.</span></li>
            </ul>
            <p class="intro-footer">There are <strong>44 sounds</strong> across <strong>44 slides</strong>. Good luck! 🍀</p>
        `;
        container.appendChild(intro);
        return;
    }

    const content = document.createElement('div');
    content.className = 'fade-in';
    content.style.width = '100%';
    content.style.display = 'flex';
    content.style.flexDirection = 'column';
    content.style.alignItems = 'center';

    let wordsHtml = '';
    if (slide.words && slide.words.length > 0) {
        wordsHtml = `
            <div class="words-grid">
                ${slide.words.map(w => `
                    <div class="word-card">
                        <div class="word-text">${w.highlightedWord || w.word}</div>
                        <button class="play-btn" onclick="playAudio('${w.audio}')" title="Play pronunciation">
                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 5v14l11-7z"/>
                            </svg>
                        </button>
                    </div>
                `).join('')}
            </div>
        `;
    }

    content.innerHTML = `
        <div class="category">${slide.category || 'Pronunciation Practice'}</div>
        <div class="subcategory">${slide.subcategory || ''}</div>
        ${slide.phoneme ? `<div class="phoneme">${slide.phoneme}</div>` : ''}
        ${slide.tip ? `<div class="pronunciation-tip">💡 <strong>Tip:</strong> ${slide.tip}</div>` : ''}
        ${wordsHtml}
    `;

    container.appendChild(content);
}

window.playAudio = function(audioPath) {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    currentAudio = new Audio(audioPath);
    currentAudio.play().catch(e => console.error("Error playing audio:", e));
};

function updateNavigation() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const indicator = document.getElementById('slide-indicator');
    
    prevBtn.disabled = currentSlideIndex === 0;

    if (currentSlideIndex === slidesData.length - 1) {
        nextBtn.disabled = false;
        nextBtn.textContent = '🎉 Finish!';
        nextBtn.id = 'next-btn';
        nextBtn.classList.add('finish-btn');
    } else {
        nextBtn.textContent = 'Next';
        nextBtn.classList.remove('finish-btn');
    }
    
    indicator.textContent = `${currentSlideIndex + 1} / ${slidesData.length}`;
}

function showCelebration() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio = null;
    }

    const overlay = document.getElementById('celebration-overlay');
    overlay.classList.add('visible');
    launchConfetti();
}

window.closeCelebration = function() {
    const overlay = document.getElementById('celebration-overlay');
    overlay.classList.remove('visible');
    // Reset to first slide
    currentSlideIndex = 0;
    renderSlide();
    updateNavigation();
};

function launchConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const pieces = [];
    const colors = ['#fac656', '#fa727d', '#f89e5b', '#26c9a8', '#ffffff'];

    for (let i = 0; i < 120; i++) {
        pieces.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            w: Math.random() * 12 + 6,
            h: Math.random() * 6 + 4,
            color: colors[Math.floor(Math.random() * colors.length)],
            rotation: Math.random() * Math.PI * 2,
            rotationSpeed: (Math.random() - 0.5) * 0.1,
            speedX: (Math.random() - 0.5) * 3,
            speedY: Math.random() * 3 + 2,
            opacity: 1,
        });
    }

    let frame = 0;
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        pieces.forEach(p => {
            p.x += p.speedX;
            p.y += p.speedY;
            p.rotation += p.rotationSpeed;
            if (frame > 90) p.opacity -= 0.01;

            ctx.save();
            ctx.globalAlpha = Math.max(0, p.opacity);
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rotation);
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
            ctx.restore();
        });
        frame++;
        if (frame < 160) requestAnimationFrame(animate);
    }
    animate();
}
