import PostListItem from "./PostListItem";

export default function PostList({ posts }) {
    return (
        <>
            <ul>
                {posts.map((post) => (
                    <PostListItem
                        key={post.title}
                        post={post}
                    />
                ))}
            </ul>
        </>
    );
}