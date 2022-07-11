// ELEMENT CATCHING
const galleryPreview = document.querySelector(`#venue section .galleryPreview`);
const venueGalleries = document.querySelectorAll(`#venue section .galleries .gallery`);
const submitButton = document.querySelector(`.btn`);
const dropBtn = document.querySelector(`.dropBtn`);
const dropDownNav =document.querySelector(`.dropDownNav`);

// REUSABLE DATAS & FUNCTIONS
let baseUrl = `url(assets/img/restaurant/restaurant1.jpg)`;

const urlGenerator = function(i){
    const newUrl=[];
    for(let j = 0; j < baseUrl.length; j++){
        newUrl.push(baseUrl.charAt(j));
    }
    newUrl.splice(36, 1, (i+1));
    return newUrl.join(``);
}

const clearFormValue = function(param1, param2, param3){
    param1.value=``;
    param2.value=``;
    param3.value = ``;
}
const phoneChecker = function(param){
    let tempArr = [];
    let result;
    const numberArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for(let i = 0; i < param.length; i++){
        for(let j = 0; j < numberArr.length; j++){
            if(param[i] == numberArr[j]){
                tempArr.push(parseInt(param[i]));
            }
        }
    }
    if(tempArr.length === param.length){
        return result = `valid`;
    }else{
        return result = `not valid`;
    }
}

// ELEMENT STYLING WITH JS
// Venue Gallery Background Image
for(let i = 0; i < venueGalleries.length; i++){
    venueGalleries[i].style.backgroundImage = urlGenerator(i);
}

// DOM MANIPULATION
// Interactive Venue Galleries
for(let i = 0; i < venueGalleries.length; i++){
    venueGalleries[i].addEventListener(`click`, function(){
        for(let j = 0; j < venueGalleries.length; j++){
            if(venueGalleries[j].classList.contains(`selected`)){
                venueGalleries[j].classList.toggle(`selected`);
            };
        };
        galleryPreview.style.backgroundImage = urlGenerator(i);
        galleryPreview.classList.toggle(`fadeInEffect`);
        setTimeout(function(){
            galleryPreview.classList.toggle(`fadeInEffect`);

        }, 500);
        venueGalleries[i].classList.toggle(`selected`);
    });
};

// Dropdown Menu Button
dropBtn.addEventListener(`click`, function(){
    if(dropBtn.classList.contains(`clicked`)){
        dropBtn.classList.toggle(`clicked`);
        dropDownNav.style.display = `none`;
        dropBtn.firstElementChild.setAttribute(`fill`, `white`);
    }else{
        dropBtn.classList.toggle(`clicked`);
        dropDownNav.style.display = `block`;
        dropBtn.firstElementChild.setAttribute(`fill`, `black`);
    }
})

// Form Submit Button
submitButton.addEventListener(`click`, function(){
    const [inputName, inputPhone] = document.querySelectorAll(`#reservation section form input`);
    const inputMessage = document.querySelector(`#reservation section form textarea`);

    if(inputName.value===``||inputPhone.value===``||message.value===``){
        alert(`Please complete the reservation data for the next step`);
        clearFormValue(inputName, inputPhone, inputMessage);
    }else{
        if(inputName.value.length === 1){
            alert(`The name cannot be only one character`);
        }else{
            if(inputPhone.value.length >= 11 && inputPhone.value.length <= 12){
                if(phoneChecker(inputPhone.value)===`valid`){
                    alert(`The reservation request was successfully sent. Please wait for confirmation from us via WhatsApp.`);
                    clearFormValue(inputName, inputPhone, inputMessage);
                }else{
                    alert(`Make sure the mobile number is correct so we can contact you for further information`);
                }
            }else{
                alert(`Make sure the mobile number is correct and we can contact you for further information`);
            }
        }
    }
})