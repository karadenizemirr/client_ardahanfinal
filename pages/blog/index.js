import axios from 'axios'
import Layout from '../../components/core/Layout'
import { BASE_TITLE, BASE_URL } from '../../lib/_env'
import ReactTextMoreLess from 'react-text-more-less';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

const Index = ({ posts, error, ...props }) => {
    return (
        <Layout>
            <Head>
                <title>
                    Blog - {BASE_TITLE}
                </title>
            </Head>
            <div className='container mx-auto ' >
                <div className="title text-center mt-5 mb-10">
                    <h1 className='text-2xl font-poppinsLight' >Blog</h1>
                </div>
                {
                    posts.data.length === 0 ? <div>Yazı yok</div> :
                        posts.data.map((item, index) => (
                            <div className='border-2 p-5 w-1/3 flex flex-col gap-4 text-center rounded-md shadow-md 
                            hover:bg-gray-100 transition-all duration-150 delay-200
                            ' key={index} >
                                <div className="image cursor-pointer">
                                    <Link href="/" >
                                    <Image width={350} height={300} src={`${BASE_URL + item.attributes.image.data[0].attributes.url}`} alt="" />
                                    </Link>
                                </div>
                                <div className="title">
                                    <h1 className='font-poppinsBold'>{item.attributes.title}</h1>
                                </div>
                                <div className="description leading-8 font-poppinsLight">
                                    <ReactTextMoreLess 
                                    text={item.attributes.content}
                                    lessHeight={120}
                                    />
                                </div>
                                <div className="moreThan">
                                    <Link href={`/blog/${item.id}`} >
                                    <button>
                                        Devamını Oku
                                    </button>
                                    </Link>
                                </div>
                            </div>
                        ))
                }
            </div>
        </Layout>
    )
}

export const getStaticProps = async () => {
    try {
        const result = await axios.get(BASE_URL + '/api/blogs?populate=*')
        const data = result.data

        return {
            props: {
                posts: data
            }
        }
    } catch (err) {
        return {
            props: {
                error: err
            }
        }
    }
}

export default Index
