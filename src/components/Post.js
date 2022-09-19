import React from 'react';
import dataPosts from '../data/dataPosts';
import { useParams, Navigate } from 'react-router-dom';

const Post = () => {

  const {id} = useParams();
  return (
    <>
    {dataPosts[id - 1]?
      <div>
        <h2>{dataPosts[id - 1].titulo}</h2>
        <p>{dataPosts[id - 1].descripcion}</p>
      </div>
    :
    <Navigate to='/' />
    }
    </>
  );
}
export default Post;