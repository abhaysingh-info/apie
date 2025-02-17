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
    messageHisory: IHelpdeskMessageHistry[]
}

export interface IHelpdeskMessageHistry {
    id: number;
    message: string;
    date: Date;
    from: string;
    to: string;
    status: string;
    isRead: boolean;
}