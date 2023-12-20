import React,{useState} from 'react'
import Swal from 'sweetalert2';

export default function Contact(toggle,toggle3,addFeedback) {

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
    <div id='page'>
      <div className="container">
      <div className="row justify-content-center">
        <div className="col-6">
          <form onSubmit={handleSubmit} className={`${toggle} p-5 my-5`}>
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
              <input
                type="textarea"
                value={thoughts}
                onChange={(event) => setThoughts(event.target.value)}
                id="thoughts"
                className="form-control"
                required
                rows='5'
              />
            </div>
            {renderStars()}
           
            
            <button type="submit" className="btn btn-success btn md-2">
              Send Feeback
            </button>
          </form>
        </div>
      </div>
      
    </div>
    </div>
  )
}
