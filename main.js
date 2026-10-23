//  ex-js-promises-snack

// snack 1

const getPost = (id) => {
    return new Promise((resolve, rejects) => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then(responde => responde.json())
            .then(post => {
                fetch(`https://dummyjson.com/users/${post.userId}`)
                    .then(res => res.json())
                    .then(user => resolve({ ...post, user }))
                    .catch(rejects);
            })
            .catch(rejects);
    });
};

getPost(1)
    .then(messaggio => console.log(messaggio))
    .catch(error => console.error(error));

// snack 2

const lanciaDado = () => {
    return new Promise((resolve, reject) => {
        console.log("sto lanciando il dado");
        if(Math.floor(Math.random() * 100) + 1 <= 20) {
            console.error("il dado ha fallito", reject)
        } 
        else {
            setTimeout(() => {
                const dado = Math.floor(Math.random() * 6) + 1;
                return resolve(dado); 
            },3000)
        }
    })    
}

lanciaDado()
.then(result => console.log(`è uscito il numero ${result}`))
.catch(error => console.error(error));





