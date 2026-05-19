import { useState } from 'react';
import './Lesson07Styles.css';
import { getSinglePost } from './api';
import PostList from './PostList';

export default function FetchOnClick() {
  const [postData, setPostData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFetchPost = async () => {
    try {
      setLoading(true);
      const data = await getSinglePost(1);
      setPostData([data]);
    } catch (error) {
      setError(`Error: ${error.name} | ${error.message}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="root">
      <h1 className="heading">Fetch single post on click</h1>
      <button type="button" onClick={handleFetchPost}>Get post</button>
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
