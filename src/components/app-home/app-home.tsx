import { Component } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
})
export class AppHome {
  render() {
    return (
      <div class="full-height full-width full-center">
        <ion-grid>
          <ion-row>
            <insta-searchbar />
          </ion-row>
        </ion-grid>
      </div>
    );
  }
}
