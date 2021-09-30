(function () {
    const search = document.getElementById("search");
    const profile = document.getElementById("profile");
    const url = "https://api.github.com/users";

    //const client_id = "Iv1.c65b570293f9ce30";
    //const client_secret = "9b0464f2dc5d79700f3db2f4c63ba431203cc9ef";

    async function getUser(user) {
        //const profileResponse = await fetch(`${url}/${user}?client_id=${client_id}&client_secret=${client_secret}`);
        const profileResponse = await fetch(`${url}/${user}`)
        console.log(profileResponse);
        const profile = profileResponse.json();

        return profile;
    }
    function adicionarLista(user) {
        alert("ola");
        var lista = ["lucas-carv"];
        lista.push(user);
        lista.forEach(imprimir);


    }

    function showProfile(user) {
        profile.innerHTML = `<div class=row">
        <div class="cold-md-4">
            <div class="card" style="width: 18rem;">
                <img class="cad-img-top" src="${user.avatar_url}"/>
                <div class="card-img-top" src="">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Repositorios: ${user.public_repos}</li>
                        <li class="list-group-item">Seguidores : ${user.followers} </li>
                        <li class="list-group-item">Seguindo: ${user.following} </li>
                    </ul>
                    <div class="card-body">
                        <button onclick="adicionarLista('user')" class="btn btn-warning btn-block">Salvar perfil</button>
                        <a href="${user.html_url}" target="_blank" class="btn btn-warning btn-block">Ver perfil</a>
                    </div>

                </div>
            </div>
        </div>
        <div class="col-md-8">
            <div id="repos"></div>
        </div>
    </div>`
    }

    function imprimir(item) {
        console.log(item);
    }
    search.addEventListener("keyup", (e) => {
        const user = e.target.value;


        if (user.length > 0) {
            getUser(user).then(res => showProfile(res));
        }
    })

})()
