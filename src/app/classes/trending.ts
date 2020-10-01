export class TrendingEndpoint {

    public offset: number;
    constructor(public apiKey: string, public limit: number){
        this.offset = this.getOffset();
    }
    getOffset():number{
        return this.limit * -1;
    }
}
export class Trending {
    constructor(public data: Array<any>){
    }
}