import { TestWindow } from '@stencil/core/testing';
import { AppRoot } from './app-root';

describe('app-root', () => {
  let window: TestWindow;

  beforeEach(async () => {
    window = new TestWindow();
    await window.load({
      components: [AppRoot],
      html: '<app-root></app-root>'
    });
  });

  it('should update', async () => {
    await window.flush();
  });

});
