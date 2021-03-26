import {NotesI} from '../types/notes';
import {UserInitialStateI} from '../types/auth';
import {MessageStateI} from '../types/message';


export interface Store {
    notes: NotesI,
    auth: UserInitialStateI,
    message: MessageStateI,
}