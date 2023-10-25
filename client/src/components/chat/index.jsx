import {
  useMultiChatLogic,
  MultiChatSocket,
  MultiChatWindow,
} from "react-chat-engine-advanced";
import Header from "../customHeader";
import StandardMessageForm from "../customMessageForms/StandardMessageForm";

const Chat = () => {
  const chatProps = useMultiChatLogic(
    import.meta.env.VITE_PROJECT_ID,
    "testuser",
    "1" //password from chat 
  );

  return <div style={{flexBasis: "100%"}}>
    <MultiChatSocket {...chatProps}/>
    <MultiChatWindow 
    {...chatProps}
    style={{ height: "100vh"}}
    renderChatHeader={(chat) => <Header chat={chat}/>}
    renderMessageForm={(props) => {
        return(
            <StandardMessageForm props={props} activeChat={chatProps.chat} />
        )
    }}
    />
  </div>;
};

export default Chat;
