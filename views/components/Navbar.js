let Navbar = {
    render: async () => {
        let view =  /*html*/`
    

    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1"><img src="src/icon/logo.svg" width="200" height="30" alt=""></span>
      </div>
    </nav>

        `
        return view
    },
    after_render: async () => { }

}

export default Navbar;