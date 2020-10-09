import {include_tool} from '../../functions.js'

customElements.define('carousel-body',class carouselBody  extends HTMLElement{
    constructor() {
        super()
        include_tool(this)
        const container = document.createElement('div')
        container.className = "carousel slide w-100 mx-auto"
        const ol = document.createElement('ol')
        const li = document.createElement('li')
        container.appendChild(ol)
    }
})

customElements.define('custom-body', class Body extends HTMLElement {
    constructor() {
        super()
        const container = document.createElement('div')
        include_tool(container)
        // container.insertAdjacentHTML('beforeend',`  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha256-4+XzXVhsDmqanXGHaHvgh1gMQKX40OUvDEBTu8JcmNs=" crossorigin="anonymous"></script> <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css'/> <script src='https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js'></script>`)
        container.insertAdjacentHTML('afterbegin',`
            <div>
                <carousel-body> </carouel-body>

            </div>

            
        `)

        this.attachShadow({mode:'open'})
        this.shadowRoot.appendChild(container)
       }
    connectedCallback() {

    }
})