qsa('div.number-card').forEach(card =>
  card.parentNode.replaceChild(
    creator({
      tag: 'div',
      childs: [
        creator({
          tag: 'h1',
          text: card.getAttribute('number')
        }),
        creator({
          tag: 'p',
          text: card.getAttribute('label')
        })
      ]
    }),
    card
  )
)