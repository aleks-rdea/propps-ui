function doSomething(value) {
  alert('Container says: ' + value)
}

setInterval(function() {
  document.getElementById('print').innerHTML = window.location.search
}, 1000)
