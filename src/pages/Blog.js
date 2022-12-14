import React from 'react';
import {Link} from 'react-router-dom';
import dataPosts from '../data/dataPosts';


const Blog = () => {
  return (
    <>
      <div>
        <h2>Blog</h2>
          <ul>
            {dataPosts.map( (post) => (
              <li key={post.id}>
                <Link to={`/post/${post.id}`} > {post.titulo}</Link>
              </li>
            ))}
          </ul>
      </div>
    </>
  );
}
export default Blog;