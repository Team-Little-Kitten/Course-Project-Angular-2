export interface IThread {
    _id: string;
    title: string;
    content: string;
    author: any;
    dateOfCreationg: Date;
    category: string;
    comments: any[];
}
