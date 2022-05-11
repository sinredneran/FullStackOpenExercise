import axios from 'axios'

const baseUrl =  `http://localhost:3001/persons`;

const getAll = async () => {
    const request = axios.get(baseUrl);
    const response = await request;
    return response.data;
}

const create = async newObject => {
    const request = axios.post(baseUrl, newObject)
    const response = await request;
    return response.data;
}

const deleteContact = (id) => {
   return axios.delete(`${baseUrl}/${id}`)
}

const updateContact = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject);
    return request.then(response => response.data)
}

const exportFunc = {
    getAll,
    create,
    deleteContact,
    updateContact
}

export default exportFunc;