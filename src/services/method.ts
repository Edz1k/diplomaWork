export function createId(): string {
    return new Date().getTime().toString();
}
export function formatDate(date: { seconds: number }): number {
    const _date = new Date(date.seconds * 1000);
    const year = _date.getFullYear();

    return Number(year);
}
