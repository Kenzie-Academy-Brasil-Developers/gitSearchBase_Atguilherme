import { getGithubUser, getGitUserRepository  } from "../scripts/request.js"
import { renderUser, renderRepository } from "./render.js"

export function searchGithubUser() {
  const input = document.querySelector('.search__input')
  const btnSearch = document.querySelector('.search__btn')

  btnSearch.addEventListener('click', async () => {

    const user = await getGithubUser(input.value)
    
    renderUser(user)
    
  })
  
}

export function searchGitUserRepository(){

    const input = document.querySelector('.search__input')
    const btnSearch = document.querySelector('.search__btn')
  
    btnSearch.addEventListener('click', async () => {
    
  
      const userRepository = await getGitUserRepository(input.value)
      
      renderRepository(userRepository)
    
    })
  
}

