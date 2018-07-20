import { Component } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.pcss'
})
export class AppHome {
  onSearchbarPressedEnter(event: CustomEvent) {
    console.log(event);
  }

  render() {
    return (
      <div class="full-height full-width full-center">
        <ion-grid no-margin style={{ width: '100%' }}>
          <ion-row style={{ justifyContent: "center" }}>
            <ion-col size-xs="12" size-sm="10" size-md="8" size-lg="6" size-xl="2">
              <div style={{ height: '40px' }}>
                <insta-searchbar
                  onPressedEnter={ev => this.onSearchbarPressedEnter(ev)}
                />
              </div>
            </ion-col>
            <ion-col size="1" size-xs="4" size-sm="2" size-md="2" size-lg="2" size-xl="1">
              <div style={{ height: '44px' }}>
              <insta-button>Download</insta-button>
              </div>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
    );
  }
}
