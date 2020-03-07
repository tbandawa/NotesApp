import { Injectable } from '@angular/core';
import { Adapter } from "../interface/adapter";
import { Subject, Observable } from 'rxjs';

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
export class ViewNote {

    private currentNote: Note
    private newNote = new Subject<Note>()

    constructor(){
        this.currentNote = null
    }

    private setCurrentNote(note: Note){
        this.currentNote = note
    }

    setNewNote(note: Note) {
        this.newNote.next(note)
        this.setCurrentNote(note)
    }

    getCurrentNote(): Note {
        return this.currentNote
    }

    getNewNote(): Observable<Note> {
        return this.newNote.asObservable()
    }

}

@Injectable({
    providedIn: "root"
})
export class NoteAdapter implements Adapter<Note> {
    adapt(item: any): Note {
        return new Note(item.id, item.title, item.content, new Date(item.createdAt), new Date(item.updatedAt))
    }
}