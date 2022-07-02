import Avatar from "react-avatar"

const Comment = ({DATA}) => {
    return (
        <div className="comment-card
        mb-5
        p-4 w-1/5 
        rounded-md 
        shadow-md 
        bg-light
        flex flex-col gap-3 mt-10">
            <div className="avatar text-center">
                <Avatar name={`${DATA.attributes.name} ${DATA.attributes.surname}`} className="rounded-full" size="75" />
            </div>
            <div className="comment text-center">
                <p>
                    {
                        DATA.attributes.comment
                    }
                </p>
            </div>
            <div className="auhor text-center">
                <p className="text-sm font-poppinsItalic" >
                    {DATA.attributes.name} {DATA.attributes.surname}
                </p>
            </div>
        </div>
    )
}

export default Comment