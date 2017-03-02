export class Word {
    readonly original:String;
    readonly translation:String;
    readonly id:String;
    private _countAttempts:number = 0;
    private _countSuccess:number = 0;
    private _countFail:number = 0;
    private _lineSuccess:number = 0;

    constructor(id:String, original:String, translation:String) {
        this.id = id;
        this.original = original;
        this.translation = translation;
    }

    attempt(success:boolean){
        this._countAttempts++;
        if(success){
            this._lineSuccess++;
            this._countSuccess++;
        }
        else {
            this._lineSuccess = 0;
            this._countFail++;
        }
    }

    get countAttempts(): number {
        return this._countAttempts;
    }

    get countSuccess(): number {
        return this._countSuccess;
    }

    get countFail(): number {
        return this._countFail;
    }

    get lineSuccess(): number {
        return this._lineSuccess;
    }
}