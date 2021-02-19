import React, { useEffect } from "react";
import { Layout } from "../components/layout";
import axios from "axios";
import Link from "next/link";
import Head from "next/head";
import dynamic from "next/dynamic";

// const  Exemple = dynamic (()=> import ("../components/exemple"), {ssr: false})
const Home = ({data}) => {
  const style={
    padding: 10,
    maegin: 10,
    borderBottom: "1px solid #DDD"
  }
  useEffect(()=>{
    localStorage.setItem("jwt-token", "ezrtyuijkhsdfgjhk");
  },[])
  
  return (
    <>
    <Head>
      <title>La liste region</title>
    </Head>
    <Layout>
      <div className="container-fluid">
        {/* <Exemple /> */}
          <h1>Cette page utilise getServerSideProps</h1>
        {
          data.map(region =>(
            <div style={style} key={region.code}>
              <Link href="/region/[code]" as ={`/region/${region.code}`} passHref>
                <h1>{region.nom}</h1>
              </Link>
              <p>{region.code}</p>
            </div>
          ))
        }
      </div>
    </Layout>
    </>
  )
}
export async function getServerSideProps(context){
  const {data}= await axios.get( `${process.env.API_GEO}/regions`)
  // console.log(process.env.API_ROOT)
  return {
    props: {
      data
    }
  }
}
export default Home;