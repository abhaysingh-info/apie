export interface IHelpdeskRowProps {
    id: number;
    domain: string;
    category: string;
    lastUpdated: Date;
    originDate: Date;
    email: string;
    subject: string;
    status: string;
    messageCount: number;
}


export interface IHelpdeskThreadsProps extends IHelpdeskRowProps {
    messageHistory: IHelpdeskMessageHistory[]
}

export interface IHelpdeskMessageHistory {
    id: number;
    message: string;
    date: Date;
    from: string;
    to: string;
    status: string;
    isRead: boolean;
    isEmployee?: boolean;
}