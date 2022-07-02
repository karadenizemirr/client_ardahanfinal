import axios from 'axios';
import Head from 'next/head';
import React from 'react';
import Layout from '../../components/core/Layout';
import { BASE_TITLE, BASE_URL } from '../../lib/_env';

const Detail = ({post}) => {
    return (
        <Layout>
            <Head>
                <title>
                    {post.data.attributes.title} - {BASE_TITLE}
                </title>
            </Head>

            <div className="container mx-auto">
                <div className="postImg">
                    <img src="" alt="" />
                </div>
                <div className="postTitle text-center">
                    <h1 className='text-xl font-poppinsBlack tracking-widest'>
                        {post.data.attributes.title}
                    </h1>
                </div>
                <div className="postContent p-10">
                    <p dangerouslySetInnerHTML={{__html: post.data.attributes.content}} 
                    className='text-center leading-9 font-poppinsLight'/>
                </div>
                <div className="socialMedia">
                    <div className="icons flex justify-end mt-10 mr-10 gap-5">
                        <img className='w-8' src="/images/icons/facebook.svg" alt="" />
                        <img className='w-8' src="/images/icons/facebook_message.svg" alt="" />
                        <img className='w-8' src="/images/icons/twitter.svg" alt="" />
                        <img className='w-8' src="/images/icons/whatsapp.svg" alt="" />
                        <img className='w-8' src="/images/icons/reddit.svg" alt="" />
                        <img className='w-8' src="/images/icons/linkedn.svg" alt="" />
                    </div>
                    <div className='flex justify-end mt-5 mr-10'>
                        <p className='font-poppinsLight' >Herkesin öğrenmesi için paylaş.</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}


export const getServerSideProps = async (context) => {
    try {
        const result = await axios.get(`${BASE_URL}/api/blogs/${context.params.id}`)
        const data = result.data

        return {
            props: {
                post: data
            }
        }
    } catch (error) {
        
    }
}
export default Detail;
