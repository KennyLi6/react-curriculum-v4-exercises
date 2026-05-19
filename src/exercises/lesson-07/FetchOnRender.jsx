import './Lesson07Styles.css';
import PostList from './PostList';
import { getPosts } from './api';
import { useEffect, useState } from 'react';

export default function FetchOnRender() {
  const [postData, setPostData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        const data = await getPosts();
        setPostData(data);
      } catch (error) {
        setError(`Error: ${error.name} | ${error.message}`);
      } finally {
        setLoading(false);
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
          {loading && <p>Loading...</p>}
          {postData && <PostList posts={postData}/>}
      </div>
    </div>
  );
}
