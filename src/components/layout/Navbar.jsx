import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import searchIcon from '../../assets/search.png';
import InputModal from './InputModal';
import { useDispatch, useSelector } from 'react-redux';
import { searched } from '../../features/filters/filtersSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.filters);

  const [show, setShow] = useState(false);
  const [input, setInput] = useState(search);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    dispatch(searched(''));
    setShow(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searched(input));
    setInput('');
  };

  return (
    <header>
      <nav className='navbar menu-bar'>
        <div className='container'>
          <a href='/' className='navbar-brand logo'>
            Logo
          </a>
          <div className='d-flex'>
            <form className='search-form' role='search' onSubmit={handleSubmit}>
              <input
                className='form-control me-2 search-input'
                type='search'
                placeholder='Search By Title or Brand'
                aria-label='Search'
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <img className='search-icon' src={searchIcon} alt='searchIcon' />
            </form>
            <Button variant='primary' onClick={handleShow}>
              Add Product
            </Button>
            <InputModal
              show={show}
              setShow={setShow}
              handleClose={handleClose}
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
