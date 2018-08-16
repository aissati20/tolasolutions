import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})

export class HomePage {

	data: Observable<any>;
	items: any;
	url: string;
	id: number;
	file: string;
	component: any;
	
	constructor(public navCtrl: NavController, public http: HttpClient) {
		this.getData();
	}

	getData() {
		this.data = this.http.get('assets/home.json');
		this.data.subscribe(data => {
			this.items = data;
		})
	}

	onClick(i) {
		this.id = i.id;
		this.getFile();
		this.navCtrl.push(this.component);
	}

	getFile() { 
		switch (this.id) {
			case 1:
				this.file = 'tpas';
				this.component = 'TpAsPage';
				break;
			case 2:
				this.file = 'matMobil';
				this.component = 'MatMobilPage';
				break;
			case 3:
				this.file = 'trv';
				this.component = 'TrvPage';
				break;
			case 4:
				this.file = 'sviv';
				this.component = 'SViVPage';
				break;
			case 5:
				this.file = 'consignes';
				this.component = 'ConsignasPage';
				break;
			case 6:
				this.file = 'ventiladors';
				this.component = 'InfraestructurasPage';
				break;
			case 7:
				this.file = 'agulles';
				this.component = 'AgujasPage';
				break;
			case 8:
				this.file = 'sondes';
				this.component = 'SondasPage';
				break;
			case 9:
				this.file = 'terra';
				this.component = 'PuestaTierraPage';
				break;
			case 10:
				this.file = 'reglament';
				this.component = 'RcPage';
				break;
			default:
		}
		//console.log(this.file);
		//console.log(this.component);
		return this.file;
	}

}