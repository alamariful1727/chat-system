import React from "react";
import { SendMessageForm } from './SendMessageForm';
import { MessageList } from './MessageList';

interface ChatLayoutProps {
}

export const ChatLayout = (props: ChatLayoutProps) => {

	return (
		<div className="mh3-">
			<MessageList />
			<SendMessageForm />
		</div>
	)
}