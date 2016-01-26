# SCSS Codebase Documentation

This is the code style documentation for all SCSS code written for my portfolio website.


## Table of Contents
1. [General Style](#general-style)
2. [Naming Conventions](#naming-conventions)
3. [Codebase Organization](#codebase-organization)
    - [Base](#base)
    - [Fonts](#fonts)
    - [Modules](#modules)
    - [Sections](#sections)


## General Style

* All style code is written strictly in SCSS, *not* CSS or Sass.

* Indents are tabs, which are four spaces.

* There should be exactly one space between the property name and property value, and between the name declaration and opening brace.

* Properties are listed without thought given to SCSS-specific features such as extends, mixins, and includes, and are written in the following order, with certain properties coming first:

    * width, height, padding, margin
    * positioning, e.g. position, z-index, cursor
    * display, e.g. display, visibility
    * element appearance, e.g. background, border
    * typography, e.g. font, color, letter-spacing, text-transform
    * anything else, e.g. transitions, transforms

* Every property gets its own line, with closing braces on its own line at the very end.

* When nesting, each 'child' block needs one line of space before and after. This includes when the parent has no styling on it whatsoever.


## Naming Conventions

All code declarations follow the BEM (Block__Element--Modifier) methodology. All declarations should be lowercase -- no camelCase or UPPERCASE declarations. All names should be relevant, easy to understand, and descriptive; a good rule of thumb to keep in mind is 'if you can't figure out what this does from its name, then it's not well named'.


## Codebase Organization

The codebase is divided into several categories, each covering a different function:

* 'base/': covers all foundational code and global utility code; this should produce all global variables, mixins, extends, etc., along with the CSS baseline on which the site design should be built upon. This includes CSS resets, colors, typography, standard HTML element styling, and default layouts.

* 'fonts/': covers all importable, outside fonts.

* 'modules/': covers all functionally independent, singular site features. This includes larger features such as navigation and footers, as well as smaller components such as accordion menus, slideshows, and animations. *None of the modules should require any code from the rest of the codebase except from the 'base' and 'font' categories.*

* 'sections/': covers all section/page-specific features.
