import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@IonicPage()

@Component({
	selector: 'page-tp-as',
	templateUrl: 'tp-as.html',
})
export class TpAsPage {

	data: Observable<any>;
	items: any;
	url: string;
	constructor(public navCtrl: NavController, public http: HttpClient) {
		this.getData();
	}

	getData() {
		this.data = this.http.get('assets/tpas.json');
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
