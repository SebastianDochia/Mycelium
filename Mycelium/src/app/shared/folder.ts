import { CodeFile } from "./code-file";

export interface Folder {
    name: string;
    childrenFolder?: Folder[];
    childrenFiles?: CodeFile;
}