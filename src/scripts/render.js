import { getGithubUser, getGitUserRepository } from "./request.js";


export async function renderUser(array = []) {

    const mainContainer = document.querySelector('.main__container')
    
    mainContainer.innerHTML = ''
    
    const githubUser = JSON.parse(localStorage.getItem('foundUser'))
   
    const headerContent = createCardHeader(githubUser)
    
    mainContainer.appendChild(headerContent)
    
}

function createCardHeader(element) {

    // criando o header

    const headerContent = document.createElement('header')
    headerContent.classList.add('header__content')
    const userContent = document.createElement('div')
    userContent.classList.add('user__content')
    const userImg = document.createElement('img')
    userImg.src = element.avatar_url
    userImg.classList.add('user__img')
    const userName = document.createElement('h2')
    userName.classList.add('user__name')
    userName.innerText = element.name
    const btnContainer = document.createElement('div')
    btnContainer.classList.add('btn__container')
    const changeUserBtn = document.createElement('button')
    changeUserBtn.classList.add('changeUser__btn')
    changeUserBtn.innerText = 'Trocar de usuário'
    userContent.append(userImg, userName)
    btnContainer.appendChild(changeUserBtn)
    headerContent.append(userContent, btnContainer)
    
    return headerContent
    
}

export async function renderRepository(array = []) {

    const mainContainer = document.querySelector('.main__container')
    
    const projectsCards = document.createElement('section')
    projectsCards.classList.add('projects__cards')
    
    

    array.forEach(element => {
    
        const cardRepository = createCardRepository(element)

        projectsCards.appendChild(cardRepository)        

    })

    mainContainer.appendChild(projectsCards)

}

function createCardRepository(element) {
    
    // criando a section
    
    const projectCard = document.createElement('div')
    projectCard.classList.add('project__card')
    
    const projectTitle = document.createElement('h2')
    projectTitle.classList.add('project__title')
    projectTitle.innerText = element.name

    const projectParagraph = document.createElement('p')
    projectParagraph.classList.add('project__paragraph')
    projectParagraph.innerText = element.description
    const projectBtn = document.createElement('a')
    projectBtn.classList.add('repository__btn')
    projectBtn.innerText = 'Repositório'
    projectBtn.target = '_blank'
    projectBtn.href = element.owner.html_url

    projectCard.append(projectTitle, projectParagraph, projectBtn)

    return projectCard
}
