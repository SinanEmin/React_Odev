import axios from "axios"

async function getData() {
    const {data:users} = await axios("https://jsonplaceholder.typicode.com/users/1")
    const {data:posts} = await axios("https://jsonplaceholder.typicode.com/posts/1")

    console.log("users: ", users)
    console.log("Posts: ", posts)

}

export default getData;