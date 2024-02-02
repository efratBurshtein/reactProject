import axios from 'axios'

const UsePost = () => {

    const post = async (url, data) => {
        try {
           console.log(data);
            await axios.post(url, data)
        } catch (error) {
            console.error(error)
        }
    }

   return post;
}

export default UsePost