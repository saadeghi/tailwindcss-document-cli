
module.exports = [
  {
    title: 'Container',
    permalink: 'container',
    values: [
      { name: 'container' },
    ],
  }, {
    title: 'Box Sizing',
    permalink: 'box-sizing',
    values: [
      { name: 'box-[border|content]' },
    ],
  }, {
    title: 'Display',
    permalink: 'display',
    values: [
      { name: 'block' },
      { name: 'inline-block' },
      { name: 'inline' },
      { name: 'flex' },
      { name: 'inline-flex' },
      { name: 'table' },
      { name: 'table-caption' },
      { name: 'table-cell' },
      { name: 'table-column' },
      { name: 'table-column-group' },
      { name: 'table-footer-group' },
      { name: 'table-header-group' },
      { name: 'table-row-group' },
      { name: 'table-row' },
      { name: 'flow-root' },
      { name: 'grid' },
      { name: 'inline-grid' },
      { name: 'contents' },
      { name: 'hidden' },
    ],
  }, {
    title: 'Floats',
    permalink: 'float',
    values: [
      { name: 'float-[right|left|none]' },
      { name: 'clearfix' },
    ],
  }, {
    title: 'Clear',
    permalink: 'clear',
    values: [
      { name: 'clear-[left|right|both|none]' },
    ],
  }, {
    title: 'Object Fit',
    permalink: 'object-fit',
    values: [
      { name: 'object-[contain|cover|fill|none|scale-down]' },
    ],
  }, {
    title: 'Object Position',
    permalink: 'object-position',
    values: [
      { name: 'object-bottom' },
      { name: 'object-center' },
      { name: 'object-left' },
      { name: 'object-left-bottom' },
      { name: 'object-left-top' },
      { name: 'object-right' },
      { name: 'object-right-bottom' },
      { name: 'object-right-top' },
      { name: 'object-top' },
    ],
  }, {
    title: 'Overflow',
    permalink: 'overflow',
    values: [
      { name: 'overflow-[auto|hidden|visible|scroll]' },
      { name: 'overflow-x-[auto|hidden|visible|scroll]' },
      { name: 'overflow-y-[auto|hidden|visible|scroll]' },
      { name: 'scrolling-[touch|auto]' },
    ],
  }, {
    title: 'Overscroll Behavior',
    permalink: 'overscroll-behavior',
    values: [
      { name: 'overscroll-[auto|contain|none]' },
      { name: 'overscroll-y-[auto|contain|none]' },
      { name: 'overscroll-x-[auto|contain|none]' },
    ],
  }, {
    title: 'Position',
    permalink: 'position',
    values: [
      { name: 'static' },
      { name: 'fixed' },
      { name: 'absolute' },
      { name: 'relative' },
      { name: 'sticky' },
    ],
  }, {
    title: 'Top / Right / Bottom / Left',
    permalink: 'top-right-bottom-left',
    values: [
      { name: 'inset-[0|auto]' },
      { name: 'inset-y-[0|auto]' },
      { name: 'inset-x-[0|auto]' },
      { name: 'top-[0|auto]' },
      { name: 'right-[0|auto]' },
      { name: 'bottom-[0|auto]' },
      { name: 'left-[0|auto]' },
    ],
  }, {
    title: 'Visibility',
    permalink: 'visibility',
    values: [
      { name: 'visible' },
      { name: 'invisible' },
    ],
  }, {
    title: 'Z-index',
    permalink: 'z-index',
    values: [
      { name: 'z-[0|10|20|30|40|50|auto]' },


    ],
  }, {
    title: 'Flex Direction',
    permalink: 'flex-direction',
    values: [
      { name: 'flex-row' },
      { name: 'flex-row-reverse' },
      { name: 'flex-col' },
      { name: 'flex-col-reverse' },
    ],
  }, {
    title: 'Flex Wrap',
    permalink: 'flex-wrap',
    values: [
      { name: 'flex-wrap' },
      { name: 'flex-wrap-reverse' },
      { name: 'flex-no-wrap' },
    ],
  }, {
    title: 'Flex',
    permalink: 'flex',
    values: [
      { name: 'flex-1' },
      { name: 'flex-auto' },
      { name: 'flex-initial' },
      { name: 'flex-none' },
    ],
  }, {
    title: 'Flex Grow',
    permalink: 'flex-grow',
    values: [
      { name: 'flex-grow-0' },
      { name: 'flex-grow' },
    ],
  }, {
    title: 'Flex Shrink',
    permalink: 'flex-shrink',
    values: [
      { name: 'flex-shrink-0' },
      { name: 'flex-shrink' },
    ],
  }, {
    title: 'Order',
    permalink: 'order',
    values: [
      { name: 'order-[1|2|3|4|5|6|7|8|9|10|11|12]' },
      { name: 'order-[first|last|none]' },


    ],
  }, {
    title: 'Grid Template Columns',
    permalink: 'grid-template-columns',
    values: [
      { name: 'grid-cols-[1|2|3|4|5|6|7|8|9|10|11|12|none]' },
    ],
  }, {
    title: 'Grid Column Start / End',
    permalink: 'grid-column',
    values: [
      { name: 'col-auto' },
      { name: 'col-span-[1|2|3|4|5|6|7|8|9|10|11|12|full]' },
      { name: 'col-start-[1|2|3|4|5|6|7|8|9|10|11|12|13|auto]' },
      { name: 'col-end-[1|2|3|4|5|6|7|8|9|10|11|12|13|auto]' },
    ],
  }, {
    title: 'Grid Template Rows',
    permalink: 'grid-template-rows',
    values: [
      { name: 'grid-rows-[1|2|3|4|5|6|none]' },
    ],
  }, {
    title: 'Grid Row Start / End',
    permalink: 'grid-row',
    values: [
      { name: 'row-auto' },
      { name: 'row-span-[1|2|3|4|5|6|full]' },
      { name: 'row-start-[1|2|3|4|5|6|7|auto]' },
      { name: 'row-end-[1|2|3|4|5|6|7|auto]' },
    ],
  }, {
    title: 'Grid Auto Flow',
    permalink: 'grid-auto-flow',
    values: [
      { name: 'grid-flow-row' },
      { name: 'grid-flow-col' },
      { name: 'grid-flow-row-dense' },
      { name: 'grid-flow-col-dense' },
    ],
  }, {
    title: 'Grid Auto Columns',
    permalink: 'grid-auto-columns',
    values: [
      { name: 'auto-cols-auto' },
      { name: 'auto-cols-min' },
      { name: 'auto-cols-max' },
      { name: 'auto-cols-fr' },
    ],
  }, {
    title: 'Grid Auto Rows',
    permalink: 'grid-auto-rows',
    values: [
      { name: 'auto-rows-auto' },
      { name: 'auto-rows-min' },
      { name: 'auto-rows-max' },
      { name: 'auto-rows-fr' },
    ],
  }, {
    title: 'Gap',
    permalink: 'gap',
    values: [
      { name: 'gap-[0|1|2|3|4|5|6|8|10|12|16|20|24|32|40|48|56|64|px]' },
      { name: 'gap-x-[0|1|2|3|4|5|6|8|10|12|16|20|24|32|40|48|56|64|px]' },
      { name: 'gap-y-[0|1|2|3|4|5|6|8|10|12|16|20|24|32|40|48|56|64|px]' },


    ],
  }, {
    title: 'Justify Content',
    permalink: 'justify-content',
    values: [
      { name: 'justify-[start|end|center|between|around|evenly]' },
    ],
  }, {
    title: 'Justify Items',
    permalink: 'justify-items',
    values: [
      { name: 'justify-items-[auto|start|end|center|stretch]' },
    ],
  }, {
    title: 'Justify Self',
    permalink: 'justify-self',
    values: [
      { name: 'justify-self-[auto|start|end|center|stretch]' },
    ],
  }, {
    title: 'Align Content',
    permalink: 'align-content',
    values: [
      { name: 'content-[center|start|end|between|around|evenly]' },
    ],
  }, {
    title: 'Align Items',
    permalink: 'align-items',
    values: [
      { name: 'items-[start|end|center|baseline|stretch]' },
    ],
  }, {
    title: 'Align Self',
    permalink: 'align-self',
    values: [
      { name: 'self-[auto|start|end|center|stretch]' },
    ],
  }, {
    title: 'Place Content',
    permalink: 'place-content',
    values: [
      { name: 'place-content-[center|start|end|between|around|evenly|stretch]' },
    ],
  }, {
    title: 'Place Items',
    permalink: 'place-items',
    values: [
      { name: 'place-items-[auto|start|end|center|stretch]' },
    ],
  }, {
    title: 'Place Self',
    permalink: 'place-self',
    values: [
      { name: 'place-self-[auto|start|end|center|stretch]' },


    ],
  }, {
    title: 'Padding',
    permalink: 'padding',
    values: [
      { name: '[p|py|px|pt|pr|pb|pl]-[0|1|2|3|4|5|6|10|12|16|20|24|32|40|48|56|64|px]' },
    ],
  }, {
    title: 'Margin',
    permalink: 'margin',
    values: [
      { name: '[m|my|mx|mt|mr|mb|ml]-[0|0.5|1|1.5|2|2.5|3|3.5|4|5|6|7|8|9|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96|auto|px]' },
      { name: '-[m|my|mx|mt|mr|mb|ml]-[0|0.5|1|1.5|2|2.5|3|3.5|4|5|6|7|8|9|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96|px]' },
    ],
  }, {
    title: 'Space Between',
    permalink: 'space',
    values: [
      { name: 'space-[x|y]-[0|1|2|3|4|5|6|10|12|16|20|24|32|40|48|56|64|px|reverse]' },
      { name: '-space-[x|y]-[0|1|2|3|4|5|6|10|12|16|20|24|32|40|48|56|64|px]' },


    ],
  }, {
    title: 'Width',
    permalink: 'width',
    values: [
      { name: 'w-[0|0.5|1|1.5|2|2.5|3|3.5|4|5|6|7|8|9|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96|px]' },
      { name: 'w-[1/2|1/3|2/3|1/4|2/4|3/4]' },
      { name: 'w-[1/5|2/5|3/5|4/5]' },
      { name: 'w-[1/6|2/6|3/6|4/6|5/6]' },
      { name: 'w-[1/12|2/12|3/12|4/12|5/12|6/12|7/12|8/12|9/12|10/12|11/12]' },
      { name: 'w-[full|screen|auto]' },
    ],
  }, {
    title: 'Min-Width',
    permalink: 'min-width',
    values: [
      { name: 'min-w-[0|full|min|max]' },
    ],
  }, {
    title: 'Max-Width',
    permalink: 'max-width',
    values: [
      { name: 'max-w-[0|none|xs|sm|md|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|full|min|max|prose]' },
      { name: 'max-w-screen-[sm|md|lg|xl|2xl]' },
    ],
  }, {
    title: 'Height',
    permalink: 'height',
    values: [
      { name: 'h-[0|0.5|1|1.5|2|2.5|3|3.5|4|5|6|7|8|9|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96|px]' },
      { name: 'h-[1/2|1/3|2/3|1/4|2/4|3/4]' },
      { name: 'h-[1/5|2/5|3/5|4/5]' },
      { name: 'h-[1/6|2/6|3/6|4/6|5/6]' },
      { name: 'h-[full|screen|auto]' },
    ],
  }, {
    title: 'Min-Height',
    permalink: 'min-height',
    values: [
      { name: 'min-h-[0|full|screen]' },
    ],
  }, {
    title: 'Max-Height',
    permalink: 'max-height',
    values: [
      { name: 'max-h-[0|0.5|1|1.5|2|2.5|3|3.5|4|5|6|7|8|9|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96|px]' },
      { name: 'max-h-[full|screen]' },
    ],
  }, {
    title: 'Font Family',
    permalink: 'font-family',
    values: [
      { name: 'font[sans|serif|mono]' },
    ],
  }, {
    title: 'Font Size',
    permalink: 'font-size',
    values: [
      { name: 'text-[xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl]' },
    ],
  }, {
    title: 'Font Smoothing',
    permalink: 'font-smoothing',
    values: [
      { name: 'antialiased' },
      { name: 'subpixel-antialiased' },
    ],
  }, {
    title: 'Font Style',
    permalink: 'font-style',
    values: [
      { name: 'italic' },
      { name: 'not-italic' },
    ],
  }, {
    title: 'Font Weight',
    permalink: 'font-weight',
    values: [
      { name: 'font-[hairline|thin|light|normal|medium|semibold|bold|extrabold|black]' },
    ],
  }, {
    title: 'Font Variant Numeric',
    permalink: 'font-variant-numeric',
    values: [
      { name: 'normal-nums' },
      { name: 'ordinal' },
      { name: 'slashed-zero' },
      { name: 'lining-nums' },
      { name: 'oldstyle-nums' },
      { name: 'proportional-nums' },
      { name: 'tabular-nums' },
      { name: 'diagonal-fractions' },
      { name: 'stacked-fractions' },
    ],
  }, {
    title: 'Letter Spacing',
    permalink: 'letter-spacing',
    values: [
      { name: 'tracking-[tighter|tight|normal|wide|wider|widest]' },
    ],
  }, {
    title: 'Line Height',
    permalink: 'line-height',
    values: [
      { name: 'leading-[3|4|5|6|7|8|9|10|none|tight|snug|normal|relaxed|loose]' },
    ],
  }, {
    title: 'List Style Type',
    permalink: 'list-style-type',
    values: [
      { name: 'list-[none|disc|decimal]' },
    ],
  }, {
    title: 'List Style Position',
    permalink: 'list-style-position',
    values: [
      { name: 'list-[inside|outside]' },
    ],
  }, {
    title: 'Placeholder Color',
    permalink: 'placeholder-color',
    values: [
      { name: 'placeholder-[transparent|current|black|white]' },
      { name: 'placeholder-gray-[100|200|300|400|500|600|700|800|900]' },
      { name: 'placeholder-red-[100|200|300|400|500|600|700|800|900]' },
      { name: 'placeholder-orange-[100|200|300|400|500|600|700|800|900]' },
      { name: 'placeholder-yellow-[100|200|300|400|500|600|700|800|900]' },
      { name: 'placeholder-green-[100|200|300|400|500|600|700|800|900]' },
      { name: 'placeholder-teal-[100|200|300|400|500|600|700|800|900]' },
      { name: 'placeholder-blue-[100|200|300|400|500|600|700|800|900]' },
      { name: 'placeholder-indigo-[100|200|300|400|500|600|700|800|900]' },
      { name: 'placeholder-purple-[100|200|300|400|500|600|700|800|900]' },
      { name: 'placeholder-pink-[100|200|300|400|500|600|700|800|900]' },
    ],
  }, {
    title: 'Placeholder Opacity',
    permalink: 'placeholder-opacity',
    values: [
      { name: 'placeholder-opacity-[0|25|50|75|100]' },
    ],
  }, {
    title: 'Text Align',
    permalink: 'text-align',
    values: [
      { name: 'text-[left|center|right|justify]' },
    ],
  }, {
    title: 'Text Color',
    permalink: 'text-color',
    values: [
      { name: 'text-[transparent|current|black|white]' },
      { name: 'text-gray-[100|200|300|400|500|600|700|800|900]' },
      { name: 'text-red-[100|200|300|400|500|600|700|800|900]' },
      { name: 'text-orange-[100|200|300|400|500|600|700|800|900]' },
      { name: 'text-yellow-[100|200|300|400|500|600|700|800|900]' },
      { name: 'text-green-[100|200|300|400|500|600|700|800|900]' },
      { name: 'text-teal-[100|200|300|400|500|600|700|800|900]' },
      { name: 'text-blue-[100|200|300|400|500|600|700|800|900]' },
      { name: 'text-indigo-[100|200|300|400|500|600|700|800|900]' },
      { name: 'text-purple-[100|200|300|400|500|600|700|800|900]' },
      { name: 'text-pink-[100|200|300|400|500|600|700|800|900]' },
    ],
  }, {
    title: 'Text Opacity',
    permalink: 'text-opacity',
    values: [
      { name: 'text-opacity-[0|25|50|75|100]' },
    ],
  }, {
    title: 'Text Decoration',
    permalink: 'text-decoration',
    values: [
      { name: 'underline' },
      { name: 'line-through' },
      { name: 'no-underline' },
    ],
  }, {
    title: 'Text Transform',
    permalink: 'text-transform',
    values: [
      { name: 'uppercase' },
      { name: 'lowercase' },
      { name: 'capitalize' },
      { name: 'normal-case' },
    ],
  }, {
    title: 'Vertical Align',
    permalink: 'vertical-align',
    values: [
      { name: 'align-[baseline|top|middle|bottom|text-top|text-bottom]' },
    ],
  }, {
    title: 'Whitespace',
    permalink: 'whitespace',
    values: [
      { name: 'whitespace-[normal|no-wrap|pre|pre-line|pre-wrap]' },
    ],
  }, {
    title: 'Word Break',
    permalink: 'word-break',
    values: [
      { name: 'break-[normal|words|all]' },
      { name: 'truncate' },


    ],
  }, {
    title: 'Background Attachment',
    permalink: 'background-attachment',
    values: [
      { name: 'bg-[fixed|local|scroll]' },
    ],
  }, {
    title: 'Background Clip',
    permalink: 'background-clip',
    values: [
      { name: 'bg-clip-[border|padding|content|text]' },
    ],
  }, {
    title: 'Background Color',
    permalink: 'background-color',
    values: [
      { name: 'bg-[transparent|current|black|white]' },
      { name: 'bg-gray-[100|200|300|400|500|600|700|800|900]' },
      { name: 'bg-red-[100|200|300|400|500|600|700|800|900]' },
      { name: 'bg-orange-[100|200|300|400|500|600|700|800|900]' },
      { name: 'bg-yellow-[100|200|300|400|500|600|700|800|900]' },
      { name: 'bg-green-[100|200|300|400|500|600|700|800|900]' },
      { name: 'bg-teal-[100|200|300|400|500|600|700|800|900]' },
      { name: 'bg-blue-[100|200|300|400|500|600|700|800|900]' },
      { name: 'bg-indigo-[100|200|300|400|500|600|700|800|900]' },
      { name: 'bg-purple-[100|200|300|400|500|600|700|800|900]' },
      { name: 'bg-pink-[100|200|300|400|500|600|700|800|900]' },
    ],
  }, {
    title: 'Background Opacity',
    permalink: 'background-opacity',
    values: [
      { name: 'bg-opacity-[0|25|50|75|100]' },
    ],
  }, {
    title: 'Background Position',
    permalink: 'background-position',
    values: [
      { name: 'bg-bottom' },
      { name: 'bg-center' },
      { name: 'bg-left' },
      { name: 'bg-left-bottom' },
      { name: 'bg-left-top' },
      { name: 'bg-right' },
      { name: 'bg-right-bottom' },
      { name: 'bg-right-top' },
      { name: 'bg-top' },
    ],
  }, {
    title: 'Background Repeat',
    permalink: 'background-repeat',
    values: [
      { name: 'bg-repeat' },
      { name: 'bg-no-repeat' },
      { name: 'bg-repeat-x' },
      { name: 'bg-repeat-y' },
      { name: 'bg-repeat-round' },
      { name: 'bg-repeat-space' },
    ],
  }, {
    title: 'Background Size',
    permalink: 'background-size',
    values: [
      { name: 'bg-[auto|cover|contain]' },
    ],
  }, {
    title: 'Background Image',
    permalink: 'background-image',
    values: [
      { name: 'bg-none' },
      { name: 'bg-gradient-to-[t|tr|r|br|b|bl|l|tl]' },
    ],
  }, {
    title: 'Gradient Color Stops',
    permalink: 'gradient-color-stops',
    values: [
      { name: 'from-[transparent|current|black|white]' },
      { name: 'from-gray-[100|200|300|400|500|600|700|800|900]' },
      { name: 'from-red-[100|200|300|400|500|600|700|800|900]' },
      { name: 'from-orange-[100|200|300|400|500|600|700|800|900]' },
      { name: 'from-yellow-[100|200|300|400|500|600|700|800|900]' },
      { name: 'from-green-[100|200|300|400|500|600|700|800|900]' },
      { name: 'from-teal-[100|200|300|400|500|600|700|800|900]' },
      { name: 'from-blue-[100|200|300|400|500|600|700|800|900]' },
      { name: 'from-indigo-[100|200|300|400|500|600|700|800|900]' },
      { name: 'from-purple-[100|200|300|400|500|600|700|800|900]' },
      { name: 'from-pink-[100|200|300|400|500|600|700|800|900]' },
      { name: 'via-[transparent|current|black|white]' },
      { name: 'via-gray-[100|200|300|400|500|600|700|800|900]' },
      { name: 'via-red-[100|200|300|400|500|600|700|800|900]' },
      { name: 'via-orange-[100|200|300|400|500|600|700|800|900]' },
      { name: 'via-yellow-[100|200|300|400|500|600|700|800|900]' },
      { name: 'via-green-[100|200|300|400|500|600|700|800|900]' },
      { name: 'via-teal-[100|200|300|400|500|600|700|800|900]' },
      { name: 'via-blue-[100|200|300|400|500|600|700|800|900]' },
      { name: 'via-indigo-[100|200|300|400|500|600|700|800|900]' },
      { name: 'via-purple-[100|200|300|400|500|600|700|800|900]' },
      { name: 'via-pink-[100|200|300|400|500|600|700|800|900]' },
      { name: 'to-[transparent|current|black|white]' },
      { name: 'to-gray-[100|200|300|400|500|600|700|800|900]' },
      { name: 'to-red-[100|200|300|400|500|600|700|800|900]' },
      { name: 'to-orange-[100|200|300|400|500|600|700|800|900]' },
      { name: 'to-yellow-[100|200|300|400|500|600|700|800|900]' },
      { name: 'to-green-[100|200|300|400|500|600|700|800|900]' },
      { name: 'to-teal-[100|200|300|400|500|600|700|800|900]' },
      { name: 'to-blue-[100|200|300|400|500|600|700|800|900]' },
      { name: 'to-indigo-[100|200|300|400|500|600|700|800|900]' },
      { name: 'to-purple-[100|200|300|400|500|600|700|800|900]' },
      { name: 'to-pink-[100|200|300|400|500|600|700|800|900]' },


    ],
  }, {
    title: 'Border Radius',
    permalink: 'border-radius',
    values: [
      { name: 'rounded' },
      { name: 'rounded-[none|sm|md|lg|xl|2xl|3xl|full]' },
      { name: 'rounded-t-[none|sm|md|lg|xl|2xl|3xl|full]' },
      { name: 'rounded-r-[none|sm|md|lg|xl|2xl|3xl|full]' },
      { name: 'rounded-b-[none|sm|md|lg|xl|2xl|3xl|full]' },
      { name: 'rounded-l-[none|sm|md|lg|xl|2xl|3xl|full]' },
      { name: 'rounded-tl-[none|sm|md|lg|xl|2xl|3xl|full]' },
      { name: 'rounded-tr-[none|sm|md|lg|xl|2xl|3xl|full]' },
      { name: 'rounded-bl-[none|sm|md|lg|xl|2xl|3xl|full]' },
      { name: 'rounded-br-[none|sm|md|lg|xl|2xl|3xl|full]' },

    ],
  }, {
    title: 'Border Width',
    permalink: 'border-width',
    values: [
      { name: 'border' },
      { name: 'border-[0|2|4|8]' },
      { name: 'border-[t|r|b|l]' },
      { name: 'border-t-[0|2|4|8]' },
      { name: 'border-r-[0|2|4|8]' },
      { name: 'border-b-[0|2|4|8]' },
      { name: 'border-l-[0|2|4|8]' },
    ],
  }, {
    title: 'Border Color',
    permalink: 'border-color',
    values: [
      { name: 'border-[transparent|current|black|white]' },
      { name: 'border-gray-[100|200|300|400|500|600|700|800|900]' },
      { name: 'border-red-[100|200|300|400|500|600|700|800|900]' },
      { name: 'border-orange-[100|200|300|400|500|600|700|800|900]' },
      { name: 'border-yellow-[100|200|300|400|500|600|700|800|900]' },
      { name: 'border-green-[100|200|300|400|500|600|700|800|900]' },
      { name: 'border-teal-[100|200|300|400|500|600|700|800|900]' },
      { name: 'border-blue-[100|200|300|400|500|600|700|800|900]' },
      { name: 'border-indigo-[100|200|300|400|500|600|700|800|900]' },
      { name: 'border-purple-[100|200|300|400|500|600|700|800|900]' },
      { name: 'border-pink-[100|200|300|400|500|600|700|800|900]' },
    ],
  }, {
    title: 'Border Opacity',
    permalink: 'border-opacity',
    values: [
      { name: 'border-opacity-[0|25|50|75|100]' },
    ],
  }, {
    title: 'Border Style',
    permalink: 'border-style',
    values: [
      { name: 'border-[solid|dashed|dotted|double|none]' },
    ],
  }, {
    title: 'Divide Width',
    permalink: 'divide-width',
    values: [
      { name: 'divide-[x|y]' },
      { name: 'divide-x-[0|2|4|8|reverse]' },
      { name: 'divide-y-[0|2|4|8|reverse]' },
    ],
  }, {
    title: 'Divide Color',
    permalink: 'divide-color',
    values: [
      { name: 'divide-[transparent|current|black|white]' },
      { name: 'divide-gray-[100|200|300|400|500|600|700|800|900]' },
      { name: 'divide-red-[100|200|300|400|500|600|700|800|900]' },
      { name: 'divide-orange-[100|200|300|400|500|600|700|800|900]' },
      { name: 'divide-yellow-[100|200|300|400|500|600|700|800|900]' },
      { name: 'divide-green-[100|200|300|400|500|600|700|800|900]' },
      { name: 'divide-teal-[100|200|300|400|500|600|700|800|900]' },
      { name: 'divide-blue-[100|200|300|400|500|600|700|800|900]' },
      { name: 'divide-indigo-[100|200|300|400|500|600|700|800|900]' },
      { name: 'divide-purple-[100|200|300|400|500|600|700|800|900]' },
      { name: 'divide-pink-[100|200|300|400|500|600|700|800|900]' },
    ],
  }, {
    title: 'Divide Opacity',
    permalink: 'divide-opacity',
    values: [
      { name: 'divide-opacity-[0|25|50|75|100]' },
    ],
  }, {
    title: 'Divide Style',
    permalink: 'divide-style',
    values: [
      { name: 'divide-[solid|dashed|dotted|double|none]' },


    ],
  }, {
    title: 'Border Collapse',
    permalink: 'border-collapse',
    values: [
      { name: 'border-[collapse|seperate]' },
    ],
  }, {
    title: 'Table Layout',
    permalink: 'table-layout',
    values: [
      { name: 'table-[auto|fixed]' },


    ],
  }, {
    title: 'Box Shadow',
    permalink: 'box-shadow',
    values: [
      { name: 'shadow' },
      { name: 'shadow-[xs|sm|md|lg|xl|2xl|inner|outline|none]' },
    ],
  }, {
    title: 'Opacity',
    permalink: 'opacity',
    values: [
      { name: 'opacity-[0|25|50|75|100]' },


    ],
  }, {
    title: 'Transition Property',
    permalink: 'transition-property',
    values: [
      { name: 'transition' },
      { name: 'transition-[none|all|colors|opacity|shadow|transform]' },
    ],
  }, {
    title: 'Transition Duration',
    permalink: 'transition-duration',
    values: [
      { name: 'duration-[75|100|150|200|300|500|700|1000]' },
    ],
  }, {
    title: 'Transition Timing Function',
    permalink: 'transition-timing-function',
    values: [
      { name: 'ease-[linear|in|out|in-out]' },
    ],
  }, {
    title: 'Transition Delay',
    permalink: 'transition-delay',
    values: [
      { name: 'delay-[75|100|150|200|300|500|700|1000]' },
    ],
  }, {
    title: 'Animation',
    permalink: 'animation',
    values: [
      { name: 'animate-[none|spin|ping|pulse|bounce]' },


    ],
  }, {
    title: 'Scale',
    permalink: 'scale',
    values: [
      { name: 'scale-[0|50|75|90|95|100|105|110|125|150]' },
      { name: 'scale-x-[0|50|75|90|95|100|105|110|125|150]' },
      { name: 'scale-y-[0|50|75|90|95|100|105|110|125|150]' },
    ],
  }, {
    title: 'Rotate',
    permalink: 'rotate',
    values: [
      { name: 'rotate-[0|1|2|3|6|12|45|90|180]' },
      { name: '-rotate-[1|2|3|6|12|45|90|180]' },
    ],
  }, {
    title: 'Translate',
    permalink: 'translate',
    values: [
      { name: 'translate-x-[0|1|2|3|4|5|6|7|8|10|12|16|20|24|32|40|48|56|64|px|full|1/2]' },
      { name: '-translate-x-[1|2|3|4|5|6|7|8|10|12|16|20|24|32|40|48|56|64|px|full|1/2]' },
      { name: 'translate-y-[0|1|2|3|4|5|6|7|8|10|12|16|20|24|32|40|48|56|64|px|full|1/2]' },
      { name: '-translate-y-[1|2|3|4|5|6|7|8|10|12|16|20|24|32|40|48|56|64|px|full|1/2]' },
    ],
  }, {
    title: 'Skew',
    permalink: 'skew',
    values: [
      { name: 'skew-x-[0|1|2|3|6|12]' },
      { name: '-skew-x-[1|2|3|6|12]' },
      { name: 'skew-y-[0|1|2|3|6|12]' },
      { name: '-skew-x-[1|2|3|6|12]' },
    ],
  }, {
    title: 'Transform Origin',
    permalink: 'transform-origin',
    values: [
      { name: 'origin-center' },
      { name: 'origin-top' },
      { name: 'origin-top-right' },
      { name: 'origin-right' },
      { name: 'origin-bottom-right' },
      { name: 'origin-bottom' },
      { name: 'origin-bottom-left' },
      { name: 'origin-left' },
      { name: 'origin-top-left' },
    ],
  }, {
    title: 'Appearance',
    permalink: 'appearance',
    values: [
      { name: 'appearance-none' },
    ],
  }, {
    title: 'Cursor',
    permalink: 'cursor',
    values: [
      { name: 'cursor-[auto|default|pointer|wait|text|move|not-allowed]' },
    ],
  }, {
    title: 'Outline',
    permalink: 'outline',
    values: [
      { name: 'outline-[none|white|black]' },
    ],
  }, {
    title: 'Pointer Events',
    permalink: 'pointer-events',
    values: [
      { name: 'pointer-events-[none|auto]' },
    ],
  }, {
    title: 'Resize',
    permalink: 'resize',
    values: [
      { name: 'resize' },
      { name: 'resize-[none|y|x]' },
    ],
  }, {
    title: 'User Select',
    permalink: 'user-select',
    values: [
      { name: 'select-[none|text|all|auto]' },


    ],
  }, {
    title: 'Fill',
    permalink: 'fill',
    values: [
      { name: 'fill-current' },
    ],
  }, {
    title: 'Stroke',
    permalink: 'stroke',
    values: [
      { name: 'stroke-current' },
    ],
  }, {
    title: 'Stroke Width',
    permalink: 'stroke-width',
    values: [
      { name: 'stroke-[0|1|2]' },


    ],
  }, {
    title: 'Screen Readers',
    permalink: 'screen-readers',
    values: [
      { name: 'sr-only' },
      { name: 'not-sr-only' },
    ]
  }, {
    title: 'Breakpoints',
    permalink: 'breakpoints',
    values: [
      { name: 'sm (640px)' },
      { name: 'md (768px)' },
      { name: 'lg (1024px)' },
      { name: 'xl (1280px)' },
      { name: '2xl (1536px)' },
    ]
  }, {
    title: 'Responsive Design',
    permalink: 'responsive-design',
    values: [
      { name: 'sm (min-width:640px)' },
      { name: 'md (min-width:768px)' },
      { name: 'lg (min-width:1024px)' },
      { name: 'xl (min-width:1280px)' },
      { name: '2xl (min-width:1536px)' },
    ]
  }, {
    title: 'Dark Mode',
    permalink: 'dark-mode',
    values: [
      { name: 'dark:CLASS' },
    ]
  }, {
    title: 'Hover, Focus, & Other States',
    permalink: 'hover-focus-and-other-states',
    values: [
      { name: 'Hover:CLASS' },
      { name: 'Focus:CLASS' },
      { name: 'Active:CLASS' },
      { name: 'Group-hover:CLASS' },
      { name: 'Group-focus:CLASS' },
      { name: 'Focus-within:CLASS' },
      { name: 'Focus-visible:CLASS' },
      { name: 'Motion-safe:CLASS' },
      { name: 'Motion-reduce:CLASS' },
      { name: 'Disabled:CLASS' },
      { name: 'Visited:CLASS' },
      { name: 'Checked:CLASS' },
      { name: 'First-child:CLASS' },
      { name: 'Last-child:CLASS' },
      { name: 'Odd-child:CLASS' },
      { name: 'Even-child:CLASS' },
    ]
  }, {
    title: 'Text Overflow',
    permalink: 'text-overflow',
    values: [
      { name: 'truncate' },
      { name: 'overflow-ellipsis' },
      { name: 'overflow-clip' },
    ]
  }, {
    title: 'Transform',
    permalink: 'transform',
    values: [
      { name: 'transform' },
      { name: 'transform-none' },
      { name: 'transform-gpu' },
    ]
  }, {
    title: 'responsive-design',
    permalink: 'responsive-design',
    values: [
      { name: 'transform' },
      { name: 'transform-none' },
      { name: 'transform-gpu' },
    ]
  }, {
    title: 'ring-color',
    permalink: 'ring-color',
    values: [
      { name: 'ring-[transparent|current|black|white]' },
      { name: 'ring-gray-[100|200|300|400|500|600|700|800|900]' },
      { name: 'ring-red-[100|200|300|400|500|600|700|800|900]' },
      { name: 'ring-orange-[100|200|300|400|500|600|700|800|900]' },
      { name: 'ring-yellow-[100|200|300|400|500|600|700|800|900]' },
      { name: 'ring-green-[100|200|300|400|500|600|700|800|900]' },
      { name: 'ring-teal-[100|200|300|400|500|600|700|800|900]' },
      { name: 'ring-blue-[100|200|300|400|500|600|700|800|900]' },
      { name: 'ring-indigo-[100|200|300|400|500|600|700|800|900]' },
      { name: 'ring-purple-[100|200|300|400|500|600|700|800|900]' },
      { name: 'ring-pink-[100|200|300|400|500|600|700|800|900]' },
    ]
  }, {
    title: 'ring-offset-color',
    permalink: 'ring-offset-color',
    values: [
      { name: 'ring-offset-[transparent|current|black|white]' },
      { name: 'ring-offset-gray-[100|200|300|400|500|600|700|800|900]' },
      { name: 'ring-offset-red-[100|200|300|400|500|600|700|800|900]' },
      { name: 'ring-offset-orange-[100|200|300|400|500|600|700|800|900]' },
      { name: 'ring-offset-yellow-[100|200|300|400|500|600|700|800|900]' },
      { name: 'ring-offset-green-[100|200|300|400|500|600|700|800|900]' },
      { name: 'ring-offset-teal-[100|200|300|400|500|600|700|800|900]' },
      { name: 'ring-offset-blue-[100|200|300|400|500|600|700|800|900]' },
      { name: 'ring-offset-indigo-[100|200|300|400|500|600|700|800|900]' },
      { name: 'ring-offset-purple-[100|200|300|400|500|600|700|800|900]' },
      { name: 'ring-offset-pink-[100|200|300|400|500|600|700|800|900]' },
    ]
  }, {
    title: 'ring-offset-width',
    permalink: 'ring-offset-width',
    values: [
      { name: 'ring-offset-0' },
      { name: 'ring-offset-1' },
      { name: 'ring-offset-2' },
      { name: 'ring-offset-4' },
      { name: 'ring-offset-8' },
    ]
  }, {
    title: 'ring-opacity',
    permalink: 'ring-opacity',
    values: [
      { name: 'ring-opacity-0' },
      { name: 'ring-opacity-5' },
      { name: 'ring-opacity-10' },
      { name: 'ring-opacity-20' },
      { name: 'ring-opacity-25' },
      { name: 'ring-opacity-30' },
      { name: 'ring-opacity-40' },
      { name: 'ring-opacity-50' },
      { name: 'ring-opacity-60' },
      { name: 'ring-opacity-70' },
      { name: 'ring-opacity-75' },
      { name: 'ring-opacity-80' },
      { name: 'ring-opacity-90' },
      { name: 'ring-opacity-95' },
      { name: 'ring-opacity-100' },
    ]
  }, {
    title: 'ring-width',
    permalink: 'ring-width',
    values: [
      { name: 'ring-inset' },
      { name: 'ring-0' },
      { name: 'ring-2' },
      { name: 'ring' },
      { name: 'ring-4' },
    ]
  }
]