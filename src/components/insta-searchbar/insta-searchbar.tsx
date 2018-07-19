import { Component, State, Event, EventEmitter, Listen } from '@stencil/core';

@Component({
  tag: 'insta-searchbar',
  styleUrl: 'insta-searchbar.pcss',
  shadow: true
})
export class InstaSearchbar {
  @Event() pressedEnter: EventEmitter<string>;

  @State() value: string;

  @Listen('keydown')
  handleKeyDown(ev) {
    if (ev.keyCode === 40) {
      console.log('down arrow pressed');
      this.pressedEnter.emit(this.value);
    }
  }
  
  handleChange(event) {
    this.value = event.target.value;
  }

  render() {
    return (
      <div class="wrapper">
        <div class="container">
          <input type="text" value={this.value} onInput={(event) => this.handleChange(event)} class="search-input" placeholder="Insert url" />

          <button type="submit" class="search-button">
            <ion-icon color="light" name="download" size="large" />
          </button>
        </div>
      </div>
    );
  }
}
