import axios from 'axios'
import { BASE_TITLE, BASE_URL } from '../../lib/_env'
import Table from "../../components/toolbox/Table";
import {achievementsTableTypes} from '../../components/types/tableTypes'
import Layout from '../../components/core/Layout'
import Head from 'next/head';

const Index = ({achievements,error}) => {
    return (
        <Layout>
            <Head>
                <title>
                    Başarılarımız - {BASE_TITLE}
                </title>
            </Head>
            <Table 
            COLUMNS={achievementsTableTypes}
            DATA={achievements.data}
            TITLE="başarılarımız"
            />
        </Layout>

    )
}


export const getStaticProps = async () => {
    try {
        const result = await axios.get(BASE_URL + '/api/achievements')
        const data = result.data

        return {
            props: {
                achievements: data
            }
        }

    }catch(err){
        return {
            error: err
        }
    }
}

export default Index