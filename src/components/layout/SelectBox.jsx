import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { useDispatch } from 'react-redux';
import { filterBYTag } from '../../features/filters/filtersSlice';

function SelectBox() {
	const dispatch = useDispatch();

	const handleFilterChange = (e) => {
		let tag = e.target.value;
		if (tag === 'All products') return dispatch(filterBYTag(''));
		dispatch(filterBYTag(tag));
	};
	return (
		<Form.Select as={Col} className='select-box' onChange={handleFilterChange}>
			<option>All products</option>
			<option value='Best value'>Best value</option>
			<option value='Best Performance'>Best Performance</option>
			<option value='Best Camera'>Best Camera</option>
			<option value='Excellent back camera'>Excellent back camera</option>
			<option value='Sufficient RAM and Storage'> Sufficient RAM and Storage </option>
			<option value="Good performance for it's price"> Good performance for it's price </option>
		</Form.Select>
	);
}

export default SelectBox;
