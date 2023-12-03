document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.cart__clear').addEventListener('click', e => {
    document.querySelectorAll('.cart__item').forEach((item, index) => {
      item.classList.add('remove')
    })
    setTimeout(() => {
      clearAll()
    }, 100)
  })

  document.querySelectorAll('.gallery_section [data-toggle="lightbox"]')
    .forEach(item => {
      item.addEventListener('click', e => {
        e.preventDefault()
        addToCart()
      })
    })

  function addToCart() {
    const srcs = [
      'https://picsum.photos/id/230/42/42',
      'https://picsum.photos/id/231/42/42',
      'https://picsum.photos/id/43/42/42',
      'https://picsum.photos/id/129/42/42',
      'https://picsum.photos/id/210/42/42',
    ]

    const titles = [
      '2x Luminárias R$ 60,00',
      '3x Espelho R$ 59,90',
      '10x Poltrona R$ 500,00',
      '5x Torneira R$ 970,90',
      '12x Cortina R$ 15,90',
    ]

    const src = srcs[Math.round(Math.random() * (srcs.length - 1))]
    const title = titles[Math.round(Math.random() * (titles.length - 1))]

    const href = '/pagina-do-produto'

    const html = `
      <li>
        <a class="cart__item active" href="${href}">
          <img class="cart__image" src="${src}">
          <div class="cart__title">${title}</div>
        </a>
      </li>
    `
    document.querySelector('.cart__menu ul').insertAdjacentHTML('beforeend', html)
    updateCounter()
  }

  function updateCounter() {
    const total = document.querySelectorAll('.cart__item').length
    document.querySelector('.cart__counter').innerText = total
    document.querySelector('.cart__price .value').innerText = 'R$1.000,99'
  }

  function clearAll() {
    document.querySelectorAll('.cart__item')
      .forEach(item => {
        item.parentNode.remove()
      })
  }

  updateCounter()
})