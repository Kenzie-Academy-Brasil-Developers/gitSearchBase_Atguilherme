//const userName = 'nekelpatrick'

export async function getGithubUser(userName){
    //const userLogin = userName
    const githubUser = await fetch(`https://api.github.com/users/${userName}
    `, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }

    })

    .then(response => response.json())
    
    .then(res => {
    
        if(res.message != 'Not Found'){
            localStorage.setItem('foundUser', JSON.stringify(res))
            
            window.location.replace('/src/pages/profile.html')

        } else {
            
            window.location.replace('/src/pages/error.html')

        }
    })
    
    return githubUser
    
}

export async function getGitUserRepository(user_Name){
    
    const gitUserRepository = await fetch(`https://api.github.com/users/${user_Name}/repos`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }

    })
    .then(response => response.json())
    
    .then(resp => {
        
        localStorage.setItem('UserRepository', JSON.stringify(resp))
        if(resp.message == 'Not Found'){
            alert('Repositório não encontrado')
        }

    })
    
    return gitUserRepository
    
}
