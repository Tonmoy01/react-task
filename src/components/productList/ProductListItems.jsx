import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../features/products/productsSlice';
import SelectAndTitleLayout from '../layout/SelectAndTitleLayout';
import ProductListItem from './ProductListItem';
import Loading from '../layout/Loading';

const ProductListItems = () => {
  const { products, isLoading, isError, error } = useSelector(
    (state) => state.products
  );
  const { tag, search } = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts({ search }));
  }, [dispatch, search]);

  let content;
  if (isLoading) content = <Loading />;
  if (!isLoading && isError)
    content = (
      <div className='alert alert-danger' role='alert'>
        {error}
      </div>
    );

  if (!isLoading && !isError && products?.length === 0) {
    content = (
      <div className='alert alert-warning' role='alert'>
        No Products Found
      </div>
    );
  }

  const tagFilter = (product) => {
    if (!tag?.trim().length) return true;
    return product.speciality.includes(tag);
  };

  if (!isLoading && !isError && products?.length > 0) {
    content = products
      .filter(tagFilter)
      .map((product, idx) => (
        <ProductListItem key={product.id} product={product} />
      ));
  }

  return (
    <div className='container product-list mt-5'>
      <SelectAndTitleLayout />
      <div className='row product-table mt-5'>
        <div className='row'>
          <div className='col-md-3 text-start'>Model</div>
          <div className='col-md-3 text-start'>Ram/Rom</div>
          <div className='col-md-3 text-start'>Tag</div>
          <div className='col-md-3 text-end'>Price</div>
        </div>
        <div className='row mt-5 mb-5'>{content}</div>
      </div>
      {/* Another Components */}
    </div>
  );
};

export default ProductListItems;
