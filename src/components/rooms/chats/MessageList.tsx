import React, { useEffect, useRef, useState } from "react";
import { MessageItem } from "components/rooms/chats/MessageItem";
import user from "../../../resources/images/user.png";
import { Loading } from "components/Loading";
import { useSelector } from "react-redux";
const { withChatkit } = require("@pusher/chatkit-client-react");

interface MessageListProps {
	chatkit?: any;
}

export const MessageList = withChatkit((props: MessageListProps) => {
	const [first, setFirst] = useState(false);
	const messagesEndRef = useRef<HTMLDivElement>(null);
	const messages = useSelector((state: any) => state.roomReducer.messages);

	const scrollToBottom = () => {
		// On new message, scroll to bottom
		if (
			messagesEndRef &&
			messagesEndRef.current &&
			messagesEndRef.current.scrollTop +
				messagesEndRef.current.clientHeight +
				66 * 4 >=
				messagesEndRef.current.scrollHeight
		) {
			messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
		}
		// at first, scroll to bottom
		else if (messagesEndRef && messagesEndRef.current && !first) {
			messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
			setFirst(true);
		}
	};

	useEffect(scrollToBottom, [messages]);

	return (
		<div
			className="overflow-y-auto ph1 bg-tigrowLightestBlue pt2"
			ref={messagesEndRef}
			style={{ height: "calc(100vh - 124px)" }}
		>
			{!props.chatkit.isLoading &&
			props.chatkit.currentUser.rooms.length > 0 ? (
				messages.length && messages[0].id !== null ? (
					messages.map((message: any) => {
						return (
							<MessageItem
								key={message.id}
								img={user}
								text={message.text}
								createdAt={message.createdAt}
								sender={message.userStore.users[message.senderId]}
							/>
						);
					})
				) : (
					<Loading />
				)
			) : (
				<p className="bg-tigrow">Nothing to show!!</p>
			)}
		</div>
	);
});
