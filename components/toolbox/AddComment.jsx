import axios from "axios"
import { Field, Form, Formik } from "formik"
import { useState } from "react"
import {BASE_URL} from '../../lib/_env'

const AddComment = () => {
    const [commentData, setCommentData] = useState({
        message: null,
        payload: null,
        error: null
    })
    console.log(commentData)
    return (
        <div className="border-2 lg:w-1/2 w-full p-5">
            <div className="form">
                <div className="title mb-4">
                    <h2 className="font-poppinsBold text-center" >
                        Yorum Ekle
                    </h2>
                </div>
                <div className="info text-center mt-3 mb-3">
                    {
                        commentData.message ? 
                        <span className="successMessage" >İşlem Başarılı</span>: 
                        commentData.error ? 
                        <span className="dangerMessage" >İşlem Başarısız</span>: null
                    }
                </div>
                <div className="formContent">
                    <Formik
                        initialValues={{
                            name: "",
                            surname: "",
                            comment: "",
                            isActive: false
                        }}
                        onSubmit={async (val) => {
                            await axios.post(BASE_URL + '/api/comments', JSON.stringify({data:val},null, 2), {
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            })
                            .then(result => result.data)
                            .then((_data) => {
                                setCommentData({
                                    payload: _data,
                                    message: true
                                })
                            })
                            .catch((err) => {
                                setCommentData({
                                    error: err
                                })
                            })
                            
                        }}
                    >
                        <Form>
                            <div className="formElement">
                                <div className="group lg:flex gap-3">
                                    <div className="flex flex-col w-full">
                                        <label htmlFor="">Adınız</label>
                                        <Field name="name" id="name" className="fieldInput"/>
                                    </div>
                                    <div className="formGroupElement flex flex-col w-full ">
                                        <label htmlFor="">Soyadınız</label>
                                        <Field name="surname" id="surname" className="fieldInput" />
                                    </div>
                                </div>
                                <div className="formElement">
                                    <label htmlFor="">Yorumunuz</label>
                                    <Field name="comment" id="comment" className="fieldInput" component="textarea" rows="5" />
                                </div>
                                <div className="formElement">
                                    <button type="submit" className="text-black" >Yorum Gönder</button>
                                </div>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    )
}


export default AddComment