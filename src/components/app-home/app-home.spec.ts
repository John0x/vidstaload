import { TestWindow } from '@stencil/core/testing';
import { AppHome } from './app-home';

describe('app-home', () => {
  let window: TestWindow;

  beforeEach(async () => {
    window = new TestWindow();
    await window.load({
      components: [AppHome],
      html: '<app-home></app-home>'
    });
  });

  it('should update', async () => {
    await window.flush();
  });

});
