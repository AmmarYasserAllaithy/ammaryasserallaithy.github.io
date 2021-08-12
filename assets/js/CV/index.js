window.onload = () => {

    const Type = { Android: 0, Full: 1 }
    const SELECTED_CLASS = 'selected'

    const TABS = document.querySelectorAll('.tab')
    const PAGES = document.querySelectorAll('.page')
    const DOWNLOAD_DIV = document.querySelector('.download-cv-div')

    const toggleSelection = (el, add) => el.classList.toggle(SELECTED_CLASS, add)

    const unselect = id => {
        toggleSelection(TABS[id], false)
        toggleSelection(PAGES[id], false)
    }

    const select = id => {
        unselect(id == 0 ? 1 : 0)

        toggleSelection(TABS[id], true)
        toggleSelection(PAGES[id], true)

        DOWNLOAD_DIV.style.display = id == 1 ? 'none' : 'block';
    }

    const view = type => select(type == Type.Android ? 0 : 1)


    TABS[0].addEventListener('click', () => view(Type.Android))
    TABS[1].addEventListener('click', () => view(Type.Full))


    // TABS[1].click()


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
                        <a class="name label" target="_blank" href="${href = valOfAttr(div, 'href')}">
                            ${valOfAttr(div, 'title')}
                        </a>
                        <label class="ic">
                            <a target="_blank" href="${href = valOfAttr(div, 'href')}"><i class="${faIcon(href)}"></i></a>
                        </label>
                    </p>

                    <p class="desc">${valOfAttr(div, 'desc')}</p>
                </div>
            </div>
        `
    })

    document.querySelectorAll("div.scholarship-holder").forEach(div => {
        notes = valOfAttr(div, 'notes')
        if (notes != '') notes = `<p> ${notes} </p>`

        div.innerHTML = `
            <div class="scholarship">
                <p class="label"> ${valOfAttr(div, 'title')} </p>
                <p> ${valOfAttr(div, 'org')} </p>
                <p class="company"> ${valOfAttr(div, 'date')} </p>
                ${valOfAttr(div, 'notes')}
            </div>
        `
    })

    document.querySelector('.download-cv-div a').setAttribute('download', document.querySelector('title').textContent)

}