import React, { useState } from 'react';
import Swal from 'sweetalert2';

export default function Paddrive({ toggle, toggle3 }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [donation, setDonation] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [country, setCountry] = useState('');
  const [donateMonthly, setDonateMonthly] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setDonation('');
    setName('');
    setEmail('');
    setPaymentMethod('');
    setCountry('');
    setDonateMonthly('');

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your feedback has been received !!',
      showConfirmButton: false,
      timer: 900,
    });
  };

  return (
    <div id='' className="container">
    <h3 className="my-4">Donate to Pad Drive</h3>
    <div className={`card ${toggle} p-5 my-5 bg-light rounded`}>
      <div className="card-body">
        <h4>Donation Details</h4>
        <h6>Fill out your donation information</h6>

      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-10">
          <form
            onSubmit={handleSubmit}
            className={`${toggle} p-5 my-5 bg-light rounded`}
          >
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
              <label
                htmlFor="paymentMethod"
                className={`form-label text-${toggle3}`}
              >
                Payment Method:
              </label>
              <select
                id="paymentMethod"
                className="form-select"
                value={paymentMethod}
                onChange={(event) => setPaymentMethod(event.target.value)}
              >
                <option value="" disabled>
                  Select Payment Method
                </option>
                <option value="mPesa">mPesa</option>
                <option value="visa">Visa Card</option>
                <option value="paypal">PayPal</option>
                <option value="mastercard">MasterCard</option>
                {/* Add more payment methods as needed */}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="country" className={`form-label text-${toggle3}`}>
                Country:
              </label>
              <select
                id="country"
                className="form-select"
                value={country}
                onChange={(event) => setCountry(event.target.value)}
              >
                <option value="" disabled>
                  Select Country
                </option>
                {/* Add a list of countries here */}
              </select>
            </div>
            <div className="mb-3">
              <label
                htmlFor="donateMonthly"
                className={`form-label text-${toggle3}`}
              >
                Donate monthly?:
              </label>
              <input
                type="radio"
                id="yes"
                value='yes'
                checked={donateMonthly==='yes'}
                onChange={() => setDonateMonthly('yes')}
                className="form-check-input"
              />
              <label htmlFor="yes" className="form-check-label">
                Yes
              </label>
            </div>
            <div className='form-check'>
             <input
             type='radio'
             id='no'
             value='no'
             checked ={donateMonthly==='no'}
             onChange={()=> setDonateMonthly('no')}
             className="form-check-input"
             />
             <label htmlFor='no' className='form-check-label'>
              No
             </label>
            </div>

            <button type="submit" className="btn btn-success btn-md">
              Donate
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}
