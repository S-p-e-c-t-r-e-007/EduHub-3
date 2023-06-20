
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


const lclpost = localStorage.setItem("newposts", JSON.stringify(posts)) || [];

addpostform.addEventListener("submit", addpost);

const PostAtLocalStorage = savelclstrage();

function savelclstrage() {
    localStorage.setItem("lscpost", JSON.stringify(lclpost));
}


function addpost(event) {
    event.preventDefault();


    const title = posttitle.value;
    const content = postcontent.value;

    const newpost = new posts(Date.now(), title, content);
    lclpost.unshift(newpost);
    savelclstrage();

    console.log(lclpost.length);
    loadpost();


}

function loadpost(){

    
lclpost.forEach(_post => {

    
    const dynamicpost = document.createElement("div");
    dynamicpost.innerHTML = `
    <div id="feedbar">
    <div id="stat-add-post">
        <span id="username"></span>
            <div id="title">
                <div id="title-input">${lclpost[0].title}</div>
            </div>
            <div class="feed-bar-text">
                <div id="user-text">${lclpost[0].content}</div>
            </div>
    `;
    posttitle.innerHTML = "";
    postcontent.innerHTML = "";

    postcontainer.appendChild(dynamicpost);
    

})

}
