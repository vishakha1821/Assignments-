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

function createPost(post){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>
        posts.push(post))

        const error = false;
        if(!error){
            resolve()
        } else {
            reject('Error: Something went wrong!')
        }
    },2000 )
}
function create4post(post){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>
        posts.push(post))

        const error = false;
        if(!error){
            resolve()
        } else {
            reject('Error: Something went wrong!')
        }
    },3000 )

    }
    

    
    
/*createPost({title:'post three', body:'this is the third post'})
.then(getPost)
.catch(err => console.log(err));
create$Post({title:'post four', body:'this is the fourth post'})
.then(getPost)
.catch(err => console.log(err));*/

//PROMISE ALL 
const promise1 = Promise.resolve('Hello world');
const promise2 = 10;
const promise3 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 2000, 'Goodbye')
})
Promise.all([promise1, promise2, promise3]).then(values => console.log(values));



