// import jquery and bootstrap
var scripts = new Array()
// jquery
scripts[0] = document.createElement('script')
scripts[0].src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
scripts[0].integrity="sha256-4+XzXVhsDmqanXGHaHvgh1gMQKX40OUvDEBTu8JcmNs="
scripts[0].crossOrigin="anonymous"
// boostrap's css
scripts[1] = document.createElement('link')
scripts[1].rel = 'stylesheet'
scripts[1].href= 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css'
// bootstrap's js
scripts[2] = document.createElement('script')
scripts[2].src='https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js'

