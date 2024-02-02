import axios from 'axios';

const UsePut = () => {
    
    const put = async (url, data) => {
        try {
            await axios.put(url, data)
        } catch (error) {
            console.error(error)
        }
    }
    return put
}

export default UsePut