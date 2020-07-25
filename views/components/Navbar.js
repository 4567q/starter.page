let Navbar = {
    render: async () => {
        let view =  /*html*/`
             <nav class="navbar sticky-top navbar-light bg-light">
    <a class="navbar-brand" href="https://4567q.github.io/starter.page/">
    <img src="src/icon/favicon-32x32.png" width="30" height="30" class="d-inline-block align-top" alt="" loading="lazy">
    Starter.Page
    </a>

    <span class="navbar-text">
    </span>        
    </nav> 
        `
        return view
    },
    after_render: async () => { }

}

export default Navbar;