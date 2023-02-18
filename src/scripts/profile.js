import { renderRepository, renderUser } from "./render.js";

import { getGitUserRepository } from "./request.js";

export function showProfile() {

  const user = JSON.parse(localStorage.getItem('foundUser'))
  const userRepository = JSON.parse(localStorage.getItem('UserRepository'))
  renderUser(user)

  getGitUserRepository(user.login)

  renderRepository(userRepository)

  return

}




function changeUser() {
  const btn = document.querySelector('.changeUser__btn')

  btn.addEventListener('click', () => {
    window.location.replace('/')
  })
}

showProfile()
changeUser()
