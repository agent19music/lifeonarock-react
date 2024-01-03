import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Bloginfo() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:6001/blogs/${id}`)
      .then((res) => res.json())
      .then((res) => setBlog(res))
      .catch((error) => console.error(error));

  }, [id]);

  return (
    <div id='content' className="container mt-4">
      {blog && (
        <>
          <div className="row">
            <div className="col-md-4">
              <img src={blog.poster} alt="Blog Poster" className="img-fluid rounded" />
            </div>
            <div className="col-md-8">
              <h3>{blog.title}</h3>
              <p>{blog.content}</p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-12">
              <h5>Comments:</h5>
              {blog.comments.map(comment => (
                <div key={comment.id} className="card mb-2">
                  <div className="card-body">
                    <h6 className="card-title">{comment.username}</h6>
                    <p className="card-text">{comment.comment}</p>
                    <p className="card-text">Likes: {comment.likes}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
