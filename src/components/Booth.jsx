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

const Booth = ({ channelName }) => {
  const [client, setClient] = useState(null);
  const [channel, setChannel] = useState(null);
  const { userDetails } = useSelector((state) => state.auth);
  const { gcToken } = useSelector((state) => state.gcToks);

  useEffect(() => {
    const initChat = async () => {
      const chatClient = StreamChat.getInstance("tbdwrkq6q4cb");
      try {
        // Connect a user
        const userToken = gcToken.token;
        const userId = userDetails.userData._id;
        setClient(chatClient);
        const name = userDetails.userData.data.firstName;
        chatClient.connectUser({ id: userId, name: name }, userToken);

        if (channelName) {
          // Connect to specific channel
          const specificChannel = chatClient.channel("messaging", channelName);
          await specificChannel.watch();
          setChannel(specificChannel);
          console.log(specificChannel);
        }
      } catch (error) {
        console.error("Error initializing chat:", error);
      }
    };
    initChat();

    // Disconnect the user when the component unmounts
    if (client) return () => client.disconnectUser();
  }, []);

  useEffect(() => {
    console.log("Client state" + client);
  }, [client]);

  const filter = { members: { $in: [userDetails.userData._id] } };
  const sort = { last_message_at: -1 };

  if (!client) {
    return <p>Loading chat...</p>;
  }

  return (
    <div className="w-full h-full flex gap-7">
      {channel ? (
        <Chat client={client}>
          <div className="w-full">
            <Channel channel={channel}>
              <Window>
                <ChannelHeader />
                <MessageList />
                <MessageInput />
              </Window>
              <Thread />
            </Channel>
          </div>
        </Chat>
      ) : (
        <Chat client={client}>
          <div className="w-[400px]">
            <ChannelList filters={filter} sort={sort} />
          </div>
          <div className="w-full">
            <Channel>
              <Window>
                <ChannelHeader />
                <MessageList />
                <MessageInput />
              </Window>
              <Thread />
            </Channel>
          </div>
        </Chat>
      )}
    </div>
  );
};

export default Booth;
