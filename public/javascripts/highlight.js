
// Init highlight js
hljs.initHighlightingOnLoad()

// Markdown plugin adds a title attribute on abbr elements
// This code swaps the title attr with a description
// attr to prevent the browser's native "title"
// tooltip from appearing
$(document).ready( () => {
  $('abbr').each( (index, abbr) => {
    // replace 'title' attribute with 'description'
    $(abbr).attr('description', $(abbr).attr('title'))
    $(abbr).removeAttr('title')
  })
})
