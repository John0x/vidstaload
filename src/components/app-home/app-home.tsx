import { Component } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.pcss',
})
export class AppHome {
  onSearchbarPressedEnter(event: CustomEvent) {
    console.log(event);
  }
  
  render() {
    return (
      <div class="full-height full-width full-center">
        <ion-grid no-margin style={{ width: "50%" }}>
          <ion-row>
            <div style={{ height: "40px", width: "100%"}}>
              <insta-searchbar onPressedEnter={ev => this.onSearchbarPressedEnter(ev)} />
            </div>
          </ion-row>
        </ion-grid>
      </div>
    );
  }
}
