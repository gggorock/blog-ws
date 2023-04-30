export default async function Post(props) {

    const response = await fetch(`http://localhost:8080/posts/${props.postId}`, {
        method: 'GET',
    });
    const { title, content } = await response.json();
    console.log(title, content)

    return (
        <div>
            <div>{title}</div>
            <div>{content}</div>
        </div>
    )
}