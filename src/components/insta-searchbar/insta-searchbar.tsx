import { Component, Event, EventEmitter, Listen, Prop, State } from '@stencil/core';

@Component({
  tag: 'insta-searchbar',
  styleUrl: 'insta-searchbar.pcss',
  shadow: true
})
export class InstaSearchbar {
  @State() value: string;

  @Prop() placeholder: string;

  @Event() pressedEnter: EventEmitter<string>;
  @Event() change: EventEmitter<string>;

  @Listen('keydown')
  handleKeyDown(ev) {
    if (ev.keyCode === 13) {
      this.pressedEnter.emit(this.value);
    }
  }

  handleChange(event) {
    this.value = event.target.value;
    this.change.emit(this.value);
  }

  render() {
    return (
      <input
        type="text"
        value={this.value}
        onInput={event => this.handleChange(event)}
        class="search-input"
        placeholder={this.placeholder}
      />
    );
  }
}
