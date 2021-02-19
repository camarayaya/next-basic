import React, { useEffect, useState } from "react";
import { Layout } from "../components/layout";
import Link from "next/link";
import {useRouter} from 'next/router';
import axios from "axios";

const Profile = ()=>{
    const [data, setData] = useState("");
    const url= "https://jsonplaceholder.typicode.com/users"
    useEffect( () =>{
        axios.get(url)
        .then(response =>{
            setData(response.data)
        })
        .catch(error =>{
            console.log(error)
        })
    }, [])
    const style={
        main:{
            padding: 10,
            maegin: 10,
            borderBottom: "1px solid #DDD" 
        },
        img:{
            height: 200,
            width: 300,
        }
      }
    return (
        <Layout>
          {
              data && data.map(user =>(
                  <div style={style.main} key={user.id}>
                      <h1>{user.name}</h1>
                      <div>Email: {user.email}</div>
                      <div>Telephne: {user.phone}</div>
                  </div>
              ))
          }
        </Layout>
    )
}

export default Profile;