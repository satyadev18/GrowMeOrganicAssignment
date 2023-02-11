import React, { useEffect,useState } from 'react';
import {DataGrid} from '@mui/x-data-grid'
import  './post.css'
const Post = () => {
 const [post, setPost] = useState([])

 // fetching data
 async function fetchData() {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const responseData = await response.json();
        console.log(responseData)
        setPost(responseData);
    }

  useEffect(() => {
      fetchData();
  }, []);


     const columns = [
       {field:"id",headerName:"ID",width:90},
       {field:"title",headerName:"Title",width:300},
       {field:"body",headerName:"Body",width:500},
     ]

     const rows = post.map((row)=>({
       id:row.id,
       title:row.title,
       body:row.body,


     }))


  return (
    <div className='grid'>
    <DataGrid
       rows={rows}
       columns={columns}
       pageSize={10}
       rowsPerPageOptions={[10]}
       checkboxSelection />
     </div>
  )
}

export default Post