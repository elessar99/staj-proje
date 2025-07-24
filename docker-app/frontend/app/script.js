// Türkiye saat dilimini ayarlama (UTC+3)
const turkiyeTimeZone = 'Europe/Istanbul';

// Saati güncelleme fonksiyonu
function updateClock() {
    const now = new Date();
    
    // Türkiye saatini al
    const options = {
        timeZone: turkiyeTimeZone,
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    
    const timeString = now.toLocaleTimeString('tr-TR', options);
    document.getElementById('clock').textContent = timeString;
    
    // Tarihi formatla
    const dateOptions = {
        timeZone: turkiyeTimeZone,
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    };
    
    const dateString = now.toLocaleDateString('tr-TR', dateOptions);
    document.getElementById('date').textContent = dateString;
}

// Sayfa yüklendiğinde ve her saniyede bir saati güncelle
window.onload = function() {
    updateClock();
    setInterval(updateClock, 1000);
};