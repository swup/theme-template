[comment]: CLI-remove-start

# Theme template

This repo is used as a template for swup themes. Steps to publish your own swup theme:

1. Make a copy of this repo.
2. Update the name in _package.json_. Please, follow format `swup-[theme name]-theme`.
3. Update the description, repository url and author in _package.json_.
4. Write your theme in `src/index.js`. Theme must be in a form of class, must extend `@swup/theme` and should have a property name defined (`package.json` name in a form PascalCase - _swup-name-theme_ -> _SwupNameTheme_).
5. Update this documentation. Below is a documentation template where the _SwupNameTheme_ needs to be replaced with your theme name from packages.json in PascalCase.
6. Use `npm run build` to compile a standalone version of your theme (_dist_ folder) and npm version of your theme (_lib_ folder). Command is automatically executed before publishing.
7. Publish your theme to npm with `npm publish` command. This assumes you have npm account and are logged in with your computers npm CLI.

## Tips

- Checkout existing themes before creating one.
- Swup instance is automatically assigned to the theme instance and can be accessed under `this.swup` in `mount`/`unmount` methods.
* Swup theme automatically sets swup animationSelector option to `[class*="swup-transition-"]` to prevent bugs related to other libraries using the same classes. Use `swup-transition-*` for your theme classes. 
- Themes get a few special helper methods:
    * `applyStyles` to prepend style tag with defined content in the head tag.
    * `addClassName` to add `swup-transition-[name]` classname to an element.
    * `applyHTML` to append a *DIV* element with defined HTML content. 
- If you feel like this should be an official swup theme (under npm `@swup` organization) and the world could use a thing like this, contact me at gmarcuk@gmail.com.

---

[comment]: CLI-remove-end

# Swup [Theme Name] Theme

This is a theme for [swup](https://swup.js.org/) - complete, flexible, extensible and easy to use page transition library for your web.

## Instalation

This theme can be installed with npm

```bash
npm install swup-[theme-name]-theme
```

and included with import

```javascript
import Swup[ThemeName]Theme from 'swup-[theme-name]-theme';
```

or included from the dist folder

```html
<script src="./dist/SwupNameTheme.js"></script>
```

## Usage

To run this theme, include an instance in the swup options.

```javascript
const swup = new Swup({
  theme: [new SwupNameTheme()]
});
```
