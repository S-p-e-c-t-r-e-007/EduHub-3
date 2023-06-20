
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

const PostAtStorage = localStorage.setItem("Localpost", JSON.stringify(posts));

addpostform.addEventListener("submit", addpost);

function addpost(event) { 

        event.preventDefault();

    const title = posttitle.value;
    const content = postcontent.value;

    const newpost = new posts(Date.now(),title,content);

    PostAtStorage.unshift(newpost);

}

unshift()