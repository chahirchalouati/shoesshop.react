export  type Product = {
    code: string;
    name: string;
    description: string;
    id: string;
    images: File[];
    video?: File[];
};
export  type File = {
    id: string;
    url: string;
};

