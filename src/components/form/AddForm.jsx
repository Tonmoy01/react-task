import { useState } from 'react';
import { Col, Row, Form, Modal, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addProducts, fetchProducts } from '../../features/products/productsSlice';
import React from 'react';
import Select from 'react-select';

const options = [
	{ value: 'Best Value', label: 'Best Value' },
	{ value: 'Best Performance', label: 'Best Performance' },
	{ value: 'Best Camera', label: 'Best Camera' },
];

function AddForm({ show, handleClose }) {
	let [model, setModel] = useState('');
	let [brand, setBrand] = useState('');
	let [storage, setStorage] = useState('');
	let [tags, setTags] = useState([]);
	let [price, setPrice] = useState('');
	let [imageUrl, setImageUrl] = useState('');

	const dispatch = useDispatch();

	const restForm = () => {
		setModel('');
		setBrand('');
		setStorage('');
		setTags([]);
		setPrice('');
		setImageUrl('');
	};

	// phone_details: { model, ram, internal_storage },
	//   phone_price,
	//   brand,
	//   phone_images,
	//   speciality,

	const handleSubmit = (e) => {
		e.preventDefault();
		let [ram, rom] = storage.split('/').map((str) => Number(str));
		dispatch(
			addProducts({
				phone_details: { model, ram, internal_storage: rom },
				brand,
				speciality: tags.map((tag) => tag.value),
				phone_price: price,
				phone_images: [imageUrl],
			})
		);

		dispatch(fetchProducts());

		restForm();
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group className='mb-3' controlId='formGridAddress1'>
				<Form.Label>Product Name</Form.Label>
				<Form.Control placeholder='Enter your product name' onChange={(e) => setModel(e.target.value)} />
			</Form.Group>

			<Row className='mb-3'>
				<Form.Group as={Col} controlId='formGridEmail'>
					<Form.Label>Brand</Form.Label>
					<Form.Control placeholder='Enter brand name' onChange={(e) => setBrand(e.target.value)} />
				</Form.Group>

				<Form.Group as={Col} controlId='formGridPassword'>
					<Form.Label>Ram/Rom</Form.Label>
					<Form.Control placeholder='Zip code' onChange={(e) => setStorage(e.target.value)} />
				</Form.Group>
			</Row>

			{/* <Form.Group as={Col} controlId='formGridState'>
				<Form.Label>Tags</Form.Label>
				<Form.Select defaultValue='Choose...'>
					<option>Search and Select</option>
					<option value='Best Value'>Best Value</option>
					<option value='Best Performance'>Best Performance</option>
					<option value='Best Camera'>Best Camera</option>
				</Form.Select>
			</Form.Group> */}

			<Select options={options} isMulti={true} onChange={(value) => setTags(value)} />

			<Form.Group className='mb-3' controlId='formGridAddress1'>
				<Form.Label>Price</Form.Label>
				<Form.Control
					type='number'
					placeholder='Enter your product price'
					onChange={(e) => setPrice(e.target.value)}
				/>
			</Form.Group>

			<Form.Group className='mb-3' controlId='formGridAddress1'>
				<Form.Label>Image URL</Form.Label>
				<Form.Control
					type='text'
					placeholder='Enter your product Image URL'
					onChange={(e) => setImageUrl(e.target.value)}
				/>
			</Form.Group>

			{/* <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>
          Cancel
        </Button>
        <Button variant='primary'>Publish</Button>
      </Modal.Footer> */}

			<Button className='btn btn-primary' type='Submit'>
				Submit
			</Button>
		</Form>
	);
}

export default AddForm;
