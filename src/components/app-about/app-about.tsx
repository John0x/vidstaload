import { Component } from '@stencil/core';

@Component({
    tag: 'app-about',
    styleUrl: 'app-about.pcss',
})
export class AppAbout {
    render() {
        return (
            <div>
                <p>Hello AppAbout!</p>
            </div>
        );
    }
}
