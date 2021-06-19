window.onload = () => {

    const valOfAttr = (el, name) => (v = el.getAttribute(name)) == null ? '' : v

    document.querySelectorAll("div.container.triangle").forEach(div =>
        div.innerHTML = `
            <h3>
                <span class="title">${div.getAttribute('title')}</span>
                <i class="white-arrow"></i>
            </h3>
            ${div.innerHTML}
        `
    )

    document.querySelectorAll(".skills .row:not(:last-of-type)").forEach(p => {
        let skills = p.textContent
        p.innerHTML = ''
        skills.split("•").forEach(skill => p.innerHTML += `<span class='skill'>${skill}</span>`)
    })

    document.querySelectorAll("div.row:not(app)").forEach(div =>
        div.innerHTML = `
            <p class="key label">${valOfAttr(div, 'label')}</p>
            <div class="value ${div.className.replace('row', '')}">${div.innerHTML}</div>
        `
    )

    document.querySelectorAll("div.app-holder").forEach(div => {
        const faIcon = href => {
            cat = ''
            name = 'globe'

            if (href.includes('github.com')) {
                cat = 'b'
                name = 'github'
            } else if (href.includes('youtu.be')) {
                cat = 'b'
                name = 'youtube'
            }

            return `fa${cat} fa-${name}`
        }

        div.innerHTML = `
            <div class="row app">
                <div class="key">
                    <p class="label">${valOfAttr(div, 'date')}</p>
                    <p class="company">${valOfAttr(div, 'company')}</p>
                </div>

                <div class="value project">
                    <p>
                        <span class="name label">${valOfAttr(div, 'title')}</span>
                        <label class="ic">
                            <a target="_blank" href="${href = valOfAttr(div, 'href')}"><i class="${faIcon(href)}"></i></a>
                        </label>
                    </p>

                    <p class="desc">${valOfAttr(div, 'desc')}</p>
                </div>
            </div>
        `
    })

    document.querySelector('.download-cv-div a').setAttribute('download', document.querySelector('title').textContent)

}