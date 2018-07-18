import { Component } from '@stencil/core';

@Component({
  tag: 'insta-searchbar',
  styleUrl: 'insta-searchbar.scss',
  shadow: true
})
export class InstaSearchbar {
  render() {
    return (
      <div>
        <ion-searchbar placeholder="Insert url" type="url" />
      </div>
    );
  }
}
