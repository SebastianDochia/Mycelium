import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { Folder } from "../shared/folder";

@Injectable({ providedIn: 'root' })
export class WorkingEnvService {
    private id = new Subject<String>();
    codeFiles: Folder[];
    codeFilesChanged = new Subject<Folder[]>();
    currentFile = new Subject<Folder>();
    codea: string = `    class HelloWorld {
        public static void main(String[] args) {
            System.out.println("Hello, World!"); 
        }
    }`;

    code: BehaviorSubject<string> = new BehaviorSubject(`    class HelloWorld {
        public static void main(String[] args) {
            System.out.println("Hello, World!"); 
        }
    }`);

    constructor() { }

    setId(id: string) {
        this.id.next(id);
    }

    getId() {
        return this.id;
    }

    setCode(newCode: string) {
        this.code.next(newCode);
    }

    getCode() {
        return this.code.asObservable();
    }

    createCodeFile(name: string) {
        if (this.codeFiles.filter((codeFile: Folder) => codeFile.name == name)) {
            return "COULD NOT CREATE FILE // NAME ALREADY IN USE";
        }

        this.codeFiles.push({ name: name, code: " ", type: 'file' });
        this.codeFilesChanged.next(this.codeFiles.slice());
    }

    selectFile(name: string) {
        var selectedFile = this.codeFiles.filter((codeFile: Folder) => codeFile.name == name);
        this.currentFile.next(selectedFile[0]);
    }
}