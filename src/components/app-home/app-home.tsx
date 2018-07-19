import { Component } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.pcss',
})
export class AppHome {
  render() {
    return (
      <div class="full-height full-width full-center">
        <ion-grid no-margin style={{ width: "90%" }}>
          <ion-row>
            <div style={{ height: "40px", width: "100%"}}>
              <insta-searchbar />
            </div>
          </ion-row>
        </ion-grid>
      </div>
    );
  }
}
