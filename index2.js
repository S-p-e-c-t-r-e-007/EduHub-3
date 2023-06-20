

const addpostform = document.getElementById("add-post-form"),
    posttitle = document.getElementById("title-input"),
    postcontent = document.getElementById("user-text"), postcontainer = document.getElementById("post-container");

class posts {
    constructor(id, title, content) {
        this.id = id,
            this.title = title,
            this.content = content;
    }
};


postcontent.addEventListener("keyup", function (e) {
    e.preventDefault();
    addpost3();
}
);
addpostform.addEventListener("submit", addpost3);



function saveposttolocalstorage() {
    localStorage.setItem("posts", posts);

}



function addpost3(event) {
    event.preventDefault();
    const title = posttitle.value;
    const content = postcontent.value;
    JSON.stringify(title);
    const newpost = new posts(Date.now(), title, content);
    localStorage.setItem("newposts", JSON.stringify(newpost));
    loadpostsfromlocalstorage();



    function loadpostsfromlocalstorage() {


        const dynamicpost = document.createElement("div");
        dynamicpost.innerHTML = `
        <div id="feedbar">
        <div id="stat-add-post">
            <span id="username"></span>
                <div id="title">
                    <div id="title-input">${newpost.title}</div>
                </div>
                <div class="feed-bar-text">
                    <div id="user-text">${newpost.content}</div>
                </div>
        `;
        posttitle.innerHTML = "";
        postcontent.innerHTML = "";

        postcontainer.appendChild(dynamicpost);

    }
}