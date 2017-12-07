import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
	selector: 'about-footer',
	templateUrl: 'about-footer.html'
})
export class AboutFooterComponent {
	constructor(
		private alertCtrl: AlertController,
		//private platform: Platform,
		private iab: InAppBrowser,
	) {}

	linkToURL(url){
		//const browser = this.iab.create('https://ionicframework.com/');
		this.iab.create(url, '_blank', 'location=yes');

		/*browser.executeScript(...);
		browser.insertCSS(...);
		browser.close();*/
	}
}
