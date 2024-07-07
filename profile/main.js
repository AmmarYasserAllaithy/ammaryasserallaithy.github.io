qsa('div.number-card').forEach(card =>
  card.parentNode.replaceChild(
    creator({
      tag: 'div',
      childs: [
        creator({
          tag: 'h1',
          cls: 'card-title',
          text: card.getAttribute('number')
        }),
        creator({
          tag: 'p',
          cls: 'card-label',
          text: card.getAttribute('label')
        })
      ]
    }),
    card
  )
)