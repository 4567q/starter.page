// --------------------------------
//  Define Data Sources
// --------------------------------

let getPostsList = async () => {
     const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        const response = await fetch(`https://5bb634f6695f8d001496c082.mockapi.io/api/posts`, options)
        const json = await response.json();
        // console.log(json)
        return json
    } catch (err) {
        console.log('Error getting documents', err)
    }
}

let Home = {
    render : async () => {
        let posts = await getPostsList()
        let view =  /*html*/`
        
        <div class="row">    
        <div class="col-sm">
        <div class="card mb-3">
        <div class="card-header"><center><span style="color: #fff;">link</span></center></div>
        
        <div class="card-body">
        <!------------------------->
        
        <div class="container">
         <div class="row row-cols-1 row-cols-sm-2 row-cols-md-6">
		    <div class="col">
             
                   <a class="button" href="https://vk.com/" target="_blank" style='text-decoration: none;'>
			        <div class="alert alert-light" role="alert">
			        <img src="src/icon/vk_32x32.png" class="rounded-0">
			        <span>vk</span> 
			        </div>
			        </a>

		    </div>
		    <div class="col">

             <a class="button" href="https://www.instagram.com/?hl=ru" target="_blank" style='text-decoration: none;'>
        <div class="alert alert-light" role="alert">
        <img src="src/icon/ins_32x32.png" class="rounded-0">
        <span>inst</span>
        </div>
        </a>

		    </div>
		    <div class="col">

            <a class="button" href="https://web.telegram.org/#/login" target="_blank" style='text-decoration: none;'>
        <div class="alert alert-light" role="alert">
        <img src="src/icon/tg_32x32.png" class="rounded-0">
        <span>Telegram</span>
        </div>
        </a>

		    </div>
		    <div class="col">

           <a class="button" href="https://2ch.hk/" target="_blank" style='text-decoration: none;'>
        <div class="alert alert-light" role="alert">
        <img src="src/icon/dv_32x32.png" class="rounded-0">
        <span>2ch.hk</span>
        </div>
        </a>

		    </div>
		    <div class="col">

             <a class="button" href="https://soundcloud.com/premori" target="_blank" style='text-decoration: none;'>
        <div class="alert alert-light" role="alert">
        <img src="src/icon/sc_32x32.png" class="rounded-0">
        <span>SC</span>
        </div>
        </a>

		    </div>
		    <div class="col">

             <a class="button" href="https://www.looperman.com/loops" target="_blank" style='text-decoration: none;'>
        <div class="alert alert-light" role="alert">
        <img src="src/icon/lp_32x32.png" class="rounded-0">
        <span>lman</span>
        </div>
        </a> 

		    </div>
        </div>
        </div>

        <div class="container">
         <div class="row row-cols-1 row-cols-sm-2 row-cols-md-6">
		    <div class="col">
             
            <a class="button" href="https://open.spotify.com/" target="_blank" style='text-decoration: none;'>
        <div class="alert alert-light" role="alert">
        <img src="src/icon/sp_32x32.png" class="rounded-0">
        <span>Spotify</span>
        </div>
        </a>

		    </div>
		    <div class="col">

           <a class="button" href="https://findclone.ru/" target="_blank" style='text-decoration: none;'>
        <div class="alert alert-light" role="alert">
        <img src="src/icon/fc_32x32.png" class="rounded-0">
        <span>FClone</span>   
        </div>
        </a>

		    </div>
		    <div class="col">

            <a class="button" href="https://github.com/" target="_blank" style='text-decoration: none;'>
        <div class="alert alert-light" role="alert">
        <img src="src/icon/gh_32x32.png" class="rounded-0">
        <span>GitHub</span>
        </div>
        </a>

		    </div>
		    <div class="col">
        <a class="button" href="https://qiwi.com/" target="_blank" style='text-decoration: none;'>
        <div class="alert alert-light" role="alert">    
        <img src="src/icon/qw_32x32.png" class="rounded-0">
        <span>Qiwi</span>
        </div>
        </a>

		    </div>
		    <div class="col">

        <a class="button" href="https://online-audio-converter.com/ru/" target="_blank" style='text-decoration: none;'>
        <div class="alert alert-light" role="alert">
        <img src="src/icon/acn_32x32.png" class="rounded-0">
        <span>AudioC</span>
        </div>
        </a>

		    </div>
		    <div class="col">

        <a class="button" href="https://yandex.ru/maps/225/russia/?l=sat%2Cskl&ll=99.505405%2C61.698653&z=3" target="_blank" style='text-decoration: none;'>
        <div class="alert alert-light" role="alert">
        <img src="src/icon/ym_32x32.png" class="rounded-0">
        <span>YMaps</span>
        </div>
        </a>
		    </div>
        </div>
        </div>

        <div class="container">
         <div class="row row-cols-1 row-cols-sm-2 row-cols-md-6">
		    <div class="col">
             
           <a class="button" href="https://www.google.ru/" target="_blank" style='text-decoration: none;'>
        <div class="alert alert-light" role="alert">
        <img src="src/icon/gl_32x32.png" class="rounded-0">
        <span>Google</span>         
        </div>
        </a>

		    </div>
		    <div class="col">

              <a class="button" href="https://e.mail.ru/" target="_blank" style='text-decoration: none;'>
        <div class="alert alert-light" role="alert">
        <img src="src/icon/mr_32x32.png" class="rounded-0">
        <span>Mail.ru</span>
        </div>
        </a>

		    </div>
		    <div class="col">

         <a class="button" href="https://www.youtube.com/" target="_blank" style='text-decoration: none;'>
        <div class="alert alert-light" role="alert">    
        <img src="src/icon/yt_32x32.png" class="rounded-0">
        <span>YouTube</span>
        </div>
        </a>
		    </div>
		    <div class="col">

            <a class="button" href="https://store.steampowered.com/?l=russian" target="_blank" style='text-decoration: none;'>
        <div class="alert alert-light" role="alert">
        <img src="src/icon/st_32x32.png" class="rounded-0">
        <span>Steam</span>
        </div>
        </a>

		    </div>
		    <div class="col">

               <a class="button" href="https://yougame.biz/" target="_blank" style='text-decoration: none;'>
        <div class="alert alert-light" role="alert">
        <img src="src/icon/yg_32x32.png" class="rounded-0">
        <span>YouGame</span>
        </div>
        </a>

		    </div>
		    <div class="col">

           <a class="button" href="https://boost.ninja" target="_blank" style='text-decoration: none;'>
        <div class="alert alert-light" role="alert">
        <img src="src/icon/nb_32x32.png" class="rounded-0">
        <span>Boost.N</span>
        </div>
        </a>

		    </div>
        </div>
        </div>
        

        <div class="container">
         <div class="row row-cols-1 row-cols-sm-2 row-cols-md-6">
		    <div class="col">
             
            <a class="button" href="https://temp-mail.org/ru/" target="_blank" style='text-decoration: none;'>
        <div class="alert alert-light" role="alert">
        <img src="src/icon/tm_32x32.png" class="rounded-0">
        <span>T.mail</span>
        </div>
        </a>

		    </div>
		    <div class="col">

           <a class="button" href="https://ytmonster.ru/dashboard/" target="_blank" style='text-decoration: none;'>
        <div class="alert alert-light" role="alert">
        <img src="src/icon/ytm_32x32.png" class="rounded-0">
        <span>YTmonst</span>   
        </div>
        </a>

		    </div>
		    <div class="col">

            <a class="button" href="https://lolz.guru/" target="_blank" style='text-decoration: none;'>
        <div class="alert alert-light" role="alert">
        <img src="src/icon/lolz.png" class="rounded-0">
        <span>lolz</span>
        </div>
        </a>

		    </div>
		    <div class="col">
        <a class="button" href="https://dedic.store/" target="_blank" style='text-decoration: none;'>
        <div class="alert alert-light" role="alert">
        <img src="src/icon/ds_32x32.png" class="rounded-0">
        <span>Dedic.S</span>
        </div>
        </a>

		    </div>
		    <div class="col">

        <a class="button" href="https://yoomoney.ru/actions" target="_blank" style='text-decoration: none;'>
        <div class="alert alert-light" role="alert">
        <img src="src/icon/md_32x32.png" class="rounded-0">
        <span>Юmoney</span>
        </div>
        </a>

		    </div>
		    <div class="col">

        <a class="button" href="https://www.figma.com/" target="_blank" style='text-decoration: none;'>
        <div class="alert alert-light" role="alert">
        <img src="src/icon/f_32x32.svg" class="rounded-0" width="32" height="32">
        <span>figma</span>
        </div>
        </a>
		    </div>
        </div>
        </div>

        
        <!------------------------->
        
       
        <!------------------------->
        </div>
        </div>
        </div>


        `
        return view
    }
    , after_render: async () => {
    }

}

export default Home;
