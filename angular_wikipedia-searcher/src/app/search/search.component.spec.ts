import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {SearchComponent} from './search.component';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ApiService} from '../api-service/api.service';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {Result} from '../api-service/result';

describe('SearchComponent', () => {
    let component: SearchComponent;
    let searchForm: FormGroup;
    let searchInput: FormControl;
    let fixture: ComponentFixture<SearchComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                ReactiveFormsModule,
                FormsModule,
                RouterTestingModule
            ],
            declarations: [SearchComponent],
            providers: [ApiService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchComponent);
        component = fixture.componentInstance;
        component.ngOnInit();
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should generate search form', () => {
        searchForm = component.searchForm;
        expect(searchForm).toBeTruthy();
    });

    it('should generate search input', () => {
        searchInput = component.searchInput;
        expect(searchInput).toBeTruthy();
    });

    it('should change value of search input', () => {
        searchInput = component.searchInput;
        searchInput.setValue('hello');
        expect(searchInput.value).toEqual('hello');
    });
});
