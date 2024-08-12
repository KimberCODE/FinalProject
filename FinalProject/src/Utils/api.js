import Axios from 'axios';

const getProducts = async () => {
    return axois.get('https://fakestoreapi.com/products')
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log(err)
        })
}


export { getProducts };