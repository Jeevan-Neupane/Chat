const getFriendPhoto = (userId: string, friend: any) => {

    const userList = friend.chatUsers;

    const friendDetails = userList.filter((user: any) => user._id !== userId);


    return friendDetails[0]?.avatar;

}

export default getFriendPhoto;