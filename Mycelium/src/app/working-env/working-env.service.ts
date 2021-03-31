import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { CodeFile } from "../shared/code-file";

@Injectable({ providedIn: 'root' })
export class WorkingEnvService {
    private id = new Subject<String>();
    codeFiles: CodeFile[];
    codeFilesChanged = new Subject<CodeFile[]>();
    currentFile = new Subject<CodeFile>();

    constructor() {}

    setId(id: string) {
        this.id.next(id);
    }

    getId() {
        return this.id;
    }

    createCodeFile(name: string) {
        if(this.codeFiles.filter((codeFile: CodeFile) => codeFile.name == name)) {
            return "COULD NOT CREATE FILE // NAME ALREADY IN USE";
        }

        this.codeFiles.push({name, code: " "});
        this.codeFilesChanged.next(this.codeFiles.slice());
    }

    selectFile(name: string) {
        var selectedFile = this.codeFiles.filter((codeFile: CodeFile) => codeFile.name == name);
        this.currentFile.next(selectedFile[0]);
    }
}