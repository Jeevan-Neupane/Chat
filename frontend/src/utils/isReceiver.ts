const isReceiver = (senderId: string, userId: string) => {

    console.log(senderId, userId);
    if (senderId === userId) {
        return true;
    }
    return false;
}

export default isReceiver;