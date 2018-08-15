/**
 * Created by Igor on 29.12.2017.
 */
export class Result {

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

    public title: string;
    public link: string;
    public thumbnail: Object;
    public terms: Object;
    public extract: string;
}
