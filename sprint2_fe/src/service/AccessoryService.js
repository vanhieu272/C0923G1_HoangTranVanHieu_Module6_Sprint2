import axios from "axios";

const token = localStorage.getItem('token');

export const searchAccessory = async (name, minPrice, maxPrice, sizeId, category, sortDirection, page) => {
    try {
        let res = await axios.get(`http://localhost:8080/api/helios/search`, {
                params: {
                    name,
                    minPrice,
                    maxPrice,
                    sizeId,
                    category,
                    sortDirection,
                    page
                }
            }
        );
        return res.data;
    } catch (e) {
        console.log(e);
    }
}

export const getAllCategory = async () => {
    try {
        let rs = await axios.get(`http://localhost:8080/api/category/getAll`);
        return rs.data;
    } catch (e) {
        console.log(e);
    }
}

export const getAllSize = async () => {
    try {
        let rs = await axios.get(`http://localhost:8080/api/size/getAll`);
        return rs.data;
    } catch (e) {
        console.log(e);
    }
}

export const getNewAccessory = async () => {
    try{
        let rs = await  axios.get(`http://localhost:8080/api/helios/getLatestAccessory`);
        return rs.data;
    }catch (e){
        console.log(e);
    }
}

export const getFeatureAccessory = async () => {
    try{
        let rs = await  axios.get(`http://localhost:8080/api/helios/getFeatureAccessory`);
        return rs.data;
    }catch (e){
        console.log(e);
    }

}

export const findAccessoryById = async (id) => {
    try{
        let rs = await axios.get(`http://localhost:8080/api/helios/find/${id}`)
        return rs.data;
    }catch (e){
        console.log(e);
    }
}

export const getShoppingCart = async () =>{
    if(token == null){
        const res = await axios.get(`http://localhost:8080/api/shopping`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }
            );
        return res.data;
    }else {
        const res = await axios.get(`http://localhost:8080/api/shopping`, {withCredentials: true})
        return res.data;
    }
}

export const getUser = async () => {
    if(token == null){
        const res = await axios.get(`http://localhost:8080/api/user`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }
            );
        return res;
    }
}

export const setShoppingcart = async (index, id, product) => {
    try {
        if (token != null) {
            const res = await axios.post(`http://localhost:8080/api/shopping/${index}/${id}`,""
                ,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                }
                ,{ withCredentials: true }
            );
            return res.data;
        } else {
            const res = await axios.post(`http://localhost:8080/api/shopping/${index}/` + product.id,"", { withCredentials: true }
            );
            return res.data;
        }

    } catch (e) {
        console.log(e)
        return e
    }
}
export const createShoppingcart = async (idProduct, quantity) => {
    const newValue = {
        quantity: quantity,
        products: idProduct
    }
    const id = idProduct.id;
    try {
        if (token) {
            const res = await axios.post(`http://localhost:8080/api/shopping/create/${id}/${quantity}`,"",

                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                }
            );
            return res.data;
        } else {
            const res = await axios.post("http://localhost:8080/api/shopping", newValue,
                { withCredentials: true })
            return res.data;
        }

    } catch (e) {
        console.log(e)
        return e
    }
}

export const getShoppingcart = async () => {

    if (token != null) {
        const res = await axios.get(`http://localhost:8080/api/shopping`
            ,
            {

                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }
        );
        return res.data;
    } else {
        const res = await axios.get(`http://localhost:8080/api/shopping`, { withCredentials: true })
        return res.data;
    }
}
export const deleteShoppingcart = async (id, idP) => {
    try {
        if (token != null) {
            const res = await axios.delete(`http://localhost:8080/api/shopping/delete/${id}`
                ,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                }
            );
            return res.data;
        } else {
            const res = await axios.delete(`http://localhost:8080/api/shopping/deleteSession/` + idP, { withCredentials: true })
            return res.data;
        }

    } catch (e) {
        console.log(e)
        return e
    }
}

export const createOrder = async () => {

    if (token != null) {
        const res = await axios.post('http://localhost:8080/api/order',""
            ,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }
        );
        return res;
    }
}

export const getBillDetail = async (id) => {

    if (token != null) {
        const res = await axios.get(`http://localhost:8080/api/order/detail?id=${id}`
            ,
            {

                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }
        );
        return res;
    }
}

export const getBills = async () => {

    if (token != null) {
        const res = await axios.get(`http://localhost:8080/api/order`
            ,
            {

                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }
        );
        return res;
    }
}