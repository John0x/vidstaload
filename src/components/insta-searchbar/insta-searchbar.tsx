import { Component } from '@stencil/core';

@Component({
  tag: 'insta-searchbar',
  styleUrl: 'insta-searchbar.pcss',
  shadow: true
})
export class InstaSearchbar {
  render() {
    return (
      <div class="wrapper">
        <div class="container">
          <input type="text" class="search-input" placeholder="Insert url" />

          <button type="submit" class="search-button">
            <ion-icon color="light" name="download" size="large" />
          </button>
        </div>
      </div>
    );
  }
}
