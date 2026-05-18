import './Lesson07Styles.css';
import PostList from './PostList';
import { getPosts } from './api';
import { useEffect, useState } from 'react';

export default function FetchOnRender() {
  const [postData, setPostData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const data = await getPosts();
        setPostData(data);
      } catch (error) {
        setError(`Error: ${error.name} | ${error.message}`);
      }
    }
    fetchPosts();
  }, []);

  return (
    <div className="root">
      <h1 className="heading">Fetch list of posts on render</h1>
      <div className="content">
          {error && (
            <div>
              <p>{error}</p>
            </div>
          )}
          {postData && <PostList posts={postData}/>}
      </div>
    </div>
  );
}
