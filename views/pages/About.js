let About = {
    render : async () => {
        let view =  /*html*/`
        <div class="card">
        <div class="card-body">
        <h3>Starter.Page</h3>
            Этот проект показывает, как можно создать простое одностраничное SPA приложение в стиле стартовой страницы, используя только простой JavaScript.
            Для этого не требуется никаких фреймворков или инструментов сборки.
            Но потребуется веб-сервер для обслуживания HTML и JS для браузера.
            <a href="https://github.com/4567q/starter.page" target="_blank" class="card-link">(GitHub)</a>
        </div>
        </div>
        `
        return view
    },
    after_render: async () => {}
        
}

export default About;
