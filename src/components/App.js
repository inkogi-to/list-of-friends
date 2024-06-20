import { useState } from 'react';
import { FormSplitBill } from './FormSplitBill';
import { FriendsList } from './FriendsList';
import { FormAddFriend } from './FormAddFriend';
import { Button } from './Button';
import { initialFriends } from './initialFriends';

export default function App() {
	const [friends, setFriends] = useState(initialFriends);
	const [showAddFriend, setShowAddFriend] = useState(false);
	const [selectedFriend, setSelectedFriend] =
		useState(null);
	console.log(selectedFriend);

	function handleShowAddFriend() {
		setShowAddFriend((show) => !show);
		setSelectedFriend(null);
	}

	function handleAddFriend(friend) {
		setFriends((friends) => [...friends, friend]);
		setShowAddFriend(false);
	}

	function handleSelection(friend) {
		setSelectedFriend((cur) =>
			cur?.id === friend.id ? null : friend
		);
		setShowAddFriend(false);
	}
	function handleSplitBill(value) {
		setFriends((friends) =>
			friends.map((friend) =>
				friend.id === selectedFriend.id
					? { ...friend, balance: friend.balance + value }
					: friend
			)
		);
		setSelectedFriend(null);
	}

	return (
		<div className="app">
			<div className="sidebar">
				<FriendsList
					friends={friends}
					onSelection={handleSelection}
					selectedFriend={selectedFriend}
				/>
				{showAddFriend && (
					<FormAddFriend onAddFriend={handleAddFriend} />
				)}
				<Button onClick={handleShowAddFriend}>
					{showAddFriend ? 'Close' : 'Add Friend'}
				</Button>
			</div>
			{selectedFriend && (
				<FormSplitBill
					selectedFriend={selectedFriend}
					onSplitBill={handleSplitBill}
				/>
			)}
		</div>
	);
}


