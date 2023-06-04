export function getTimeUntil(dateString: string): { days: number, hours: number, minutes: number } {
    const targetDate = new Date(dateString + "2023");
    const now = new Date();
    const diffMs = targetDate.getTime() - now.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    return { days: diffDays, hours: diffHours, minutes: diffMinutes };
}