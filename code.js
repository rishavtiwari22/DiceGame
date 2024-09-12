// fetch('https://api.github.com/repos/rishavtiwari22/DrumKit')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         document.getElementById('fork').src = data.homepage;

//     });

function sound(url){
    let valume = new Audio(url);
    valume.play();
}


let count1 = 0;
let count2 = 0;

const button = document.getElementsByTagName('button')

console.log(button[0])

button[0].addEventListener('click', (e) => {

    let url = document.getElementById('sound').getAttribute('src');
    sound(url)

    let value1 = Math.floor(Math.random()*(7-1)+1);
    let value2 = Math.floor(Math.random()*(7-1)+1);

    document.getElementById('fork1').setAttribute('src', `images/dice${value1} (1).png`);
    document.getElementById('fork2').setAttribute('src', `images/dice${value2} (1).png`)
    let heading = document.getElementsByTagName('h1');

    if (value1 === value2){
        alert('Match Draw!')
    }else if (value1 > value2){
        count1 += 1;
        heading[0].innerText = `Score  ${count1}`
    }else{
        count2 += 1;
        heading[1].innerText = `Score  ${count2}`
    }
})


console.log(button[1])

button[1].addEventListener('click', (e) => {
    let url = document.getElementById('sound').getAttribute('src');
    sound(url)
    
    if (count1 > count2){
        alert('Player 1 winner :)')
    }else{
        alert('Player 2 winner :)')
    }
    location.reload()
})



