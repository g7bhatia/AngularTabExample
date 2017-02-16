### Tabset properties
  - `vertical` (`?boolean=false`) - if `true` tabs will be placed vertically
  - `justified` (`?boolean=false`) - if `true` tabs fill the container and have a consistent width
  - `type` (`?string='tabs'`) - navigation context class: 'tabs' or 'pills'

### Tab properties
  - `heading` (`string`) - tab header text
  - `active` (`?boolean=false`) - if tab is active equals true, or set `true` to activate tab
  - `disabled` (`?boolean=false`) - if `true` tab can not be activated
  - `removable` (`?boolean=false`) - if `true` tab can be removable, additional button will appear
  - `customClass` (`?string`) - if set, will be added to the tab's class atribute

### Tab events
  - `select` - fired when `tab` became active, `$event:Tab` equals to selected instance of `Tab` component
  - `deselect` - fired when `tab` became inactive, `$event:Tab` equals to deselected instance of `Tab` component
  - `removed` - fired before `tab` will be removed

### Tab heading
Should be used to mark `<template>` element as a template for tab heading
