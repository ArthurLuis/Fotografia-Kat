import { useState, useEffect } from 'react';
import axios from 'axios';

import './PostList.css';

function PostList() {
  const [posts, setPosts] = useState([]);

  const loadPosts = async () => {
    const res = await axios.get('http://localhost:3001/api/posts');
    setPosts(res.data);
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div className="post-list">
      
        <div  className="post-card">
          <p>aaaaaaaaaaaaaaa</p>
        </div>
      
    </div>
  );
}

export default PostList;
