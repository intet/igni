export class Word {
    original:String;
    translation:String;
    id:String;

    constructor(id:String, original:String, translation:String) {
        this.id = id;
        this.original = original;
        this.translation = translation;
    }
}