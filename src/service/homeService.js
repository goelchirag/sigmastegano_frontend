import axios from "axios"

const api = "https://localhost:8080"
const encode = "https://localhost:8080/encrypt"
class HomeService{
    getAllImages(){
        return axios.get(`${api}`);
    }
    getEncodedImage(Image,Message){
        const req = {img : Image,
                    message : Message,
                    type :"encrypt"}
        return axios.post(`${encode}`,req).then(err =>{
            console.log(err);
        });
    }
    getDecodedMessage(Image){
        const req = {img : Image,
                    message : "",
                    type :"decrypt"}
        return axios.post(`${encode}`,req);
    }
}
export default new HomeService();