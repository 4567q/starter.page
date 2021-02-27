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

        <div class="card bg-light mb-3">
        <div class="card-header">Social Media</div>
        
        <div class="card-body">
        <!------------------------->
        <a class="button" href="https://vk.com/" target="_blank" style='text-decoration: none;'>
        <div class="alert alert-light" role="alert">
        <img src="src/icon/vk_32x32.png" class="rounded-0">
        <span>vk</span> 
        </div>
        </a>
        <!------------------------->
        <a class="button" href="https://www.instagram.com/?hl=ru" target="_blank" style='text-decoration: none;'>
        <div class="alert alert-light" role="alert">
        <img src="src/icon/ins_32x32.png" class="rounded-0">
        <span>instagram</span>
        </div>
        </a>
        <!------------------------->
        <a class="button" href="https://web.telegram.org/#/login" target="_blank" style='text-decoration: none;'>
        <div class="alert alert-light" role="alert">
        <img src="src/icon/tg_32x32.png" class="rounded-0">
        <span>Telegram Web</span>
        </div>
        </a>
        <!------------------------->
        <a class="button" href="https://2ch.hk/" target="_blank" style='text-decoration: none;'>
        <div class="alert alert-light" role="alert">
        <img src="src/icon/dv_32x32.png" class="rounded-0">
        <span>2ch.hk</span>
        </div>
        </a>
        <!------------------------->
        </div>
        </div>
</div>

<div class="col-sm">

        <div class="card bg-light mb-3">
        <div class="card-header">Forums and needed</div>
        
        <div class="card-body">
        <!------------------------->
        <a class="button" href="https://lolz.guru/members/3895702/" target="_blank" style='text-decoration: none;'>
        <div class="alert alert-light" role="alert">
        <img src="src/icon/lolz.png" class="rounded-0">
        <span>lolz</span> 
        </div>
        </a>
        <!------------------------->
        <a class="button" style='text-decoration: none;'>
        <div class="alert alert-light" role="alert">
        <img src="src/icon/Qn_32x32.png" class="rounded-0">
        <span>link not added</span>
        </div>
        </a>
        <!------------------------->
        <a class="button" style='text-decoration: none;'>
        <div class="alert alert-light" role="alert">
        <img src="src/icon/Qn_32x32.png" class="rounded-0">
        <span>link not added</span>
        </div>
        </a>
        <!------------------------->
        <a class="button" style='text-decoration: none;'>
        <div class="alert alert-light" role="alert">
        <img src="src/icon/Qn_32x32.png" class="rounded-0">
        <span>link not added</span>
        </div>
        </a>
        <!------------------------->
        </div>
        </div>
</div>

<div class="col-sm">

        <div class="card bg-light mb-3">
        <div class="card-header">Music and sound</div>
        
        <div class="card-body">
        <!------------------------->
        <a class="button" href="https://soundcloud.com/premori" target="_blank" style='text-decoration: none;'>
        <div class="alert alert-light" role="alert">
        <img src="src/icon/sc_32x32.png" class="rounded-0">
        <span>SoundCloud</span>
        </div>
        </a>
        <!------------------------->
        <a class="button" href="https://www.looperman.com/loops" target="_blank" style='text-decoration: none;'>
        <div class="alert alert-light" role="alert">
        <img src="src/icon/lp_32x32.png" class="rounded-0">
        <span>looperman</span>
        </div>
        </a> 
        <!------------------------->
        <a class="button" href="https://open.spotify.com/" target="_blank" style='text-decoration: none;'>
        <div class="alert alert-light" role="alert">
        <img src="src/icon/sp_32x32.png" class="rounded-0">
        <span>Spotify</span>
        </div>
        </a>
        <!------------------------->
        <a class="button" style='text-decoration: none;'>
        <div class="alert alert-light" role="alert">
        <img src="src/icon/Qn_32x32.png" class="rounded-0">
        <span>link not added</span>
        </div>
        </a>
        <!------------------------->
        </div>
        </div>
</div>
<div class="col-sm">

        <div class="card bg-light mb-3">
        <div class="card-header">Tools</div>
        
        <div class="card-body">
        <!------------------------->
        <a class="button" href="https://findclone.ru/" target="_blank" style='text-decoration: none;'>
        <div class="alert alert-light" role="alert">
        <img src="src/icon/fc_32x32.png" class="rounded-0">
        <span>FindClone</span>   
        </div>
        </a>
        <!------------------------->
        <a class="button" href="https://github.com/" target="_blank" style='text-decoration: none;'>
        <div class="alert alert-light" role="alert">
        <img src="src/icon/gh_32x32.png" class="rounded-0">
        <span>GitHub</span>
        </div>
        </a>
        <!------------------------->
        <a class="button" href="https://qiwi.com/" target="_blank" style='text-decoration: none;'>
        <div class="alert alert-light" role="alert">    
        <img src="src/icon/qw_32x32.png" class="rounded-0">
        <span>Qiwi</span>
        </div>
        </a>
        <!------------------------->
        <a class="button" href="https://online-audio-converter.com/ru/" target="_blank" style='text-decoration: none;'>
        <div class="alert alert-light" role="alert">
        <img src="src/icon/acn_32x32.png" class="rounded-0">
        <span>Audio converter</span>
        </div>
        </a>
        <!------------------------->
        </div>
        </div>
</div>
</div>

<div class="row">
<div class="col-sm">

        <div class="card bg-light mb-3">
        <div class="card-header">Support resources</div>
        
        <div class="card-body">
        <!------------------------->
        <a class="button" href="https://yandex.ru/maps/225/russia/?l=sat%2Cskl&ll=99.505405%2C61.698653&z=3" target="_blank" style='text-decoration: none;'>
        <div class="alert alert-light" role="alert">
        <img src="src/icon/ym_32x32.png" class="rounded-0">
        <span>YandexMaps</span>
        </div>
        </a>
        <!------------------------->
        <a class="button" href="https://www.google.ru/" target="_blank" style='text-decoration: none;'>
        <div class="alert alert-light" role="alert">
        <img src="src/icon/gl_32x32.png" class="rounded-0">
        <span>Google</span>         
        </div>
        </a>
        <!------------------------->
        <a class="button" href="https://e.mail.ru/" target="_blank" style='text-decoration: none;'>
        <div class="alert alert-light" role="alert">
        <img src="src/icon/mr_32x32.png" class="rounded-0">
        <span>Mail.ru</span>
        </div>
        </a>
        <!------------------------->
        <a class="button" href="https://www.youtube.com/" target="_blank" style='text-decoration: none;'>
        <div class="alert alert-light" role="alert">    
        <img src="src/icon/yt_32x32.png" class="rounded-0">
        <span>YouTube</span>
        </div>
        </a>
        <!------------------------->
        </div>
        </div>
</div>
<div class="col-sm">

        <div class="card bg-light mb-3">
        <div class="card-header">Games</div>
        
        <div class="card-body">
        <!------------------------->
        <a class="button" href="https://tankionline.com/ru/" target="_blank" style='text-decoration: none;'>
        <div class="alert alert-light" role="alert">
        <img src="src/icon/to_32x32.png" class="rounded-0">
        <span>TankiOnline</span>
        </div>
        </a>
        <!------------------------->
        <a class="button" href="https://store.steampowered.com/?l=russian" target="_blank" style='text-decoration: none;'>
        <div class="alert alert-light" role="alert">
        <img src="src/icon/st_32x32.png" class="rounded-0">
        <span>Steam</span>
        </div>
        </a>
        <!------------------------->
        <a class="button" href="https://yougame.biz/" target="_blank" style='text-decoration: none;'>
        <div class="alert alert-light" role="alert">
        <img src="src/icon/yg_32x32.png" class="rounded-0">
        <span>YouGame</span>
        </div>
        </a>
        <!------------------------->
        <a class="button" href="https://boost.ninja" target="_blank" style='text-decoration: none;'>
        <div class="alert alert-light" role="alert">
        <img src="src/icon/nb_32x32.png" class="rounded-0">
        <span>Boost.Ninja</span>
        </div>
        </a>
        <!------------------------->
        </div>
        </div>
        </div>

<div class="col-sm">

 <div class="card bg-light mb-3">
        <div class="card-header">Movies & Series</div>
        
        <div class="card-body">
        <!------------------------->
        <a class="button" href="https://adultmult12.multmania.club/" target="_blank" style='text-decoration: none;'>
        <div class="alert alert-light" role="alert">
        <img src="src/icon/am_32x32.png" class="rounded-0">
        <span>Adultmult</span>
        </div>
        </a>
        <!------------------------->
        <a class="button" href="#" style='text-decoration: none;'>
        <div class="alert alert-light" role="alert">
        <img src="src/icon/Qn_32x32.png" class="rounded-0">
        <span>link not added</span>
        </div>
        </a>
        <!------------------------->
        <a class="button" href="https://goblins-online.ru/" style='text-decoration: none;'>
        <div class="alert alert-light" role="alert">
        <img src="src/icon/gf_32x32.png" class="rounded-0">
        <span>GoblinFilms</span>
        </div>
        </a>
        <!------------------------->
        <a class="button" style='text-decoration: none;'>
        <div class="alert alert-light" role="alert">
        <img src="src/icon/Qn_32x32.png" class="rounded-0">
        <span>link not added</span>
        </div>
        </a>
        <!------------------------->
        </div>
        </div>
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
