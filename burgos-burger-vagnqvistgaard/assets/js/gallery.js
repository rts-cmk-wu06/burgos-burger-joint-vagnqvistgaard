/*------------ js for burgos burger-joint, galleri ---------------*/


let largeImage = document.querySelector('#large-image');

let containsImg = document.querySelector('#thumbs');

containsImg.addEventListener('click', setGalleryImage);

function setGalleryImage(event){
    if (event.target.nodeName == 'IMG'){ //validerer at der ikke klikkes udenf. img
        let imageSrc = event.target.attributes.src.nodeValue;
        largeImage.setAttribute('src', imageSrc);
    }
}


/* Valideringsmuligheder: 
    if event.target.className == 'thumbnail';
    if event.target.nodeName == 'IMG';
*/

