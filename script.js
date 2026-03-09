var map = L.map('map-minimal', {
    scrollWheelZoom: false
}).setView([44.222006944665544, 12.040636507700208], 7);

L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var redIcon = new L.Icon({
  iconUrl: 'fig/marker-icon-2x-red.png',
  shadowUrl: 'fig/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

L.marker([44.222006944665544, 12.040636507700208],{icon: redIcon}).addTo(map).bindPopup("<b>Forlì</b><br>Currently here!").openPopup();

// Timeline Interaction
document.addEventListener('DOMContentLoaded', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');

    timelineItems.forEach(item => {
        const content = item.querySelector('.timeline-content');
        
        content.addEventListener('click', (e) => {
            // Prevent toggling if clicking a link
            if (e.target.tagName === 'A' || e.target.closest('a')) {
                return;
            }
            
            // Toggle active class
            item.classList.toggle('active');
        });
    });
});
