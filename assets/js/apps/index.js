window.onload = () => {


    // 
    // Create
    // 
    const create = tag => document.createElement(tag)

    const createWithClass = (tag, cls) => {
        let elem = create(tag)
        if (cls instanceof Array) cls.forEach(c => elem.classList.add(c))
        else elem.classList.add(cls)
        return elem
    }

    const createWithClassAndValue = (tag, cls, val) => {
        let elem = createWithClass(tag, cls)
        elem.innerHTML = val
        return elem
    }


    // 
    // Select
    // 
    const select = selector => document.querySelector(selector)

    const selectAll = selector => document.querySelectorAll(selector)


    //
    //  Tab Layout
    // 
    const tabs = selectAll('.tab-layout .tab')

    const SELECTED_CLASS_NAME = 'selected'
    const HIDE = 'hide'

    const hideAllApps = () => selectAll(`.app`).forEach(it => it.classList.add(HIDE))
    const showAllApps = () => selectAll(`.app`).forEach(it => it.classList.remove(HIDE))
    const showAppsOfCat = cat => selectAll(`.app.${cat}`).forEach(it => it.classList.remove(HIDE))


    var selectAppsOfCat = tab => {
        tabs.forEach(tab => tab.classList.remove(SELECTED_CLASS_NAME))
        tab.classList.add(SELECTED_CLASS_NAME)

        if (tab.id != 'all') {
            hideAllApps()
            showAppsOfCat(tab.id)

        } else showAllApps()
    }


    tabs.forEach(tab => tab.addEventListener('click', () => selectAppsOfCat(tab)))


    // 
    // Read attribute value
    // 
    const attrOf = (el, name) => (val = el.getAttribute(name)) == null ? '' : val


    // 
    // Build apps
    // 
    const buildAppTag = tag => {
        let a = createWithClassAndValue('a', 'app__info__tags__a', tag)
        a.href = `?tag=${tag}`
        return a
    }

    const buildApp = app => {
        let appSec = createWithClass('section', ['app', 'wider', app.cat])
        let figure = createWithClass('figure', 'app__preview')
        let img = createWithClass('img', 'app__preview__img')
        let infoSec = createWithClass('section', 'app__info')
        let h2 = createWithClassAndValue('h2', 'app__info__title', app.name)
        let p = createWithClassAndValue('p', 'app__info__desc', app.desc)
        let article = createWithClass('article', 'app__info__tags')
        let navSec = createWithClass('section', 'app__nav')
        let p1 = createWithClass('span', ['fab', 'fa-lg', 'fa-github'])
        let p2 = createWithClass('span', ['fa', 'fa-lg', 'fa-globe'])

        appSec.appendChild(infoSec)
        appSec.appendChild(navSec)
        appSec.appendChild(figure)

        figure.appendChild(img)

        infoSec.appendChild(h2)
        infoSec.appendChild(p)
        infoSec.appendChild(article)

        navSec.appendChild(p1)
        navSec.appendChild(p2)

        img.alt = "Preview"
        img.src = app.imgSrc == '' ? `../assets/images/apps/photo-coming-soon.jpg` : app.imgSrc

        app.tags.forEach(tag => article.appendChild(buildAppTag(tag.toLowerCase())))

        return appSec
    }

    selectAll('div.app-holder').forEach(div => {
        let app = {
            imgSrc: attrOf(div, 'src'),
            cat: attrOf(div, 'cat'),
            name: attrOf(div, 'name'),
            desc: attrOf(div, 'desc'),
            tags: attrOf(div, 'tags').split(', ')
        }

        div.parentNode.replaceChild(buildApp(app), div)
    })




}