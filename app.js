const time = document.querySelector('.time')


setInterval(() => {
var utc = Date.now();
nono = utc % 1000;
utc -= nono;
time.innerHTML = `${utc}`


}, 1000)