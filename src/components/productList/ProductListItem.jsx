import React from 'react';

const ProductListItem = ({ product }) => {
  const {
    phone_details: { model, ram, internal_storage },
    phone_price,
    brand,
    phone_images,
    speciality,
  } = product || {};

  let tags;
  tags = speciality.map((tag) => (
    <span key={tag} className={`badge text-bg-warning badge-${tag}`}>
      {tag}
    </span>
  ));

  return (
    <>
      <div className='d-flex mb-5'>
        <div className='col-md-3 model text-start d-flex align-items-center'>
          <div className='image__div mx-2'>
            <img
              className='thumbnail-image'
              src={phone_images[0]}
              alt={model}
            />
          </div>
          <div className='brand'>
            <span className='title fw-bold'>{model}</span>
            <p>{brand}</p>
          </div>
        </div>
        <div className='col-md-3 ram text-start d-flex align-items-center'>
          <span>
            {ram}/{internal_storage}
          </span>
        </div>
        <div className='col-md-3 badge-td text-start d-flex align-items-center flex-wrap'>
          {/* <span className='badge text-bg-warning badge-value'>Best Value</span>
          <span className='badge text-bg-danger badge-camera'>Best Camera</span>
          <span className='badge text-bg-primary badge-performance'>
            Best Performance
          </span> */}
          {/* {tags} */}
          {speciality && tags}
        </div>
        <div className='col-md-3 price d-flex align-items-center justify-content-end text-end'>
          <span>TK {phone_price}</span>
        </div>
      </div>
    </>
  );
};

export default ProductListItem;
