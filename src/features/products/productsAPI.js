import axios from '../../utils/axios';

export const getProducts = async (search) => {
  let queryStr = '';

  if (search?.trim().length > 0) {
    queryStr += `&q=${search}`;
  }

  let res = await axios.get(`products/?${queryStr}`);

  return res.data;
};

export const postProduct = async (data = {}) => {
  console.log(data);
  const res = await axios.post(`products`, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return res.data;
};
