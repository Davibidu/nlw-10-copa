function createGame(player1, hour, player2) {
    return `
            <li>
                <img src="./assets/${player1}.svg" alt="Bandeira do ${player1}">
                <strong>${hour}</strong>
                <img src="./assets/${player2}.svg" alt="Bandeira da ${player2}">
            </li>  
    `
}

let delay = -0.3;
function createCard(date, day, games) {
    delay = delay + 0.3;
    return `
    <div class="card" style="animation-delay: ${delay}s">
         <h2>${date} <span>${day}</span></h2>
         <ul>  
           ${games} 
        </ul>    
    </div>
    `
}


document.querySelector('#cards').innerHTML =  
    createCard("24/11", 'quinta', 
     createGame("uruguai", '09:00', 'coreia-do-sul') +
     createGame('portugal', '12:00', 'gana') + 
     createGame('brasil', '15:00', 'servia')
    )  
      +
    createCard("28/11", 'segunda',
     createGame("coreia-do-sul", '09:00', 'gana') + 
     createGame('brasil', '12:00', 'suiça') + 
     createGame('portugal', '15:00', 'uruguai')
    ) 
      +
    createCard("02/12", 'quinta',
     createGame("gana", '09:00', "uruguai") + 
     createGame('servia', '12:00', 'suiça') + 
     createGame('camarões', '15:00', 'brasil')
    ) 














