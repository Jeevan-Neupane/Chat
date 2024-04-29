const shortenMessage = (message: string, maxLength: number) => {
    if (message.length <= maxLength) return message;
    return message.slice(0, maxLength) + "...";
}
export default shortenMessage;