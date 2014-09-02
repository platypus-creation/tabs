---
layout: default
---

### DEMO

<tabs>
    <pane title=" Pane title 1">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </pane>
    <pane title="Pane title 2">
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </pane>
    <pane title="Pane title 3">
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    </pane>
    <pane title="Long pane title">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </pane>
</tabs>

Code:

    <tabs>
        <pane title=" Pane title 1">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </pane>
        <pane title="Pane title 2">
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </pane>
        <pane title="Pane title 3">
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ul>
        </pane>
        <pane title="Long pane title">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </pane>
    </tabs>
    
    
### Installation

    bower install angular-tabs
    
### Usage

- Include `tabs.js` and `tabs.css` into your app.
- Add platypus.tabs as a module dependency to your app : `angular.module('YOUR_APP', ['platypus.tabs'])`

### Features

#### Lazy loading

Tab content is only loaded when tab is visible, and discarded as soon as tab is left, ensuring you are not requesting precious resources for nothing

#### URL sync

Current tab is synced into the URL's anchor, so that a refresh, copy/pasting of the URL will bring you back to the proper tab.

You should be using HTML5 mode for location :

    $locationProvider.html5Mode(true);
    
#### Text ellipsis

Using flexbox, the tabs tries to adjust themselves in regard to the available space, truncating text whenever needed.


<script>
    var app = angular.module('platypus.tabs.demo', [
    'platypus.tabs'
    ]).config(function($locationProvider){
        $locationProvider.html5Mode(true);
    });
</script>
