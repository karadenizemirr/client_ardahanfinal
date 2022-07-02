import axios from 'axios'
import { Field, Form, Formik } from 'formik'
import Head from 'next/head'
import { useState } from 'react'
import Layout from '../components/core/Layout'
import { contactFormValid, phoneValidate } from '../components/validate'
import { BASE_TITLE, BASE_URL } from '../lib/_env'

const Contact = () => {
    const [response, setResponse] = useState({
        message: "",
        payload: "",
        error: ""
    })
    return (
        <Layout>
            <Head>
                <title>
                    İletişim - {BASE_TITLE}
                </title>
            </Head>
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-2 mt-10">
                    <div className="col-1">
                        <div className="formCard">
                            <div className="title text-center">
                                <h1 className='text-xl font-poppinsLight'>
                                    Ardahan Finalle İletişime Geç
                                </h1>
                            </div>
                            <div className="info text-center mt-">
                                <p>
                                    {
                                        response.message ? 
                                        <span className='text-green-600' >
                                            Mesaj iletildi
                                        </span>: response.message === false ? 
                                        <span className='text-red-600' >Mesaj iletilmedi</span>: null
                                    }
                                </p>
                            </div>
                            <div className="content">
                                <Formik
                                    initialValues={{
                                        name: "",
                                        surname: "",
                                        jops: "",
                                        phone_number: "",
                                        mail_address: "",
                                        message: ""
                                    }}
                                    validationSchema={contactFormValid}
                                    onSubmit={async (val, { resetForm }) => {
                                        resetForm()
                                        axios.post(BASE_URL + '/api/contacts', JSON.stringify({ data: val }, null, 2), {
                                            headers: {
                                                "content-type": "application/json"
                                            }
                                        })
                                            .then((result) => {
                                                setResponse({
                                                    payload: result.data,
                                                    message: true
                                                })
                                            })
                                            .catch((err) => {
                                                setResponse({
                                                    error: err
                                                })
                                            })

                                    }}
                                >
                                    {
                                        ({ errors, touched }) => (
                                            <Form className='mt-10 flex flex-col gap-5 p-10' >
                                                <div className="formElement">
                                                    <div className="group flex gap-5">
                                                        <div className="1 w-full">
                                                            <label htmlFor="">{
                                                                errors.name && touched.name ?
                                                                    (<><span className="text-red-700" >Adınızı kontrol ediniz..</span></>) :
                                                                    "Adınız"
                                                            }</label>
                                                            <Field name="name" id="name" className="fieldInput w-full" />
                                                        </div>
                                                        <div className="2 w-full">
                                                        <label htmlFor="">{
                                                                errors.surname && touched.surname ?
                                                                    (<><span className="text-red-700" >Soyadınızı kontrol ediniz..</span></>) :
                                                                    "Soyadınız"
                                                            }</label>
                                                            <Field name="surname" id="surname" className="fieldInput w-full"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="formElement">
                                                    <div className="group flex gap-5">
                                                        <div className="1 w-full">
                                                            <label htmlFor="">
                                                                {
                                                                    errors.phone_number && touched.phone_number ? 
                                                                    (<span className='text-red-700'>Telefon numaranızı kontrol edin..</span>):
                                                                    "Telefon Numarası"
                                                                }
                                                            </label>
                                                            <Field name="phone_number" id="phone_number" className="fieldInput w-full" validate={phoneValidate} />
                                                        </div>
                                                        <div className="2 w-full">
                                                            <label htmlFor="">
                                                                {
                                                                    errors.mail_address && touched.mail_address ? 
                                                                    (<span className='text-red-700' >Mail adresinizi kontrol edin</span>):
                                                                    "Mail Adresiniz"
                                                                }
                                                            </label>
                                                            <Field name="mail_address" id="mail_address" className="fieldInput w-full" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="formElement">
                                                    <label htmlFor="">
                                                        {
                                                            errors.jops && touched.jops ? 
                                                            (<span className='text-red-700' >Mesleğinizi kontrol ediniz..</span>):
                                                            'Mesleğiniz'
                                                        }
                                                    </label>
                                                    <Field name="jops" id="jops" className="fieldInput" />
                                                </div>
                                                <div className="formElement">
                                                    <label htmlFor="">
                                                        {
                                                            errors.message && touched.message ? 
                                                            (<span className='text-red-700' >Mesajınızı kontrol ediniz.</span>):
                                                            "Mesajınız"
                                                        }
                                                    </label>
                                                    <Field name="message" id="message" className="fieldInput" component="textarea" rows="7" />
                                                </div>
                                                <div className="formElement">
                                                    <button type="submit" className='bg-primary' >
                                                        Mesaj Gönder
                                                    </button>
                                                </div>
                                            </Form>
                                        )
                                    }
                                </Formik>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        col-2
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Contact