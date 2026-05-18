import './Lesson07Styles.css';
import PostList from './PostList';
import { getPosts } from './api';
import { useEffect, useState } from 'react';

export default function FetchOnRender() {
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    const data = getPosts()
    setPostData([{title: "test", body: "stuff"}]);
  }, [])

  return (
    <div className="root">
      <h1 className="heading">Fetch list of posts on render</h1>
      <div className="content">
          {postData && <PostList posts={postData}/>}
          {console.log(postData)}
      </div>
    </div>
  );
}
