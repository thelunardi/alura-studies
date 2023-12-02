export function timeToSeconds(time: string) {
    // tempo vem no formato 00:00:00
    const [hours = '0', minutes = '0', seconds = '0'] = time.split(":");

    const hoursInSeconds = Number(hours) * 3600;
    const minutesInSeconds = Number(minutes) * 60;
    return hoursInSeconds + minutesInSeconds + Number(seconds);
}