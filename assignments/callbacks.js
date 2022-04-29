/*const posts = [
    {title : 'post one', body: 'this is post one', createdAt: new Date().getTime()},
    {title : 'post one', body: 'this is post one', createdAt: new Date().getTime()}
];*/

/*function getPost () {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title} - last upadted ${new Date().getTime() - post.createdAt}</li>`
        });
        document.body.innerHTML = output;
    }, 1000);
}*/

/*function createPost(post){
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
}*/
/*function create4post(post){
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

    }*/
    

    
    
/*createPost({title:'post three', body:'this is the third post'})
.then(getPost)
.catch(err => console.log(err));
create$Post({title:'post four', body:'this is the fourth post'})
.then(getPost)
.catch(err => console.log(err));*/

//PROMISE ALL 
/*const promise1 = Promise.resolve('Hello world');
const promise2 = 10;
const promise3 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 2000, 'Goodbye')
})
Promise.all([promise1, promise2, promise3]).then(values => console.log(values));*/

//asynch awaits 

console.log('person 1 : shows ticket');
console.log('person 2 : shows ticket');

/*const promisWifeBringingTickets = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('ticket');
    },3000)

})

const getPopcorn = promisWifeBringingTickets.then((t)=>{
    console.log('husband: we should go in');
    console.log('wife: no! i m hungry ');
    return new Promise((resolve,reject)=>resolve(`resolve ${t} popcorn`));

    
})

const getButter = getPopcorn.then((t)=>{
    console.log('husband: we should go in');
    console.log('wife: i need butter in my popcorn');
    return new Promise((resolve,reject)=>resolve(`resolve ${t} butter`));

    
})*/
const preMovie = async()=>{
    const promisWifeBringingTickets = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('ticket');
        },3000)
    });

    const getPopcorn = new Promise((resolve, reject)=> resolve('popcorn'));

    const getButter = new Promise((resolve, reject)=> resolve('butter'));

    const getColdDrink = new Promise((resolve, reject)=> resolve('pcold drink'));

    let ticket = await promisWifeBringingTickets;
    
    console.log(`i have the ${ticket}`);
    console.log('husband: we should go in');
    console.log('wife: no! i m hungry ');

    let popcorn = await getPopcorn;
    console.log(`i got some ${popcorn}`);
    console.log('husband: we should go in');
    console.log('wife: i need butter in my popcorn');

    let butter = await getButter;
     console.log(`i got you some ${butter} for your popocorn`);
     console.log('husband : now can we go in?');
     console.log('wife: no! i want some cold drinks');

     let coldDrinks = await getColdDrink;
     console.log(`i got you some ${coldDrinks}`);
     console.log('husband: now can we go inside?');
     console.log('yes lets go we are getting late!');
     console.log('thanks for the reminder!');

     return ticket;


}

preMovie().then((m)=> console.log(`person 3: shows ${m}`));

console.log('person 4: shows ticket');
console.log('person 4: shows ticket');





