let Navbar = {
    render: async () => {
        let view =  /*html*/`
             <nav class="navbar sticky-top navbar-light bg-light">
    <a class="navbar-brand" href="https://4567q.github.io/starter.page/">
    <img src="src/icon/favicon-32x32.png" width="30" height="30" class="d-inline-block align-top" alt="" loading="lazy">
    Starter.Page
    </a>

    <span class="navbar-text">

     <!-- weather widget start --><a target="_blank" href="https://nochi.com/weather/ulyanovsk-36692"><img src="https://w.bookcdn.com/weather/picture/21_36692_1_20_ecf0f1_250_bdc3c7_9da2a6_ffffff_1_2071c9_ffffff_0_6.png?scode=124&domid=589&anc_id=79192"  alt="booked.net"/></a><!-- weather widget end -->

    </span>        
    </nav> 
        `
        return view
    },
    after_render: async () => { }

}

export default Navbar;