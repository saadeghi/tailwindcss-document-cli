# Tailwind CSS Document CLI

If you're tired of opening [tailwindcss.com](https://tailwindcss.com/) website every minute to look up for class names or available utility classes, install this package 😅

[![](https://raw.githubusercontent.com/saadeghi/files/main/tailwindcss-document-cli/demo.gif)]

## Features
- Search Tailwind CSS class names in your CLI
- There's a link to the website if you need more details
- Fuzzy search


## Install
Install globally (with `-g`).
```
npm i tailwindcss-document-cli -g
```

## Use
just type `tw` with any word.
```
tw z-index
```
```
🔍 Found  1  result for  z-index 

 Z-index  https://tailwindcss.com/docs/z-index
  z-[0|10|20|30|40|50|auto]
```
---
```
tw underline
```
```
🔍 Found  1  result for  underline 

 Text Decoration  https://tailwindcss.com/docs/text-decoration
  underline 
  line-through 
  no-underline
```
---
```
tw font vr
```
```
🔍 Found  1  result for  font vr 

 Font Variant Numeric  https://tailwindcss.com/docs/font-variant-numeric
  normal-nums 
  ordinal 
  slashed-zero 
  lining-nums 
  oldstyle-nums 
  proportional-nums 
  tabular-nums 
  diagonal-fractions 
  stacked-fractions 
```
---
It's fuzzy search so it forgives your typo 🤓   
and tries to find similar results
```
tw pading
```
```
🔍 Found  2  results for  pading 

 Padding  https://tailwindcss.com/docs/padding
  [p|py|px|pt|pr|pb|pl]-[0|1|2|3|4|5|6|10|12|16|20|24|32|40|48|56|64|px] 

 Line Height  https://tailwindcss.com/docs/line-height
  leading-[3|4|5|6|7|8|9|10|none|tight|snug|normal|relaxed|loose] 
```
