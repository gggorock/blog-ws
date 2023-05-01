export default async function PostDetail(props) {
    const response = await fetch(`http://localhost:8080/posts/${props.params.formId}`,
        { method: 'GET' });
    const post = await response.json();

    return (
        <div>
            <h4>{post.title}</h4>
            <div>{post.content}</div>
        </div>
    )


}