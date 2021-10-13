export interface IPerson {
    firstName: string;
    lastName: string;
    age: number;
    mainLanguage: string;
    email: string;
    aboutMe: string;
    image?: File | string;
    id: number;
}