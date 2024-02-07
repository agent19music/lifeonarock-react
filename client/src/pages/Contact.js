import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Contact({ toggle, toggle3, addFeedback }) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [thoughts, setThoughts] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    addFeedback({ thoughts, name, email, rating });
    setThoughts('');
    setName('');
    setEmail('');
    setRating(0);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your feedback has been received !!",
      showConfirmButton: false,
      timer: 900
    });
  };

  const handleStarClick = (star) => {
    setRating(star);
  };

  const renderStars = () => {
    const stars = [1, 2, 3, 4, 5];
    return (
      <div className="mb-3">
        <label className={`form-label text-${toggle3}`}>Rate the site:</label>
        <div>
          {stars.map((star) => (
            <span
              key={star}
              onClick={() => handleStarClick(star)}
              className={`star ${star <= rating ? 'text-warning' : ''}`}
            >
              ★
            </span>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div id='page' className="container-fluid">
      <div className='container' id='contact-card'>
        <h3>Contact Information</h3>
        <div id='phone-email' className="row">
          <div className="col-md-6">
            <h6><i className="fa-solid fa-phone px-3"></i>Phone</h6>
            <p>+254 745 071 299</p>
            <p>+254 111 741 655</p>
          </div>
          <div className="col-md-6">
            <h6><i className="fa-solid fa-envelope-open px-3"></i>Email Us</h6>
            <a href='mailto:forlifeonarock@gmail.com'>forlifeonarock@gmail.com</a>
          </div>
        </div>
        <div id='addy-social' className="row">
          <div className="col-md-6">
            <h6><i className="fa-solid fa-map px-3"></i>Address</h6>
            <p>219 Bankai Towers</p>
            <p>Nairobi, Kenya</p>
          </div>
          <div className="col-md-6" id='social'>
            <h6>Social</h6>
            <Link to='#' ><i className="fa-brands fa-instagram"></i></Link>
            <Link to='#' ><i className="fa-brands fa-x-twitter"></i></Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-sm-10">
            <form onSubmit={handleSubmit} className={`${toggle} p-5 my-5 bg-light rounded`}>
              <div className="mb-3">
                <label htmlFor="name" className={`form-label text-${toggle3}`}>
                  Name:
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  id="name"
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className={`form-label text-${toggle3}`}>
                  Email:
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  id="email"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="thoughts" className={`form-label text-${toggle3}`}>
                  Thoughts:
                </label>
                <textarea
                  value={thoughts}
                  onChange={(event) => setThoughts(event.target.value)}
                  id="thoughts"
                  className="form-control"
                  required
                  rows='5'
                />
              </div>
              {renderStars()}

              <button type="submit" className="btn btn-success btn-md">
                Send Feedback
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
