const getFriendName = (userId: string, friend: any) => {

    const userList = friend.chatUsers;

    console.log(userList)
    const friendDetails = userList.filter((user: any) => user._id !== userId);
    console.log(friendDetails[0]?.fullName);


    return friendDetails[0]?.fullName;

}

export default getFriendName;