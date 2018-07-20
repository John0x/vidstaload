import { TestWindow } from '@stencil/core/testing';
import { InstaSearchbar } from './insta-searchbar';

describe('insta-searchbar', () => {
  it('should build', () => {
    expect(new InstaSearchbar()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLInstaSearchbarElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [InstaSearchbar],
        html: '<insta-searchbar></insta-searchbar>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
