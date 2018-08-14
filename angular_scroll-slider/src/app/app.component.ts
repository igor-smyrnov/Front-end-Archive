import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public orders = [];
    public selectedIndex = 0;
    private visualIndex = 0;
    private readonly MAX_ORDERS_PER_PAGE = 5;
    @ViewChild('ordersContainer') ordersContainer: ElementRef;

    constructor() {
        window.addEventListener('keydown', (event: KeyboardEvent) => {
            if (event.code === 'ArrowDown') {
                this.onKeyDown();
            } else if (event.code === 'ArrowUp') {
                this.onKeyUp();
            }
        });
    }

    public ngOnInit() {
        this.orders = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];
    }

    private setSliderTransformPercent(percent: number) {
        percent = percent > 0 ? 0 : percent;
        this.ordersContainer.nativeElement.style.transform = `translateY(${percent}%)`;
    }

    get transformPercent(): number {
        let percent =  this.ordersContainer.nativeElement.style.transform;
        if (this.visualIndex >= this.MAX_ORDERS_PER_PAGE) {
            percent = (this.selectedIndex - this.MAX_ORDERS_PER_PAGE + 1) / this.MAX_ORDERS_PER_PAGE * -100;
            this.visualIndex = this.MAX_ORDERS_PER_PAGE - 1;
        } else if (this.visualIndex < 0) {
            percent = (this.selectedIndex - this.MAX_ORDERS_PER_PAGE + this.MAX_ORDERS_PER_PAGE) / this.MAX_ORDERS_PER_PAGE * -100;
            this.visualIndex = 0;
        }
        return percent;
    }

    private incSelectedIndex() {
        this.selectedIndex++;
        this.visualIndex++;
        this.setSliderTransformPercent(this.transformPercent);
    }

    private decSelectedIndex() {
        this.selectedIndex--;
        this.visualIndex--;
        this.setSliderTransformPercent(this.transformPercent);
    }

    private setSelectedIndexFirst() {
        this.selectedIndex = 0;
        this.visualIndex = 0;
        this.setSliderTransformPercent(0);
    }

    private setSelectedIndexLast() {
        this.selectedIndex = this.orders.length - 1;
        this.visualIndex = this.MAX_ORDERS_PER_PAGE;
        this.setSliderTransformPercent(this.transformPercent);
    }

    private onKeyDown() {
        if (this.selectedIndex >= this.orders.length - 1) {
            this.setSelectedIndexFirst();
        } else if (this.selectedIndex < this.orders.length - 1) {
            this.incSelectedIndex();
        }
    }

    private onKeyUp() {
        if (this.selectedIndex === 0) {
            this.setSelectedIndexLast();
        } else if (this.selectedIndex > 0) {
            this.decSelectedIndex();
        }

    }
}
