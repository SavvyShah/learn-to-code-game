function addImages() {
  let imageHtml = ''
  for (let i = 2; i < 10; i++) {
    imageHtml =
      imageHtml +
      `<div id='${i}' class='droppable'><img class='draggable' id='img${i}' src='images/puzzle/${i}.jpg'/></div>`
  }
  return imageHtml
}

$(document).ready(function() {
  const puzzleBox = $('#puzzle-box')

  $(function() {
    $('.draggable').draggable()
    $('.droppable').droppable({
      drop: function(e, ui) {
        const dropTarget = e.target
        const dragEl = ui.draggable[0]
        const dropChild = e.target.children[0]
        const dragParent = ui.draggable[0].parentElement
        if (dragParent == dropTarget) {
          dragParent.removeChild(dragEl)
          dropTarget.appendChild(dragEl)
          dragEl.style.position = ''
          return null
        }
        dropTarget.removeChild(dropChild)
        dragParent.removeChild(dragEl)
        dragParent.appendChild(dropChild)
        dropTarget.appendChild(dragEl)
        dragEl.style.position = ''
      }
    })
  })
  puzzleBox.html(addImages())
})
