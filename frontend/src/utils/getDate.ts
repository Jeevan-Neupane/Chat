import dayjs from "dayjs";

function dateDifference(date: Date) {
    // Convert date strings to Date objects
    var givenDate = new Date(date);
    var today = new Date();

    // Calculate the difference in milliseconds
    var difference = today.getTime() - givenDate.getTime();

    // Convert milliseconds to days, months, and years
    var millisecondsInDay = 1000 * 3600 * 24;
    var daysDifference = Math.floor(difference / millisecondsInDay);
    var monthsDifference = Math.floor(daysDifference / 30);


    if (daysDifference < 1) {
        return dayjs(date).format("hh:mm A");
    }

    if (daysDifference < 7) {
        return dayjs(date).format("ddd hh:mm A");
    }


    if (monthsDifference >= 1) {
        return dayjs(date).format("MMM DD hh:mm A");
    }




}

export default dateDifference;