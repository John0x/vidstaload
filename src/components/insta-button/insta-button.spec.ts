import { TestWindow } from '@stencil/core/testing';
import { InstaButton } from './insta-button';

describe('insta-button', () => {
  it('should build', () => {
    expect(new InstaButton()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLInstaButtonElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [InstaButton],
        html: '<insta-button></insta-button>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
