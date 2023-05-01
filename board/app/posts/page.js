import Link from "next/link"

export default async function Posts(props) {

    //get posts data

    const response = await fetch('http://localhost:8080/posts', {
        method: 'GET',
    })
    const posts = await response.json()


    return (
        <div>
            {
                posts.map((post, index) => (
                    <Link prefetch={false} href={`/posts/${post.id}`} key={index}>
                        <div>{post.title}</div>
                    </Link>
                ))
            }
        </div>
    )

}