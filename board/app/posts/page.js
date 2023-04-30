import Link from "next/link"

export default async function Posts(props) {

    //get posts data

    const response = await fetch('http://localhost:8080/posts')
    const posts = await response.json()


    return (
        <div>
            {
                posts.map((post, index) => (
                    <Link href={`http://localhost:3000/posts/${post.id}`} key={index}>
                        <div>{post.title}</div>
                    </Link>
                ))
            }
        </div>
    )

}