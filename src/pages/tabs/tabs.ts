import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Tabs } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ListPage } from '../list/list';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
    selector: 'page-tabs',
    templateUrl: 'tabs.html',
})
export class TabsPage {
    @ViewChild('boxtabs') tabRef: Tabs;
    selectIndex: any = 0;
    homeIcon: string = 'custom-home-active';
    userIcon: string = 'custom-user';
    home: any = ListPage;
    user: any = HomePage;
    constructor(public navCtrl: NavController,
        public storage: Storage,
        private platform: Platform,
        public navParams: NavParams) {
    }

    setIcons(e) {
        this.selectIndex = e.index;
        if (e.index === 0) {
            this.homeIcon = 'custom-home-active';
            this.userIcon = 'custom-user';
        } else if (e.index === 1) {
            this.homeIcon = 'custom-home';
            this.userIcon = 'custom-user-active';
        }
    }
   
}
