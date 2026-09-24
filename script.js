document.addEventListener('DOMContentLoaded', () => {
    const revealBtn = document.getElementById('reveal-btn');
    const contactInfo = document.getElementById('contact-info');

    // To prevent web crawlers from easily finding the contact information,
    // we obfuscate it using string concatenation.
    const ePart1 = 'ioguz.karaduman';
    const ePart2 = 'gmail.com';
    const lPart1 = 'https://www.linkedin';
    const lPart2 = '.com/in/ismail-oguz-karaduman-86297932b';
    const wPart1 = 'https://chat.whatsapp';
    const wPart2 = '.com/FTtk89H1M074cmBfS0l9oT';

    revealBtn.addEventListener('click', () => {
        const email = ePart1 + '@' + ePart2;
        const linkedin = lPart1 + lPart2;
        const whatsapp = wPart1 + wPart2;
        
        contactInfo.innerHTML = `
            Email: <a href="mailto:${email}">${email}</a>
            <br><br>
            LinkedIn: <a href="${linkedin}" target="_blank">Profile</a>
            <br><br>
            <a href="${whatsapp}" target="_blank" class="whatsapp-btn">💬 Join WhatsApp Group</a>
        `;
        
        contactInfo.classList.remove('hidden');
        revealBtn.classList.add('hidden');
    });
});
