import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Result} from './result';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

    constructor(private http: HttpClient) {
    }

    private queryUrl = 'https://en.wikipedia.org/w/api.php' +
        '?action=query' +
        '&format=json' +
        '&formatversion=2' +
        '&origin=*' +
        '&generator=search' +
        '&gsrlimit=15' +
        '&prop=pageterms|pageimages|extracts' +
        '&exintro=' +
        '&explaintext=' +
        '&pithumbsize=150' +
        '&gsrsearch=';

    public getResults(searchTerm: string): Observable<Result[]> {
        console.log(this.queryUrl + searchTerm);

        const result = [];

        return this.http.get(this.queryUrl + searchTerm)
            .map((queryResponse: any) => {
                    if (queryResponse.query) {
                        queryResponse.query.pages.map(
                            item => {
                                result.push(new Result({
                                    title: item.title,
                                    link: this.makeLink(item.title),
                                    thumbnail: item.thumbnail,
                                    extract: item.extract,
                                    terms: item.terms
                                }));
                            }
                        );
                        return result;
                    }
                },
                error => {
                    console.log('Something went wrong!');
                    return error;
                });
    }

    private makeLink(title: string) {
        return 'https://en.wikipedia.org/wiki/' + title.replace(/\s+/g, '_');
    }
}
