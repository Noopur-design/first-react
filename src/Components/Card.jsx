import React from 'react';

function Card() {
  return (
    <div className="card-container  flex flex-wrap justify-evenly w-full mt-10 px-4">
      <div className="card  m-5" style={{ width: '18rem' }}>
        <div className="card-body bg-[#d2d4c8]">
          <h5 className="card-title">Card title</h5>
          <h6 className="card-subtitle mb-2 text-red-800">Card subtitle</h6>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="card-link border-1 border-zinc-800 text-black">Card link</a>
          <a href="#" className="card-link border-1 border-zinc-800 text-black">Another link</a>
        </div> 
      </div>
      <div className="card  m-5" style={{ width: '18rem' }}>
        <div className="card-body bg-[#d2d4c8]">
          <h5 className="card-title">Card title</h5>
          <h6 className="card-subtitle mb-2  text-red-800">Card subtitle</h6>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="card-link border-1 border-zinc-800 text-black">Card link</a>
          <a href="#" className="card-link border-1 border-zinc-800 text-black">Another link</a>
        </div> 
      </div>
      <div className="card  m-5" style={{ width: '18rem' }}>
        <div className="card-body bg-[#d2d4c8]">
          <h5 className="card-title">Card title</h5>
          <h6 className="card-subtitle mb-2 text-red-800">Card subtitle</h6>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="card-link border-1 border-zinc-800 text-black">Card link</a>
          <a href="#" className="card-link border-1 border-zinc-800 text-black">Another link</a>
        </div> 
      </div>
    </div>
  );
}

export default Card;
