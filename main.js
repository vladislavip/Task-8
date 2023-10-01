let form = document.querySelector('#myForm')
let userArr = [];
let userListContainer = document.querySelector('#userListContainer')
let userItems=document.getElementsByClassName("user-item")
let userUpdate= document.getElementById()
/*------------------------------------------------------*/


form.addEventListener("submit", addUser)


/*------------------------------------------------------*/
function addUser(e) {
    e.preventDefault();

    let nameInput = e.target.elements["nameInput"]
    let ageInput = e.target.elements["ageInput"]
    let detailsInput = e.target["detailsInput"]


    let userObj = {
        nameInput: nameInput.value,
        ageInput: ageInput.value,
        detailsInput: detailsInput.value
    }

    userArr.push(userObj)

    Clear ([nameInput,ageInput,detailsInput])

    List()


    console.log(nameInput, ageInput, detailsInput)

}

/*------------------------------------------------------*/
function Clear(inputArr) {
    inputArr.forEach(input => {
        input.value = ""
    });
}

function List() {
    userListContainer.innerHTML=''
    userArr.forEach((user,index) => {
        userListContainer.innerHTML +=
        `
        <tr data-id=${index} class="user-item">
            <th scope="row">${index + 1}</th>
            <td>${user.nameInput}</td>
            <td>${user.ageInput}</td>
            <td>${user.detailsInput}</td>
        </tr>`
    })

    for (const userTr of userItems ){

        userTr.addEventListener('click',function(e){
            console.log(e.target)
        })
    }

}



/*------------------------------------------------------*/