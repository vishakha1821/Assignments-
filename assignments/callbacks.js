const posts = [
    {title : 'post one', body: 'this is post one', createdAt: new Date().getTime()},
    {title : 'post one', body: 'this is post one', createdAt: new Date().getTime()}
];

function getPost () {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title} - last upadted ${new Date().getTime() - post.createdAt}</li>`
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post, callback){
    setTimeout(() =>{
        posts.push({...post, createdAt: new Date().getTime()});
        callback();
    },2000);
}
function create4post(post, callback2){
    setTimeout(() => {
        posts.push({...post, createdAt: new Date().getTime()});
        callback2();
    }, 3000)
}



createPost({title: 'post three', body: 'this is a third post'},{title: 'post four', body: 'this is a fourth post'},
 getPost);