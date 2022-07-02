const Popup = () => {
    return (
        <div className="absolute border-2  w-1/2 bg-light shadow-xl text-center p-5  rounded-xl" >
            <div className="container flex flex-col gap-6">
                <div className="title">
                    <h2 className="font-poppinsBold text-xl" >Yaz Kampı</h2>
                </div>
                <div className="message">
                    <p className="leading-10" >
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum exercitationem, maxime ipsa placeat aperiam temporibus beatae nobis. Quos, reprehenderit iusto.
                    </p>
                </div>
                <div className="button">
                    <button>Kapat</button>
                </div>
            </div>
        </div>
    )
}

export default Popup