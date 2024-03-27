export type Message = {
    id: string,
    user_id: string,
    created_at: string,
    content: string,
    role: string
}

export type User = {
    id: string,
    name: string
}

export type Chat = {
    id: string,
    messages: Message[],
    user_id: string,
    title: string
}