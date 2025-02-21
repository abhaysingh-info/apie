export interface IHelpdeskRowProps {
    UserProfile: string
    "SortProfile": string
    "requester_email": string
    "msg_cnt": number
    "subject": string
    "org_subject": string
    "category": string
    "description": string
    "status": string
    "archived": string
    "domain": string
    "domain_authcode": string
    "UserName": string
    "created_at": number,
    "updated_at": number
}


export interface IHelpdeskThreadsProps extends IHelpdeskRowProps {
    messageHistory: IHelpdeskRowProps[]
}

