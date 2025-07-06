function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      document.getElementById('location').innerText = `Latitude: ${lat}, Longitude: ${lon}`;
    });
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}
