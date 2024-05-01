const getFriendName = (userId: string, friend: any) => {

    const userList = friend.chatUsers;

    const friendDetails = userList.filter((user: any) => user._id !== userId);


    return friendDetails[0]?.fullName;

}

export default getFriendName;