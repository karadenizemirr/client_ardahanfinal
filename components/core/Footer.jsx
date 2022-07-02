import Image from "next/image"
import { AiOutlinePhone } from 'react-icons/ai'

const Footer = () => {
    return (
        <div className="bg-light p-10 mt-20" >
            <div className="container mx-auto grid lg:grid-cols-3 gap-10">
                <div className="col1 flex justify-center">
                    <Image src="/logo.png" priority="false" width={95} height={90} />
                </div>
                <div className="col2 text-center flex flex-col justify-center gap-4">
                    <h1 className="text-xl text-primary font-poppinsBold" >
                        Ardahan Final Özel Öğretim Kursu
                    </h1>
                    <p className="text-sm font-poppinsItalic" >
                        Hiçbir Başarı Tesadüf Değildir
                    </p>
                </div>
                <div className="col3 flex flex-col justify-end m-auto ">
                    <div className="info flex flex-col m-auto">
                        <a href="tel:+9005538107500">Telefon: 05538107500</a>
                        <p>Adres: Kongre Cd. No.101 Ardahan / Merkez</p>
                    </div>
                </div>
            </div>
            <div className="text-sm text-center mt-5 flex flex-col gap-3" >
                <p>
                    @2022 Ardahan Final Özel Öğretim Kursu
                </p>
                <p>
                    Tüm hakları Ardahan Final Özel Öğretim Kursu'na aittir.
                </p>
            </div>
        </div>
    )
}

export default Footer