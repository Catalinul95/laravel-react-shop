export type NotificationType = 'success' | 'error' | 'warning';

export default interface INotification {
    message: string,
    type: NotificationType,
    hide?: boolean,
    id: string,
}
