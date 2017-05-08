# Style Guide

General styling for theme 3.0 'POLAR'.


## Typography & Copywriting
There's two main fonts used throughout the site: __Roboto__ and __Questrial__.

__Roboto__ is the default font used throughout the site. This includes all mobile-only section titles, and body copy. Links are bolded and underlined. Italics should be used sparingly.

__Questrial__ is the headline font. Headlines are written in sentence case (that is, capitalized).

The only exception is the nameplate tagline/subtitle, which is deliberately all lowercase.


## Colors

The color palette is dependent on which theme you use. For the light theme, it's __white__ (main) and __red__ (accent); for the dark theme, it's __indigo__ (main) and __gold__ (accent).

_Main_ colors are used as the general background color for the document and/or important elements, e.g. footers. The main colors in one theme should never be drastically noticeable between each other.

_Accent_ colors are used to emphasize important content and copy. This mainly can be found in the nameplate logo, important headlines and links, and so on.


## Codebase

## Structure
There's 4 categories for organizing the SCSS:
- "base/" covers all global variables, typography, colors, and default HTML element styles (typography, body, p, etc)
- "fonts/" covers all font-face declarations for all required fonts
- "components/" covers all basic components used throughout the site, e.g. layout, animations, "snowflake" elements consistent between themes, etc
- "sections/" covers unique styles only found in one specific portion of the site

### Writing Style
Generally when writing SCSS, each declaration should look something like this:
```
.class1,
.class2,
#id1 {
  @extend %foo;

  @include bar();

  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  background: #000;
  border: 1px solid white;
  font: 100%/100% sans-serif;
  color: #fff;
  text-transform: lowercase;
  transform: translateX(-50%);
  opacity: 0;
}
```

- 2 spaces for indentation
- A space should exist between the declaration ID and the opening brace, along with a space between each property and its value
- The ending brace should be on a new line
- Properties are separated into 5 categories, in order:
    - Element sizing (eg. width/height/padding/margin)
    - Element positioning (eg. position/display/visibility)
    - Element view (eg. background, border)
    - Element text styling (eg. font/line-height/color/text-align)
    - Element animation/additional (eg. transform/opacity/cursor)
- @extends and @include should generally be inserted at the top
- @extends should be used _highly_ sparingly, and only used for non-existent classes to avoid writing duplicate code
