# art-portfolio
Live preview: <https://mikeycos.github.io/art-portfolio/>
---
# Ideas
1. Include an "Enlarge" link in modal; link opens image at original size in a new tab.  
2. Include image number in modal; example, "2/45."  
3. Shuffle button; shuffles images out of order.  
4. Character counter within textarea element.  
5. :heavy_check_mark: Navigation font color or opacity different for current page.  
6. :x: Allow tab key only inside the modal while modal is open, and allow tab after modal is closed (focus trap). 
7. ESC key closes modal.  
---
# Bugs
1. :heavy_check_mark: Website loads slow due to uncompressed JPEG images.  
2. :heavy_check_mark: Back and next buttons are not responsive when screen size changes.  
3. :x: Grid items are not centered when there is empty space in columns.  
---
04 MAY 2023: Implemented form labels, honeypot, right/left arrow keys somewhat work, and tab key is disabled when modal is opened (does not reenable after modal is closed).  
01 MAY 2023: Changed opacity of gallery images from 0.5 to 1, change gallery image hover opacity 1 to filter: brightness(25%), all navigational links are shown, navigational link for current page is darker than the other links, and header background opacity decreased.  
29 APR 2023: Changed background pictures for each header, added more pictures in no particular order, and included "Ideas' section to README file.  
28 APR 2023: Added a form in the contact page, formatted the about and contact pages with flex display, applied a variety of CSS properties to form inputs, and included placeholder text for the inputs.  
27 APR 2023: Restructured header tag, set scroll-behavior to smooth, added down arrow to link user to gallery (100vh away from header).  
26 APR 2023: Applied animation to hero text, linked about/home/contact pages, added content to about page, and restructuring stylesheets.  
25 APR 2023: Built modal image gallery from scratch while traversing node list from top-down (ie. decrementing through the indexes).  
21 APR 2023: Animation applied to each navigation item, updated gird column/row sizes, and preparing lightbox implementation. Reordered images in ascending order, experimenting with lightbox-like styles and functionality with JS and CSS properties.   
20 APR 2023: Reordered images, applied a border radius to images, stylized hover effects for the navigation items, and hover effects implemented to images at 768px breakpoint.  
19 APR 2023: Replaced placeholder images with JPEG varying in sizes.  
17 APR 2023: Imported placeholder images, applied flex display for mobile, implemented grid display for gallery section, and set a minimum width for desktop view.  