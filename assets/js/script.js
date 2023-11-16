
  $(document).ready(function(){

    //Funciones armadoras de contenido

    //Catalogo Cafe
    function armarProductosDestacados(){
        let $catalogo = $('#catalogoCafe');

        for(let i=0;i<productosDestacado.length;i++){
            let $producto = productosDestacado[i];
            let $productoHtml = '<div class="col-lg-4 col-md-6 col-sm-6">'+
            '<div class="sc-product-item productoItem">'+
            '<img data-name="product_image" class="producto_img" src="assets/img/menu/'+ $producto.Imagen+'" alt="...">'+
            '<h4 data-name="product_name" class="product_name">'+ $producto.Nombre +'</h4>'+
            '<p data-name="product_desc">'+ $producto.Descripcion +'</p>'+
            '<input name="product_price" value="'+ $producto.Precio +'" type="hidden" />'+
            '<input name="product_id" value="'+ $producto.ID +'" type="hidden" />'+
            '<p class="product_precio">$'+ $producto.Precio +'</p>'+
            '<button class="sc-add-to-cart btn btn-carrito">Añadir al carrito</button>'+
            '</div>'+
            '</div>';

            $catalogo.append($productoHtml);
        }
    }
    armarProductosDestacados();

    //Catalogo Bazar
    function armarProductosBazar(){
      let $catalogo = $('#catalogoBazar');

      for(let i=0;i<productosBazar.length;i++){
          let $producto = productosBazar[i];
          let $productoHtml = '<div class="col-lg-4 col-md-6 col-sm-6">'+
          '<div class="sc-product-item productoItem">'+
          '<img data-name="product_image" class="producto_img" src="assets/img/menu/'+ $producto.Imagen+'" alt="...">'+
          '<h4 data-name="product_name" class="product_name">'+ $producto.Nombre +'</h4>'+
          '<p data-name="product_desc">'+ $producto.Descripcion +'</p>'+
          '<input name="product_price" value="'+ $producto.Precio +'" type="hidden" />'+
          '<input name="product_id" value="'+ $producto.ID +'" type="hidden" />'+
          '<p class="product_precio">$'+ $producto.Precio +'</p>'+
          '<button class="sc-add-to-cart btn btn-carrito">Añadir al carrito</button>'+
          '</div>'+
          '</div>';

          $catalogo.append($productoHtml);
      }
  }
  armarProductosBazar();

  //Catalogo Pasteleria
  function armarProductosPasteleria(){
    let $catalogo = $('#catalogoPasteleria');

    for(let i=0;i<productosPasteleria.length;i++){
        let $producto = productosPasteleria[i];
        let $productoHtml = '<div class="col-lg-4 col-md-6 col-sm-6">'+
        '<div class="sc-product-item productoItem">'+
        '<img data-name="product_image" class="producto_img" src="assets/img/menu/'+ $producto.Imagen+'" alt="...">'+
        '<h4 data-name="product_name" class="product_name">'+ $producto.Nombre +'</h4>'+
        '<p data-name="product_desc">'+ $producto.Descripcion +'</p>'+
        '<input name="product_price" value="'+ $producto.Precio +'" type="hidden" />'+
        '<input name="product_id" value="'+ $producto.ID +'" type="hidden" />'+
        '<p class="product_precio">$'+ $producto.Precio +'</p>'+
        '<button class="sc-add-to-cart btn btn-carrito">Añadir al carrito</button>'+
        '</div>'+
        '</div>';

        $catalogo.append($productoHtml);
    }
  }
  armarProductosPasteleria();

  //Catalogo Cafeteras
  function armarProductosCafeteras(){
    let $catalogo = $('#catalogoCafeteras');

    for(let i=0;i<productosCafeteras.length;i++){
        let $producto = productosCafeteras[i];
        let $productoHtml = '<div class="col-lg-4 col-md-6 col-sm-6">'+
        '<div class="sc-product-item productoItem">'+
        '<img data-name="product_image" class="producto_img" src="assets/img/menu/'+ $producto.Imagen+'" alt="...">'+
        '<h4 data-name="product_name" class="product_name">'+ $producto.Nombre +'</h4>'+
        '<p data-name="product_desc">'+ $producto.Descripcion +'</p>'+
        '<input name="product_price" value="'+ $producto.Precio +'" type="hidden" />'+
        '<input name="product_id" value="'+ $producto.ID +'" type="hidden" />'+
        '<p class="product_precio">$'+ $producto.Precio +'</p>'+
        '<button class="sc-add-to-cart btn btn-carrito">Añadir al carrito</button>'+
        '</div>'+
        '</div>';

        $catalogo.append($productoHtml);
    }
  }
 armarProductosCafeteras();

    // Al hacer click en el carrito se cambia de color

    $(".btn-carrito").on("click", function() {
      $("#icono_carrito").addClass("carrito_menu")
    });

    //Checkout del carrito
      $('#carrito').smartCart();
      $("#carrito").on("cartSubmitted", function () {
        window.location.href = "checkout.html";
    });
});











