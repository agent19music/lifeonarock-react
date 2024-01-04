import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Bloginfo() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  const [isLiked, setIsLiked] = useState([]) 
  const toggleLike = () => {
   setIsLiked(!isLiked);
 };
  const like = isLiked ? 'fa-heart':'fa-heart.liked';

  useEffect(() => {
    fetch(`http://localhost:6001/blogs/${id}`)
      .then((res) => res.json())
      .then((res) => {
        // Add a 'liked' property to each comment
        // const updatedComments = res.comments.map(comment => ({ ...comment, liked: false }));
        // setBlog({ ...res, comments: updatedComments });
        setBlog(res)
      })
      .catch((error) => console.error(error));

  }, [id]);

  const handleLike = (commentId) => {
    // Find the comment and toggle its 'liked' status
    // const updatedComments = blog.comments.map(comment => {
    //   if (comment.id === commentId) {
    //     comment.liked = !comment.liked;
    //     // Send a PATCH request to update the like count
    //     // fetch(`http://localhost:6001/comments/${commentId}`, {
    //     //   method: 'PATCH',
    //     //   headers: { 'Content-Type': 'application/json' },
    //     //   body: JSON.stringify({ likes: comment.liked ? comment.likes + 1 : comment.likes - 1 }),
    //     // }).catch((error) => console.error(error));
    //   }
    //   return comment;
    // });
    // setBlog({ ...blog, comments: updatedComments });

  };

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
                    <p className="card-text">Likes: {comment.likes} <i id={like} className={`far fa-regular fa-heart`} onClick={()=>toggleLike()}></i></p>
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
