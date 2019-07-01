const user2postUrl = 'https://jsonplaceholder.typicode.com/posts?userId=3';
const usersUrl = 'https://jsonplaceholder.typicode.com/users';

//synchront
const getPosts = () => {
    return fetch(user2postUrl).then((result) => {
        return result.json() //retunerer promise
    }); //Hvordan ser man at dette er en promise? Er det bare default hvis man ikke laver en await?
};

//synchront
const getUsers = () => {
    return fetch(usersUrl).then((result) => {
        return result.json() //retunerer promise
    }); //Hvordan ser man at dette er en promise? Er det bare default hvis man ikke laver en await?
};

const printInfoSynch = () => {
    Promise.all([getUsers(), getPosts()]).then(function (values) {
        document.body.innerText =values[0][2].name + ": \n" + values[1][1].title;

    }).catch(error => console.log(error));
};

//printInfoSynch();

const getUsersAsync = async () => {
    let result = await fetch(usersUrl); //Hvorfor wait her og under? Venter den ikke her eller gaar den videre?
    return await result.json();
};



const getPostsAsync = async () => {
    let result = await fetch(user2postUrl);
    return await result.json();
};

const printInfoAsynch = () => {
    Promise.all([getUsersAsync(), getPostsAsync()]).then(function (values) {
        console.log(values);
        document.body.innerText = values[0][2].name + ": \n" + values[1][1].title;

    }).catch(error => console.log(error));
};

printInfoAsynch();
