<script>
    var MainImg = document.getElementById("Producerpic");
    var smalling = document.getELementByClassName("img-fluid product-image");

    smalling[0].onclick = function(){
        MainImg.src = smallimg[0].src
    }
    smalling[1].onclick = function(){
        MainImg.src = smallimg[1].src
    }
    smalling[2].onclick = function(){
        MainImg.src = smallimg[0].src
    }
    smalling[3].onclick = function(){
        MainImg.src = smallimg[3].src
    }

</script>