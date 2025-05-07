function showCurrentTime() {
    const now = new Date();
  
    const days = ['неділя', 'понеділок', 'вівторок', 'середа', 'четвер', 'п’ятниця', 'субота'];
    const months = ['січня', 'лютого', 'березня', 'квітня', 'травня', 'червня',
                    'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'];
  
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const dayOfWeek = days[now.getDay()];
    const day = String(now.getDate()).padStart(2, '0');
    const month = months[now.getMonth()];
    const year = now.getFullYear();
  
    const result = `${hours}:${minutes}:${seconds}, ${dayOfWeek}, ${day} ${month} ${year} року`;
  
    console.log(result);
    document.getElementById('timeOutput').textContent = result;
  }
  
  // Викликаємо функцію після завантаження
  document.addEventListener('DOMContentLoaded', showCurrentTime);
  