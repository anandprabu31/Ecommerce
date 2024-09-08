import React, { useEffect, useState } from 'react'
import { Card,Button } from 'react-bootstrap';
import { add } from './Store/cartSlice';
import { useDispatch } from 'react-redux';


const Product = () => {
        const dispatch = useDispatch();
        const [products,getproducts]=useState([])
    useEffect(()=>{
        //api
        fetch('https://fakestoreapi.com/products')
        .then(data=>data.json())
        .then(result=> getproducts(result) )
       
    },[]);

    const addToCart = (product)=>{
          
      dispatch(add(product))
    }

    const cards = products.map(product=>(
            <div className='col-md-3'>
                    <Card key={product.key} className='h-100 prod'  >
            <div className='text-center'>
      <Card.Img variant="top" src={product.image} style={{width : '100px', height: '130px' }}/>
      </div>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          INR.{product.price}
        </Card.Text>
        
      </Card.Body>
      <Card.Footer className='d-flex justify-content-center' style={{backgroundColor:'white'}}>
      <Button variant="primary" onClick={()=>addToCart(product)}>Add to Cart</Button>
      </Card.Footer>
    </Card>

            </div>

    ))
  return (
    <>

     <div className='row'>
        {cards}
    </div> 
    </>
  )
}

export default Product
