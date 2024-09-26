qsa('card').forEach(card =>
  card.parentNode.replaceChild(
    creator({
      tag: 'div',
      cls: 'number-card',
      style: {
        background: `#${card.getAttribute('bg')}`
      },
      // attrs: {
      //   number: card.getAttribute('number').replace('+', '')
      // },
      childs: [
        creator({
          tag: 'h2',
          cls: 'default card-title',
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