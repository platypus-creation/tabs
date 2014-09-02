## Tabs

Tabs & Pane directives for angular

### Installation

    bower install angular-tabs
    
### Usage

  - Include tabs.js and tabs.css into your app.
  - Add platypus.tabs as a module dependency to your app : `angular.module('YOUR_APP', ['platypus.tabs'])`
  
    <tabs>
        <pane title="Pane title 1" icon="fa-people">
            [...]
        </pane>
        <pane title="Pane title 2" icon="fa-bullhorn">
            [...]
        </pane>
        <pane title="Pane title 3" icon="fa-cogs">
            [...]
        </pane>
        [...]
    </tabs>

### Features

#### Lazy loading

Tab content is only loaded when tab is visible, and discarded as soon as tab is left, ensuring you are not requesting precious resources for nothing

#### URL sync

Current tab is synced into the URL's anchor, so that a refresh, copy/pasting of the URL will bring you back to the proper tab.

You should be using HTML5 mode for location :

    $locationProvider.html5Mode(true);
    
#### Text ellipsis

Using flexbox, the tabs tries to adjust themselves in regard to the available space, truncating text whenever needed.