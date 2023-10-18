export function createId(): string {
    return new Date().getTime().toString();
}
export function formatDate(date: number): string {
    const _date = new Date(date);
    const year = _date.getFullYear();
    const day = _date.getDate();
    const month = (_date.getMonth() + 1);
    const hours = _date.getHours();
    const minutes = _date.getMinutes();

    return `${year}.${month < 10 ? '0' + month : month}.${day} ${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
}

