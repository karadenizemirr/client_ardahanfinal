import axios from "axios"
import { Field, Form, Formik } from "formik"
import Head from "next/head"
import { useState } from "react"
import Layout from "../components/core/Layout"
import {applicationFormValid, phoneValidate} from '../components/validate/index'
import { BASE_TITLE, BASE_URL } from "../lib/_env"


const Application = () => {
    const [response, setResponse] = useState({
        message: null,
        payload: null,
        error: null
    })
    return (
        <Layout>
            <Head>
                <title>
                    Ön Kayıt - {BASE_TITLE}
                </title>
            </Head>
            <div className="container mx-auto">
                <div className="card flex flex-col justify-center">
                    <div className="title text-center">
                        <h1 className="text-xl font-poppinsLight" >
                            Finalli Olmak İçin Kayıt Yap
                        </h1>
                        <p className="text-sm mt-2 mb-2 font-poppinsLight text-primary" >
                            Önkayıt işleminin gerçekleşmesi için bilgilerinizi doğru giriniz.
                        </p>
                        {
                            response.message ? <span className="text-green-700" >Kayıt İşlemi Başarılı</span>: 
                            response.message === false ? <span className="text-red-700" >Kayıt işlemi başarısız</span>: null
                        }
                    </div>
                    <div className="content lg:w-8/12 shadow-md m-auto ">
                        <Formik
                            initialValues={{
                                name: "",
                                surname: "",
                                school: "",
                                class: "",
                                phone_number: "",
                                mail_address: "",
                                address: ""
                            }}
                            validationSchema={applicationFormValid}
                            onSubmit={async (val, {resetForm}) => {
                                resetForm()
                                await axios.post(BASE_URL + '/api/applications', JSON.stringify({data:val}, null, 2), {
                                    headers: {
                                        "content-type": "application/json"
                                    }
                                })
                                .then((result) => {
                                    setResponse({
                                        message: true,
                                        payload: result.data,

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
                            ({errors, touched}) => (
                                <Form className="flex flex-col gap-7 p-10" >
                                <div className="formElement">
                                    <div className="formGroup flex flex-col lg:flex-row gap-5">
                                        <div className="1 w-full flex flex-col">
                                            <label htmlFor="">
                                                {
                                                    errors.name && touched.name ? 
                                                    (<span className="text-red-700" >Adınızı kontrol ediniz</span>)
                                                    : "Adınız"
                                                }
                                            </label>
                                            <Field name="name" id="name" className=" fieldInput" />
                                        </div>
                                        <div className="2 w-full flex flex-col ">
                                            <label htmlFor="">
                                                {
                                                    errors.surname && touched.surname ? 
                                                    (<span className="text-red-700" >Soyadınızı kontrol ediniz</span>)
                                                    :"Soyadınız"
                                                }
                                            </label>
                                            <Field name="surname" id="surname" className=" fieldInput" />
                                        </div>
                                    </div>
                                </div>
                                <div className="formElement">
                                    <div className="formGroup flex flex-col lg:flex-row gap-5">
                                        <div className="1 w-full flex flex-col">
                                            <label htmlFor="">
                                                {
                                                    errors.phone_number && touched.phone_number ? 
                                                    (<span className="text-red-700" >Telefon numarasını kontrol ediniz</span>)
                                                    :"Telefon Numaranız"
                                                }
                                            </label>
                                            <Field name="phone_number" id="phone_number" className=" fieldInput" validate={phoneValidate} placeholder="0507 000 00 00" />
                                        </div>
                                        <div className="2 w-full flex flex-col">
                                            <label htmlFor="">
                                                {
                                                    errors.mail_address && touched.mail_address? 
                                                    (<span className="text-red-700" >Mail adresini kontrol ediniz</span>)
                                                    :"Mail Adresi"
                                                }
                                            </label>
                                            <Field name="mail_address" id="mail_address" className=" fieldInput" />
                                        </div>
                                    </div>
                                </div>
                                <div className="formElement">
                                    <label htmlFor="">
                                        {
                                            errors.school && touched.school ? 
                                            (<span className="text-red-700" >Okulunuzu kontrol ediniz</span>):
                                            "Okuduğunuz / Mezun Olduğunuz Okul"
                                        }
                                    </label>
                                    <Field name="school" id="school" className="fieldInput" />
                                </div>
                                <div className="formElement">
                                    <label htmlFor="">
                                        {
                                            errors.class && touched.class ? 
                                            (<span className="text-red-700" >Sınıf seçiniz</span>)
                                            :"Kayıt Olmak İstediğiniz Sınıf"
                                        }
                                    </label>
                                    <Field name="class" id="class" className="fieldInput" component="select">
                                        <option value="6.Sınıf" className="p-3">6.Sınıf</option>
                                        <option value="7.Sınıf" className="p-3">7.Sınıf</option>
                                        <option value="8.Sınıf" className="p-3">8.Sınıf</option>
                                        <option value="9.Sınıf" className="p-3">9.Sınıf</option>
                                        <option value="10.Sınıf" className="p-3">10.Sınıf</option>
                                        <option value="11.Sınıf" className="p-3">11.Sınıf</option>
                                        <option value="12.Sınıf" className="p-3">12.Sınıf</option>
                                        <option value="Mezun" className="p-3">Mezun Sınıfı</option>
                                    </Field>
                                </div>
                                <div className="formElement">
                                    <label htmlFor="">
                                        {
                                            errors.address && touched.address ? 
                                            (<span className="text-red-700" >Adres bilgilerini kontrol ediniz</span>)
                                            :"Adres Bilgileriniz"
                                        }
                                    </label>
                                    <Field name="address" id="address" className="fieldInput" component="textarea" rows="6"/>
                                </div>
                                <div className="formElement">
                                    <button type="submit" className="bg-primary" >
                                        Kayıt Yaptır
                                    </button>
                                </div>
                            </Form>
                            )
                           }
                        </Formik>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Application