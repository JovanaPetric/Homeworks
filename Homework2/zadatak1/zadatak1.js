
const arrayOfProduct = [];
    function addProduct(event) {

    event.preventDefault();

    const formData =  document.querySelector("form").elements;

    const nameProduct = formData[0].value;
    const priceProduct = formData[3].value;

    const fileInputSrc = document.getElementById('image').src;
    const listItem = document.getElementsByClassName('list-products')[0];


   const lengthOfProductArray = arrayOfProduct.length;
   const index = lengthOfProductArray === 0 ? 0 : lengthOfProductArray -1;

        arrayOfProduct.push({
            name: nameProduct,
            price: priceProduct,
            img: fileInputSrc,
            details: formData[4].value,
            index:  index
        });
        listItem.innerHTML += '<div class="product">\n' +
                            '<img src="'+ fileInputSrc +'" />\n' +
                            '<p>'+ nameProduct +'</p>\n' +
                            '<p>'+ priceProduct +'</p>\n' +
                            '<button class="details-button">Details</button>\n' +
                            '<button class="buy-button" onclick="buyProduct()">Buy</button>\n' +
                            '</div>';

        document.querySelector("form").reset();
    }

    function uploadFIle() {

        var preview = document.getElementById('image'); //selects the id named image
        var file    = document.querySelector('input[type=file]').files[0]; //sames as here
        var reader  = new FileReader();

        reader.onloadend = function () {
            preview.src = reader.result;
        };

        if (file) {
            reader.readAsDataURL(file); //reads the data as a URL

        } else {
            preview.src = "";
        }
    }

    // function openDetails(event) {
    //     const listButtonsDetails = document.getElementsByClassName('details-button');
    //     const arrayOfButtons= Array.from(listButtonsDetails);
    //     const listOfProduct = document.getElementsByClassName('product');
    //     const arrayOfProducts = Array.from(listOfProduct);
    //
    //     var indexOfSelectedDetails = arrayOfButtons.indexOf(event.target);
    //
    //     const modalElement = arrayOfProducts[indexOfSelectedDetails];
    //     console.log(modalElement);
    //     const modal =  document.getElementsByClassName('modal-content')[0];
    //     const modalCLass =  document.getElementsByClassName('modal-class')[0];
    //     modalCLass.style.display = "block";
    //
    //     modal.innerHTML = modalElement.innerHTML;
    //     modalElement.style.display = "none"
    //    
    // }
    
    function buyProduct() {

    }

