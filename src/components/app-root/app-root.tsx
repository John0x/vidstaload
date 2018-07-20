import '@ionic/core';
import 'ionicons';
import { Component, Listen, Prop } from '@stencil/core';
import NProgress from 'nprogress';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.pcss'
})
export class AppRoot {
  @Prop({ connect: 'ion-toast-controller' })
  toastCtrl: HTMLIonToastControllerElement;

  /**
   * Handle service worker updates correctly.
   * This code will show a toast letting the
   * user of the PWA know that there is a
   * new version available. When they click the
   * reload button it then reloads the page
   * so that the new service worker can take over
   * and serve the fresh content
   */
  @Listen('window:swUpdate')
  async onSWUpdate() {
    const toast = await this.toastCtrl.create({
      message: 'New version available',
      showCloseButton: true,
      closeButtonText: 'Reload'
    });
    await toast.present();
    await toast.onWillDismiss();
    window.location.reload();
  }

  onRouteWillChange() {
    NProgress.start();
  }

  onRouteDidChange() {
    NProgress.done();
  }

  render() {
    return (
      <ion-app>
        {/* Header */}
        <ion-header>
          <ion-toolbar text-center color="light">
            <img src="/assets/img/header.png" alt="Vidstaload" margin />
          </ion-toolbar>
        </ion-header>

        {/* Router */}
        <ion-router
          onIonRouteWillChange={this.onRouteWillChange}
          onIonRouteDidChange={this.onRouteDidChange}
          useHash={false}
        >
          <ion-route url="/" component="app-home" />
          <ion-route url="/about" component="app-about" />
        </ion-router>

        {/* Content */}
        <ion-content>
          <ion-nav />
        </ion-content>
      </ion-app>
    );
  }
}
