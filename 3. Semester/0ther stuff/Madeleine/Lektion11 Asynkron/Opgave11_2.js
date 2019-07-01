const user2postUrl = 'https://jsonplaceholder.typicode.com/posts?userId=02 Funktioner, objekter og arrays';
//check console in browser

//synchront
const getPosts = () => {
    return fetch(user2postUrl).then((result) => {
        return result.json() //retunerer promise
    }); //Hvordan ser man at dette er en promise? Er det bare default hvis man ikke laver en await?
};

const printThirdPost = () => {
    getPosts().then((posts) => {
        console.log("The post" + posts[2].body);
    }).catch(error => console.log(error));
};

//printThirdPost();

const getPostsAsync = async () => {
    let result = await fetch(user2postUrl); //Hvorfor wait her og under? Venter den ikke her eller gaar den videre?
    return await result.json();
};


const printThrirdPostAsync = async () => {
    try {
        let posts = await getPostsAsync(); //skal await altid med, altid naar man bruger asynch?
        console.log("The post" + posts[2].body);
    }
    catch (e) {
        console.log("Error: " + e);
    }
};
printThrirdPostAsync();
