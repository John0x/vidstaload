import { Component } from '@stencil/core';

@Component({
  tag: 'insta-button',
  styleUrl: 'insta-button.pcss',
  shadow: true
})
export class InstaButton {
  render() {
    return (
      <button>
        <slot />
      </button>
    );
  }
}
