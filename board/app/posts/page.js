import Link from "next/link"

export default async function Posts(props) {

    //get posts data

    const response = await fetch('http://localhost:8080/posts')
    const posts = await response.json()


    return (
        <div>
            {
                posts.map((post, index) => (
                    <div key={index}>
                        <Link prefetch={false} href={`/posts/${post.id}`} >
                         {post.title}
                        </Link>
                    </div>
                ))
            }
        </div>
    )

}