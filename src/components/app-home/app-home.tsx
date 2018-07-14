import { Component } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
  shadow: true
})
export class AppHome {
  render() {
    return (
      <ion-grid>
        <ion-row>
          <ion-col>
            <ion-searchbar animated placeholder="Instagram url or search tag" />
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-button color="primary" fill="outline">
              Download
            </ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
    );
  }
}
