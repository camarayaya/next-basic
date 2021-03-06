import React from "react";
import {useRouter} from "next/router";
import { Layout } from "../../components/layout";
import axios from "axios";
import Head from "next/head";

const CodeRegion = ({data}) => {
    return (
        <>
            {
                data && (
                    <>
                        <Head>
                        <title>{data.nom}</title>
                        </Head>
                        <Layout>
                            <h1>{data.nom}</h1>
                            <p>{data.code}</p>
                        </Layout>
                    </>
                )
            }
        
        </>
    )
}

export const getServerSideProps = async (context)=>{
    const code=context.params.code
    const url ="https://geo.api.gouv.fr";
    const {data} = await axios.get(`${url}/regions/${code}`)
    return{
        props :{
            data
        }
    }

}

export default CodeRegion;