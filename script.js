// console.log("hello")


async function success(GeolocationPosition) {
    console.log(GeolocationPosition)
    const lat = GeolocationPosition.coords.latitude
    const lon = GeolocationPosition.coords.longitude
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&zoom=10&format=jsonv2`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data.display_name)
    document.getElementById('name').textContent = data.display_name
    document.getElementById('rank').textContent = data.rank


}
function error(e) {
    console.log(e)
}




console.log(navigator.geolocation.getCurrentPosition(success))

