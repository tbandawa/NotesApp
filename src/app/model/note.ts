import { Injectable } from '@angular/core';
import { Adapter } from "../interface/adapter";

export class Note {

    constructor(
        public id: number,
        public title: string,
        public content: string,
        public createdAt: Date,
        public updatedAt: Date){}

}

@Injectable({
    providedIn: "root"
})
export class NoteAdapter implements Adapter<Note> {
    adapt(item: any): Note {
        return new Note(item.id, item.title, item.content, new Date(item.createdAt), new Date(item.updatedAt));
    }
}
