

export function getTodayFormatted() {
    const today = new Date();
    return today.toISOString().split('T')[0];
}


export function unixToDateFormat(unixTimestamp?: number) {
    if (!unixTimestamp) {
        return '';
    }
    // Create a new Date object, converting seconds to milliseconds
    const date = new Date(unixTimestamp * 1000);

    // Use the toISOString method and split to get the date part
    return date.toISOString().split('T')[0];
}

export function formatToCamelCase(str: string) {
    // First, replace underscores and hyphens with spaces
    let formatted = str.replace(/[_-]/g, ' ');

    // Capitalize the first letter of each word
    formatted = formatted.replace(/\w\S*/g, function (word: string) {
        return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    });

    // Capitalize the very first letter of the string
    return formatted.charAt(0).toUpperCase() + formatted.slice(1);
}
