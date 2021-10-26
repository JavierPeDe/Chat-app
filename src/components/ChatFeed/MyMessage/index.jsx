
export const MyMessage = ({ message }) => {
    if (message?.attachments?.length > 0) { //si es una imagen 
        return (
            <img
                src={message.attachments[0].file}
                alt="attachment"
                className="message-image"
                style={{ float: 'right' }}
            />
        )
    }
    return (
        <div>
            <div className="message" style={{ float: 'right', marginLeft: '1.12rem', color: '#FFF', backgroundColor: '#005792' }}>
                {message.text}
            </div>
        </div>
    )
}
