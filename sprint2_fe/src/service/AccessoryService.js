import axios from "axios";

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