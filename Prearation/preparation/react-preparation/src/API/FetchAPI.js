import React from 'react';
import axios from 'axios';

const FetchAPI = () => {
    const [data, setdata] = useState('')
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=> console.log(response))
    },[])
    return(
        <div>
            
        </div>
    )
}
export default FetchAPI