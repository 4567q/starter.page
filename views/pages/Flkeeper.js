let Flkeeper = {
    render : async () => {
        let view =  /*html*/`
                       
             <div class="row">
              
            <div class="col-sm">
            <div class="card bg-light mb-3">
            <center>
            <div class="card-header">Apps</div>
            </center>
            <div class="card-body">
              
           <a class="button" href="files/autostat.exe" style='text-decoration: none;' download>
            <div class="alert alert-light" role="alert">
            <img src="src/icon/au_32x32.png" class="rounded-0">
            <span>autostat.exe</span>
            </div>
           </a>

           <a class="button" style='text-decoration: none;'>
            <div class="alert alert-light" role="alert">
            <img src="src/icon/Qn_32x32.png" class="rounded-0">
            <span>file not added</span>
            </div>
           </a>

            </div>
            </div>
            </div>

            <div class="col-sm">
            <div class="card bg-light mb-3">
            <center>
            <div class="card-header">Tools</div>
            </center>
            <div class="card-body">
            
            <a class="button" href="files/adwcleaner_8.0.6.exe" style='text-decoration: none;' download>
            <div class="alert alert-light" role="alert">
            <img src="src/icon/ac_32x32.png" class="rounded-0">
            <span>adwcleaner.exe</span>
            </div>
            </a>

            <a class="button" href="files/FileZillaPortable_3.49.1.paf.exe" style='text-decoration: none;' download>
            <div class="alert alert-light" role="alert">
            <img src="src/icon/fz_32x32.png" class="rounded-0">
            <span>filezilla.exe</span>
            </div>
            </a>

            </div>
            </div>
            </div>

            <div class="col-sm">
            <div class="card bg-light mb-3">
            <center>
            <div class="card-header">Оther</div>
            </center>
            <div class="card-body">
            
            <a class="button" href="files/server.rar" style='text-decoration: none;' download>
            <div class="alert alert-light" role="alert">
            <img src="src/icon/wr_32x32.png" class="rounded-0">
            <span>ServerTO.rar</span>
            </div>
            </a>

            <a class="button" style='text-decoration: none;'>
            <div class="alert alert-light" role="alert">
            <img src="src/icon/Qn_32x32.png" class="rounded-0">
            <span>file not added</span>
            </div>
            </a>

            </div>
            </div>
            </div>

           
        `
        return view
    },
    after_render: async () => {}
        
}

export default Flkeeper;
