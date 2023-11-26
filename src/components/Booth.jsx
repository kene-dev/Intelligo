import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { StreamChat } from "stream-chat";
import {
  Chat,
  Channel,
  ChannelHeader,
  MessageList,
  MessageInput,
  Thread,
  Window,
  ChannelList,
} from "stream-chat-react";
import "stream-chat-react/dist/css/index.css";

const Booth = () => {
  const [client, setClient] = useState(null);
  const { userDetails } = useSelector((state) => state.auth);
  const { gcToken } = useSelector((state) => state.gcToks);

  useEffect(() => {
    if (client) return;
    const initChat = async () => {
      const chatClient = StreamChat.getInstance("tbdwrkq6q4cb");
      try {
        // Connect a user
        const userToken = gcToken.token;
        const userId = userDetails.userData._id;

        const name = userDetails.userData.data.firstName;
        chatClient.connectUser({ id: userId, name: name }, userToken);
        setClient(chatClient);
      } catch (error) {
        console.error("Error initializing chat:", error);
      }
    };

    initChat();

    // Disconnect the user when the component unmounts
    if (client) return () => client.disconnectUser();
  }, []);

  const filter = { members: { $in: [userDetails.userData._id] } };
  const sort = { last_message_at: -1 };

  if (!client) {
    return <p>Loading chat...</p>;
  }

  return (
    <Chat client={client}>
      <ChannelList filters={filter} sort={sort} />
      <Channel>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
};

export default Booth;
