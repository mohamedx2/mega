export type aiChat = {
    id:string;
    userId: string;
    courseId:string;
    chat:{
        humman:string,
        ai:string,
    }[];
    date?:Date;
}