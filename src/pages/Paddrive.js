import React,{useState} from 'react'
import Swal from 'sweetalert2';

export default function Paddrive({toggle, toggle3}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [donation, setDonation] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    setDonation('');
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
  return (
    <div id=''>
      <h3>Donate to the Pad Drive</h3>
      <h4>Donation Details</h4> 
      <h6>Fill out your donation information</h6>
      
      <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-sm-10">
            <form onSubmit={handleSubmit} className={`${toggle} p-5 my-5 bg-light rounded`}>
              <div className="mb-3">
                <label htmlFor="name" className={`form-label text-${toggle3}`}>
                  Full Name:
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
                  Email Address:
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
                <label htmlFor="donation" className={`form-label text-${toggle3}`}>
                  Donation amount:
                </label>
                <input
                  type="number"
                  value={donation}
                  onChange={(event) => setDonation(event.target.value)}
                  id="donation"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className={`form-label text-${toggle3}`}>
                  Payment Method:
                </label>
                <input
                  type="radio button"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  id="email"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className={`form-label text-${toggle3}`}>
                 Country:
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
                <label htmlFor="email" className={`form-label text-${toggle3}`}>
                 Donate monthly?:
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  id="email"
                  className="form-control"
                />
              </div>
              

              <button type="submit" className="btn btn-success btn-md">
                Donate
              </button>
            </form>
          </div>
        </div>
    </div>
  )
}
