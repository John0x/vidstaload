import { Component, Prop, State } from '@stencil/core';
import NProgress from 'nprogress';
import to from '../../helpers/await-to';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.pcss'
})
export class AppHome {
  @State() searchValue: string;

  @Prop() searchTerm: string;

  @Prop({ connect: 'ion-alert-controller' })
  alertCtrl: HTMLIonAlertControllerElement;

  componentDidLoad() {
    if (this.searchTerm) {
      this.downloadVideo(this.searchTerm);

      // Track search action
      gtag('event', 'search', {
        'event_category': 'Actions',
        'event_label': 'Searched Video',
        'value': this.searchTerm
      });
    }
  }

  onSearchbarInput(event: CustomEvent<string>): any {
    this.searchValue = event.detail;
  }

  onSearchbarPressedEnter(event: CustomEvent<string>) {
    this.downloadVideo(event.detail);
  }

  async showErrorAlert(message: string) {
    const alert = await this.alertCtrl.create({
      header: 'Error',
      message,
      buttons: ['OK']
    });

    return alert.present();
  }

  async onDownloadButtonClicked(_event: MouseEvent) {
    NProgress.start();
    await this.downloadVideo(this.searchValue);
    NProgress.done();
  }

  async downloadVideo(url: string) {
    // fetch website html
    const result = await to(fetch(url));
    if (result.error || !result.data.ok) {
      // failed to fetch site
      return this.showErrorAlert('Couldnt fetch video. Are you sure the url is correct?');
    }

    const content = await result.data.text();

    // search for the meta tag that contains the download link
    const searchResult = content.match(/<meta.*property="og:video".*content="(.*)".*\/>/);
    if (!searchResult || searchResult.length === 0) {
      // failed to find download link
      return this.showErrorAlert('Failed to retrieve download link. Are you sure this is a video?');
    }

    const videoLink = searchResult[1];

    // Create a link to download the file
    const downloadElement = document.createElement('a');
    downloadElement.href = `${videoLink}?dl=1`; // append ?dl=1 parameter to download the video instead of opening it
    downloadElement.click();

    // Track the download action
    gtag('event', 'download', {
      'event_category': 'Actions',
      'event_label': 'Download Video',
      'value': url
    });
  }

  render() {
    return (
      <div class="full-height full-width full-center">
        <ion-grid no-margin class="full-width">
          <ion-row style={{ justifyContent: 'center' }}>
            <ion-col size-xs="12" size-sm="10" size-md="8" size-lg="6" size-xl="2">
              <div style={{ height: '40px' }}>
                <insta-searchbar
                  placeholder="Instagram url"
                  onChange={ev => this.onSearchbarInput(ev)}
                  onPressedEnter={ev => this.onSearchbarPressedEnter(ev)}
                />
              </div>
            </ion-col>
            <ion-col size="1" size-xs="4" size-sm="2" size-md="2" size-lg="2" size-xl="1">
              <div style={{ height: '44px' }}>
                <insta-button onClick={event => this.onDownloadButtonClicked(event)}>Download</insta-button>
              </div>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
    );
  }
}
