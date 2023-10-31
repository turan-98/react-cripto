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

  // copiar este site  
  //https://coinmarketcap.com/all/views/all/
  return (
    <>
    <span className="notice">
     Still in work in progress... 👨‍💻🧟
     <small>Project based in React, Next.js, CSS, API REST</small>
    </span>
    <table className="wrapper-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Symbol</th>
          <th>Price</th>
          <th>Volume</th>
        </tr>
      </thead>
      <tbody className="body-table">
        {post.map((post, index) => {
          return (
            <tr className="lines-table" key={index}>
              <td>{index}</td>
              <td className="name-coin">{post.name}</td>
              <td>{post.quote}</td>
              <td>{post.price}</td>
              <td>{post.volume}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
    </>
  )
}

//https://www.freecodecamp.org/portuguese/news/como-usar-o-axios-com-o-react-o-guia-definitivo-2021/k
//https://www.freecodecamp.org/news/how-to-consume-rest-apis-in-react/