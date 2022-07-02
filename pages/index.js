import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Layout from '../components/core/Layout'
import AddComment from '../components/toolbox/AddComment'
import Comment from '../components/toolbox/Comment'
import { BASE_TITLE, BASE_URL } from '../lib/_env'

export default function Home({ comments }) {
  const [openAddComment, setOpenAddComment] = useState(0)
  return (
    <Layout>
      <Head>
        <title>
          Anasayfa - {BASE_TITLE}
        </title>
      </Head>
      <div className="container mx-auto">
        <header className='grid lg:grid-cols-2' >
          <div className="col-1 flex flex-col lg:mt-52 mt-10 text-center gap-5">
            <div className="title">
              <h1 className='text-4xl font-poppinsBlack text-primary tracking-widest' >Ardahan Final Özel Öğretim Kursu</h1>
            </div>
            <div className="content">
              <h2 className='font-poppinsLight' >
                Türkiyenin eğitim markası Final Eğitim Kurumlarının, 42 yıllık tecrübesini Ardahan&apos;da göstermekten gurur duyuyoruz.
              </h2>
            </div>
            <div className="main-footer">
              <p className='text-sm font-poppinsLight ' >Ön Kayıt Yaptırarak Finalli Olmanın Avantajını Yakala</p>
              <Link href="application" >
              <button className='mt-5' >Ön Kayıt Yap</button>
              </Link>
              <div className="social">
              <div className="icons flex justify-center mt-5 gap-5">
                        <Image width={30} height={100} src="/images/icons/facebook.svg" alt="" />
                        <Image width={30} height={100} src="/images/icons/twitter.svg" alt="" />
                        <Image width={30} height={100} src="/images/icons/whatsapp.svg" alt="" />
                        <Image width={30} height={100} src="/images/icons/linkedn.svg" alt="" />
                    </div>
              </div>
            </div>
          </div>
          <div>
            
            <Image src="/images/header.png" width={1200} height={1200} priority="false" alt='Ardahan Final Özel Öğretim Kursu' />
            
          </div>
        </header>
        <div className="services lg:flex sm:gap-5 justify-center ">
          <div className="card mt-10 lg:w-1/6 p-3 bg-light rounded-lg shadow-md text-center hover:bg-secondary transition-all delay-150">
            <div className="title flex flex-col">
              <span className="m-auto">
                <Image width={60} height={60} src="/images/icons/ruler.svg" alt="" />
              </span>
              <h1 className="font-bold text-lg mt-5" >Soru Çözümleri</h1>
            </div>
            <div className="main">
              <p className="mt-4">
                Tüm derslere özel haftaiçi ve haftasonu soru çözümleri yapılmaktadır.
              </p>
            </div>
          </div>

          <div className="card mt-10 lg:w-1/6 p-3 bg-light rounded-lg shadow-md text-center hover:bg-secondary transition-all delay-150">
            <div className="title flex flex-col">
              <span className="m-auto">
                <Image width={60} height={60} src="/images/icons/book.svg" alt="" />
              </span>
              <h1 className="font-bold text-lg mt-5" >Kaynaklar</h1>
            </div>
            <div className="main mt-4">
              <p>
                Her derse ait degiler, kitaplar, yaprak testler ve deneme sınavları.
              </p>
            </div>
          </div>
          <div className="card mt-10 lg:w-1/6 p-3 bg-light rounded-lg shadow-md text-center hover:bg-secondary transition-all delay-150">
            <div className="title flex flex-col">
              <span className="m-auto">
                <Image width={60} height={60} src="/images/icons/teacher.svg" alt="" />
              </span>
              <h1 className="font-bold text-lg mt-5" >Deneyimli Kadro</h1>
            </div>
            <div className="main mt-4">
              <p>
                Alanında uzman öğretmenlerimiz her zaman öğrencilerinin yanında.
              </p>
            </div>
          </div>
          <div className="card mt-10 lg:w-1/6 p-3 bg-light rounded-lg shadow-md text-center hover:bg-secondary transition-all delay-150">
            <div className="title flex flex-col">
              <span className="m-auto">
                <Image width={60} height={60} src="/images/icons/board.svg" alt="" />
              </span>
              <h1 className="font-bold text-lg mt-5" >Geniş Sınıflar</h1>
            </div>
            <div className="main mt-4">
              <p>
                15&apos;er kışılık sınıflarımıda öğrencilerimizin tüm dikkati derslerde.
              </p>
            </div>
          </div>
          <div className="card mt-10 lg:w-1/6 p-3 bg-light rounded-lg shadow-md text-center hover:bg-secondary transition-all delay-150">
            <div className="title flex flex-col">
              <span className="m-auto">
                <Image width={60} height={60} src="/images/icons/online-book.svg" alt="" />
              </span>
              <h1 className="font-bold text-lg mt-5" >Online Kaynaklar</h1>
            </div>
            <div className="main mt-4">
              <p>
                Çevrimiçi soru çözümü ve konu anlatım videoları. İstediğiniz zaman ulaşabilirsiniz.
              </p>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="title text-center mt-16">
            <h1 className="text-xl font-extrabold border-y-2 p-3">Hakkımızda</h1>
          </div>
          <div className="main ">
            <div className="card">
              <div className="title container mx-auto text-center p-10">
                <p
                  className="leading-10 mr-10 ml-10"
                >
                  Türkiye&apos;nin eğitim markası Final Eğitim Kurumlarının, 41 yıllık tecrübesini
                  Ardahan ilimizde göstermekten gurur duyuyoruz.
                  <br />
                  Öğrencilerimizin çok daha iyi şartlarda yetişmesi için elimizden geleni yapıyoruz.
                  <br />
                  Kurumumuz 6,7 ve 8.sınıf öğrencilerimiz, 9,10,11,12.sınıf öğrencilerimiz ve
                  üniversite sınavına hazırlanan öğrencilerimiz için
                  hizmet vermekte ve öğrencilerimizi en iyi şekilde yetiştirmekteyiz.
                  <br />
                  Öğrencilerimizle sınıf ortamında işlediğimiz derslere ek olarak
                  bireysel olarak konu anlatımları yapmaktayız.
                  <br />
                  Her dersten ve her sınıftan öğrencilerimiz için soru çözümleri ve deneme sınavları yapmaktayız.
                  Öğrencilerimizin eksik oldukları konuları tamamlamaktayız.
                  <br />
                  Öğrencilerimizin çok daha iyi konuları kavraması için &quot;Final Yayınlarına&quot; ait kaynaklarla
                  yaprak testlerle ve ihtiyaç dahilinde ekstra kaynaklarla öğrencilerimizin gelişimlerini sağlıyoruz.
                  <br />
                  <span className="text-primary font-poppinsBold text-lg leading-5 tracking-widest " >Hiçbir başarı tesadüf değildir...</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="comment">
          <div className="title text-center mt-16">
            <h1 className="text-xl font-extrabold border-y-2 p-3">Yorumlar</h1>
          </div>
          <div className="addButton flex justify-center mt-10 mb-10">
            <button className='bg-white text-black' onClick={() => {
              setOpenAddComment(1)
              if (openAddComment === 1){
                setOpenAddComment(0)
              }
            }} >Yorum Ekle</button>
          </div>
          <div className="addComment flex justify-center">
            {
              openAddComment === 1 ? <AddComment /> : null
            }
          </div>
          <div className='flex gap-5'>
          {
            comments.data.map((item,index) => {
              if (item.attributes.isActive){
                return (<Comment
                  DATA={item}
                  key={index}
                />)
              }else {
                return (null)
              }
            })
          }
          </div>
        </div>
      </div>
    </Layout>
  )
}
export const getStaticProps = async () => {
  try {

    const result = await axios.get(BASE_URL + '/api/comments')
    const comment_data = result.data

    return {
      props: {
        comments: comment_data
      }
    }

  } catch (error) {
    return {
      props: {
        error: error
      }
    }
  }
}
