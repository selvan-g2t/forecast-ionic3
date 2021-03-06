import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { KeycloakService } from './keycloak.service';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { TabPage } from '../pages/tab/tab';
import { GridPage } from '../pages/grid/grid';
import { InputPage } from '../pages/input/input';
import { ButtonPage } from '../pages/button/button';
import { ExpansionPage } from '../pages/expansion/expansion';
import { PaginatorPage } from '../pages/paginator/paginator';
import { ProgressBarPage } from '../pages/progress-bar/progress-bar';
import { ProgressSpinnerPage } from '../pages/progress-spinner/progress-spinner';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
    private KeycloakService:KeycloakService) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Tab', component: TabPage },
      { title: 'Grid', component: GridPage },
      { title: 'Input', component: InputPage },
      { title: 'Button', component: ButtonPage },
      { title: 'Expansion', component: ExpansionPage },
      { title: 'Paginator', component: PaginatorPage },
      { title: 'Progress Bar', component: ProgressBarPage },
      { title: 'Progress Spinner', component: ProgressSpinnerPage }
    ];

  }

  logout(){
    this.KeycloakService.logout()
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
