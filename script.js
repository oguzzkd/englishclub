document.addEventListener('DOMContentLoaded', () => {
    const revealBtn = document.getElementById('reveal-btn');
    const contactInfo = document.getElementById('contact-info');

    // To prevent web crawlers from easily finding the contact information,
    // we obfuscate it using string concatenation.
    const ePart1 = 'ioguz.karaduman';
    const ePart2 = 'gmail.com';
    const lPart1 = 'https://www.linkedin';
    const lPart2 = '.com/in/ismail-oguz-karaduman-86297932b';

    revealBtn.addEventListener('click', () => {
        const email = ePart1 + '@' + ePart2;
        const linkedin = lPart1 + lPart2;
        
        contactInfo.innerHTML = `
            Email: <a href="mailto:${email}">${email}</a>
            <br><br>
            LinkedIn: <a href="${linkedin}" target="_blank">Profile</a>
        `;
        
        contactInfo.classList.remove('hidden');
        revealBtn.classList.add('hidden');
    });

    // Obfuscate WhatsApp link on Event card
    const waPart1 = 'https://chat.whatsapp';
    const waPart2 = '.com/FTtk89H1M074cmBfS0l9oT';
    const waBtn = document.getElementById('whatsapp-btn');
    if (waBtn) {
        waBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.open(waPart1 + waPart2, '_blank', 'noopener,noreferrer');
        });
    }
});
