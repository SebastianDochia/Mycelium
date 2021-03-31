

export interface Folder {
    name: string;
    childrenFolder?: Folder[];
    type: string;
    code?: string;
}