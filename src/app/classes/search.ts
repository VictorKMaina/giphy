export class SearchEndpoint {

    public offset: number;
    constructor(public apiKey: string, public query: string, public limit: number) {
        this.offset = this.getOffset();
    }
    getOffset(): number {
        return this.limit * -1;
    }
}
export class Search {
    constructor(public data: Array<any>) {
    }
}