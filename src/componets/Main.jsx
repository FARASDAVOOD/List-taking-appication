
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EditForm from './EditForm';
import api from './axios';
import { useDispatch, useSelector } from 'react-redux';
import { delet, edit } from './redux/FormSlice';

const Main1 = () => {

  const {products} = useSelector((state)=>state.form)

const dispatch = useDispatch()
 
  const navigate = useNavigate();



  const handleCreate = () => {
    navigate('/form');
  };

 

  
  return (
    <div>
      <div>
        <button
          onClick={handleCreate}
          style={{
            backgroundColor: 'lightblue',
            width: '150px',
            height: '40px',
            position: 'absolute',
            right: '0',
            top: '40px',
            marginRight: '40px',
          }}
        >
          Create New
        </button>
      </div>
      <div style={{ marginTop: '100px', display: 'grid', gridTemplateColumns: 'auto auto auto auto' }}>
        {products.map((product) => (
          product.isEditing?<EditForm color={product.color} dis={product.dis} title={product.title} id={product.id}/>:(
          <div
            key={product.id} 
            style={{
              border: 'solid',
              width: '200px',
              backgroundColor: product.color,
              margin: '60px',
              marginTop: '60px',
            }}
          >
            <h2>Title</h2>
            <div>{product.title}</div>
            <h2>Description</h2>
            <div>{product.dis}</div>
            <div>
              <br />
              <br />
              <button onClick={() => dispatch(edit(product.id))} style={{ backgroundColor: 'lightblue' }}>Edit</button>
              <button onClick={()=> dispatch(delet(product.id))} style={{ backgroundColor: 'red' }}>Delete</button>
              <br />
              <br />
            </div>
          </div>)
        ))}
      </div>
    </div>
  );
};

export default Main1;
