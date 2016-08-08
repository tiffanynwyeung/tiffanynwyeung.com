# Style Guide
This is *mostly* unofficial, and more like a general "quick n' dirty" guide for components related to my current site theme, 'FLUX'.

## Typography & Copywriting
There's two main fonts used throughout the site: **Questrial** and **Roboto**.

**Questrial** is the primary heading font. Headings are styled in two ways:
- If the heading describes proper objects/topic content (eg. project titles/subtitles, names, places, general nouns), use capitalization.
- If the heading describes site elements (eg. denoting sections, text for navigation links and buttons), use lowercase.

The only exception is the nameplate subtitle, which is deliberately lowercase.

**Roboto** is used for body copy only - in no way should it be used for headings. Links should be bolded instead of underlined. Italics should be used sparingly.

## Colors
The general color palette boils down to **blue** and **gold**.

**Blue** is used in element backgrounds for important elements like headers, footers, tiles, and text highlighting. This is used to highlight certain information (eg. page title, subtitle, navigation) on the page.

However, this color can also be used as a secondary heading text color (so h2, h3). Generally, this should be used sparingly.

**Gold** is used for primary text emphasis. Page titles and section headings should both be highlighted in gold, as well as links/buttons.

## Codebase

## Structure
There's 4 categories for organizing the SCSS:
- "base/" covers all global variables & mixins, typography, colors, base element styling (typography, body, p, etc)
- "fonts/" covers all font-face declarations for all required fonts
- "modules/" covers all reusable partials for various site components, whether reusable within the site or reusable through all site-theme-related projects (eg. navigation, buttons, grid, footer)
- "sections/" covers specific overrides or unique elements not found within the rest of the site

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
