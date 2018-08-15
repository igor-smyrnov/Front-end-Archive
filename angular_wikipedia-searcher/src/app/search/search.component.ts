import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../api-service/api.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Result} from '../api-service/result';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {

  public searchResults: Result[];
  public noResults: Object;
  public searchForm: FormGroup;
  public searchInput: FormControl;
  public query: string;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private apiService: ApiService) {
    }

    ngOnInit(): void {
        this.route.queryParams.subscribe(
            params => this.query = params['query']
        );

        if (this.query) {
            this.createFormControl(this.query);
            this.search(this.query);
        } else {
            this.createFormControl();
        }
        this.createForm();
    }

    private createForm() {
        this.searchForm = new FormGroup({
            searchInput: this.searchInput
        });
    }

    private createFormControl(defaultValue?: string) {
        this.searchInput = new FormControl(defaultValue);
    }

    public search(searchTerm: string): void {
        this.router.navigate([], {queryParams: {query: searchTerm}});
        if (searchTerm) {
            this.apiService.getResults(searchTerm)
                .subscribe(data => {
                    console.log(data);
                    this.searchResults = data;
                    this.noResults = undefined;

                    if (!data) {
                        this.noResults = 'No results containing all your search terms were found';
                    }
                }, (error) => console.log(error));
        }
    }
}
