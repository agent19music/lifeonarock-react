import React from 'react'

export default function Landingpage() {
  return (
    <section id='page'>
      <div className="container">
      <div className="row align-items-center justify-content-center my-3">
        <div className="col-lg-6 text-center">
          <p className="text-muted">Get involved today</p>
          <h1>Explore the world of sex education</h1>
          <p>Learn and empower yourself</p>
          <button type="button" className="btn btn-primary me-2">Join now</button>
          <button type="button" className="btn btn-outline-secondary">Start exploring</button>
        </div>
        <div className="col-lg-6">
          <img src='https://images.squarespace-cdn.com/content/v1/5fae727a3a3851737ea3e023/e0c3c97a-ca15-4259-970f-371cd06f7cb1/Screen+Shot+2021-11-17+at+7.27.39+PM.png' alt='Education Illustration' className='img-fluid'/>
        </div>
      </div>
    </div>
    </section>
  )
}
