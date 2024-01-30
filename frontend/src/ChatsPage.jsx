import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced';

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        'cbca9abe-b9e8-4e98-b1b0-82914576ae85', 
        // eslint-disable-next-line react/prop-types
        props.user.username, 
        // eslint-disable-next-line react/prop-types
        props.user.secret);
    return (
        <div style = {{ height: '100vh'}}>
            <MultiChatSocket {...chatProps}/>
            <MultiChatWindow {...chatProps} style = {{height: '100vh'}}/>
    </div>
    )
}

export default ChatsPage;