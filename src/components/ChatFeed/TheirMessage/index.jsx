export const TheirMessage = ({ message, lastMessage }) => {
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;
    return (
        <div className="message-row">
            {isFirstMessageByUser && (
                <div className="message-avatar"
                    style={{ backgroundImage: `url(${message?.sender?.avatar})` }} />
            )}
            {message?.attachments?.length > 0 ? (
                <img
                    src={message.attachments[0].file}
                    alt="attachment"
                    className="message-image"
                    style={{ marginLeft: isFirstMessageByUser ? '4px' : '4.25rem' }}
                />
            ) : (
                <div className="message" style={{ float: 'left', backgroundColor: '#53CDE2', marginLeft: isFirstMessageByUser ? '4px' : '4.25rem' }}>
                    {message.text}
                </div>
            )

            }
        </div>
    )
}
