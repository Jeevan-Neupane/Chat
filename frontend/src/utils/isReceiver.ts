const isReceiver = (senderId: string, userId: string) => {

    if (senderId === userId) {
        return true;
    }
    return false;
}

export default isReceiver;