var map = L.map('map-minimal', {
    scrollWheelZoom: false
}).setView([41.396, 2.164], 10);

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20
}).addTo(map);

L.marker([41.396, 2.164]).addTo(map).bindPopup("<b>Barcelona</b><br>Currently here!").openPopup();
