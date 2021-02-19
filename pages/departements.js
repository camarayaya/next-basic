import react from "react";
import {Layout} from "../components/layout";
import axios from "axios";
import Head from "next/head";
const Departement = ({data})=>{
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
    return(
        <>
        <Head>
          <title>liste des departements</title>
        </Head>
        <Layout>
      <h1>Cette page utilise getInitialProps</h1>
          {  data.map(departement =>(
              <div style={style.main} key={departement.code}>
                  <h1>{departement.nom}</h1>
                  <div>
                      Departement  : {departement.code}
                  </div>
                  <div>
                      Region  : {departement.codeRegion}
                  </div>
              </div>
            ))
        }
        </Layout>
        </>
    )
}

export const getStaticProps= async()=>{
    const url="https://geo.api.gouv.fr/departements";
    const {data}= await axios.get(url);
    return{
        props:{data}
    }
}
export default Departement;