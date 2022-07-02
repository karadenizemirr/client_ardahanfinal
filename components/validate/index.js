import * as Yup from 'yup'

export const applicationFormValid = Yup.object().shape({
    name: Yup.string().required("Zorunlu Alan").min(3).max(30),
    surname: Yup.string().required("Zorunlu Alan").min(3).max(30),
    mail_address:Yup.string().email(),
    school: Yup.string().min(3).max(30),
    class: Yup.string().required(),
    address: Yup.string().required()
})

export const contactFormValid = Yup.object().shape({
    name: Yup.string().required("Zorunlu Alan").min(3).max(30),
    surname: Yup.string().required("Zorunlu Alan").min(3).max(30),
    mail_address:Yup.string().email(),
    jops: Yup.string(),
    message : Yup.string().required().min(50).max(300)
})

export const commentFormValid = Yup.object().shape({
    name: Yup.string().min(3).max(10).required(),
    surname: Yup.string().min(3).max(15).required(),
    comment: Yup.string().min(5).max(100).required()
})
export const phoneValidate = (value) => {
    let error;
    if(!value){
        error = "Zorunlu Alan"
    }else if (!/^(05)([0-9]{2})\s?([0-9]{3})\s?([0-9]{2})\s?([0-9]{2})$/.test(value)){
        error = "Yanlış Telefon Numarası"
    }
    return error
}

export const indefyNoValidate = (value) => {
    let error;
    if (!value){
        error = "Zorunlu Alan"
    } else if (!/^[0-9]{11}$/.test(value)){
        error = "Yanlış TC"
    }
    return error
}