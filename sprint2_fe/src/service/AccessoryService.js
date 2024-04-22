import axios from "axios";

export const searchAccessory = async (name, minPrice, maxPrice, category, size, page) => {
    try {
        let res = await axios.get(`http://localhost:8080/api/accessory/search`, {
                params: {
                    name,
                    minPrice,
                    maxPrice,
                    category,
                    size,
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
        let rs = await  axios.get(`http://localhost:8080/api/accessory/getNewAccessory`);
        return rs.data;
    }catch (e){
        console.log(e);
    }
}

export const getFeatureAccessory = async () => {
    try{
        let rs = await  axios.get(`http://localhost:8080/api/accessory/getFeatureAccessory`);
        return rs.data;
    }catch (e){
        console.log(e);
    }

}