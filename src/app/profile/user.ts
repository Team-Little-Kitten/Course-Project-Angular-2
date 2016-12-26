export interface IUser {
    _id: string;
    about: string;
    firstname: string;
    lastname: string;
    imageDataUrl: string;
    signature: string;
    username: string;
    critiqueRating: number;
    writerRating: number;
    rank: string;
    usersFollowing: IUser[];
    usersFollowed: IUser[];
}
