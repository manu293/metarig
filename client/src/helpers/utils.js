class Utils {

    currencyFormatter(price) {
        let dollarUS = Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        });

        return dollarUS.format(price)
    }

    formatBidDate(inputDate) {
        let inputDateInUTC = new Date(inputDate);
        const day = inputDateInUTC.getUTCDate();
        const hours = inputDateInUTC.getUTCHours();
        const minutes = inputDateInUTC.getMinutes();
        const seconds = inputDateInUTC.getSeconds();

        return [day, hours, minutes, seconds];
    }

}

export default Utils;