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
    <div>
      {blog &&
    <div className="container bg-light text-black" id='blog'>
    <h1 className="text-center text-black mt-5">{blog.title}</h1>

    <div className="row justify-content-center mt-4 text-black">
      <div className="col-md-6 card bg-light text-black">
        <div className="card-body">
          <img src={blog.poster} alt="Blog Poster" className="img-fluid rounded mb-4" />
          <p>{blog.content}</p>

          <h2 className="mt-4 mb-4 text-black">Comments</h2>
          {blog.comments.map(comment => (
            <div key={comment.id} className="mb-2 card bg-light text-black">
              <div className="card-body">
                <h6 className="card-title text-black">{comment.username}</h6>
                <p className="card-text text-black">{comment.comment}</p>
                <p className="card-text text-black">Likes: {comment.likes} <i id={like} className="far fa-regular fa-heart" onClick={()=>toggleLike()}></i></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  
  </div>}
  </div>
  );
}
