'use client'

import axios from "axios"
import { useEffect, useState } from 'react';
import React from "react"
import './style.css'


export default function Dash() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get('https://api.coinlore.net/api/coin/markets/?id=90').then((response) => {
      setPost(response.data)
    })
  }, []);


  return (
    <div>
      {post.map((post,index) =>{
        return(
          <p key={index}>{post.name}</p>
        )
      })}
    </div>
  )
}

//https://www.freecodecamp.org/portuguese/news/como-usar-o-axios-com-o-react-o-guia-definitivo-2021/k
//https://www.freecodecamp.org/news/how-to-consume-rest-apis-in-react/