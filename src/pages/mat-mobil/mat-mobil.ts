import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@IonicPage()

@Component({
	selector: 'page-mat-mobil',
	templateUrl: 'mat-mobil.html',
})

export class MatMobilPage {

	data: Observable<any>;
	items: any;
	url: string;
	pushPage: any;
	constructor(public navCtrl: NavController, public http: HttpClient, public navParams: NavParams) {
		this.getData();
	}

	getData() {
		this.data = this.http.get('assets/matMobil.json');
		this.data.subscribe(data => {
			this.items = data;
		})
		
	}

	onClick(i) {
		this.navCtrl.push('StepsPage', {
			item: this.items[i.id -1]
		});
	}

}
