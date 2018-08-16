import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Slides } from 'ionic-angular';
import { MatMobilPage } from '../mat-mobil/mat-mobil';

@IonicPage()
@Component({
	selector: 'page-steps',
	templateUrl: 'steps.html',
})
export class StepsPage {
	
	@ViewChild(Slides) slides: Slides;
	item: any;
	title: string;
	desc: string;
	oAns: any;
	ans: string;
	index: number = 1;
	maxLength: number;
	constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {

		let item = navParams.get('item');
		this.title = item.title;
		this.desc = item.description;
		this.oAns = item.questions[0];
		this.ans = this.oAns["0"];
		this.maxLength = Object.keys(this.oAns).length;
	}

	slideChanged(){
		this.slides.slideNext(500);
	}

	onClick(sel){
		console.log(this.index);
		if (sel == 'next') {
			var newIndex = this.index++;
			if(newIndex < this.maxLength) {
				this.ans = this.oAns[newIndex.toString()];
			} else {
				this.ans = 'No hi han més solucions conegudes..';
			}
		} else if (sel == 'no') {
			let alert = this.alertCtrl.create({
				title: 'Informació',
				subTitle: 'No hi han més solucions conegudes..',
				buttons: [{
					text: 'D\'acord',
					handler: () => {
						this.navCtrl.pop();
					}
				}]
			});
			alert.present();
		} else {
			//this.ans = 'Felicitats, la incidencia ja està resolta!'
			let alert = this.alertCtrl.create({
				title: 'Informació',
				subTitle: 'La incidència ha estat resolta.',
				buttons: [{
					text: 'D\'acord',
					handler: () => {
						this.navCtrl.pop();
					}
				}]
			});
			alert.present();
		}
	}
}