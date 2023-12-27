import React from 'react'

export default function Donate(toggle,toggle3) {
  const containerClass = `container${toggle ? ` ${toggle}` : ''}`;
  const cardClass = `card${toggle ? ` ${toggle}` : ''}`;
  return (
    <div id='page'>
      <div className={containerClass} id='donate'>
      <h1 className={`text-center${toggle ? ` ${toggle3} mt-5` : ''}`} >Donate to Support Us</h1>

      <div className={`row justify-content-center mt-4 ${toggle ? `text-${toggle3}` : ''}`}>
        <div className={`col-md-6 ${cardClass}`}>
          <div className="card-body">
            <h2 className={`mb-4${toggle ? ` text-${toggle3}` : ''}`}>Why Donate?</h2>
            <p>
              Your generous donation helps us continue to provide quality content and improve the user experience on our
              platform. With your support, we can bring more exciting features and services to our community.
            </p>

            <h2 className={`mt-4 mb-4${toggle ? ` text-${toggle3}` : ''}`}>How to Donate</h2>
            <p>
              To make a donation, please choose one of the following methods:
            </p>

            <ul>
              <li>1. Credit Card: Visit our secure donation page and enter your credit card information.</li>
              <li>2. PayPal: Send your donation to our PayPal account at seanmotanya@gmail.com.</li>
              <li>3. Bank Transfer: Contact us for bank transfer details.</li>
            </ul>

            <p className={`mt-4${toggle ? ` text-${toggle3}` : ''}`}>
              We appreciate your support and thank you for being a valuable part of our community!
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
