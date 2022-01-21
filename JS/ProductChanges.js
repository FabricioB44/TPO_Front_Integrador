function sSizeFunc(event){
    document.getElementById('product-brand').innerText = "Smol Boots"
    document.getElementById('product-price').innerText = "$100"
    document.getElementById('product-actual-price').innerText = "$200"
    document.getElementById('product-discount').innerText = "( 50% off )"
  }

  $(document).on('click', '#s-size', sSizeFunc);


function mSizeFunc(event){
    document.getElementById('product-brand').innerText = "Normal Boots"
    document.getElementById('product-price').innerText = "$200"
    document.getElementById('product-actual-price').innerText = "$400"
    document.getElementById('product-discount').innerText = "( 50% off )"
  }

  $(document).on('click', '#m-size', mSizeFunc);

function lSizeFunc(event){
    document.getElementById('product-brand').innerText = "Big Boots"
    document.getElementById('product-price').innerText = "$300"
    document.getElementById('product-actual-price').innerText = "$600"
    document.getElementById('product-discount').innerText = "( 50% off )"
  }

  $(document).on('click', '#l-size', lSizeFunc);

function xlSizeFunc(event){
    document.getElementById('product-brand').innerText = "Bigger Boots"
    document.getElementById('product-price').innerText = "$400"
    document.getElementById('product-actual-price').innerText = "$800"
    document.getElementById('product-discount').innerText = "( 50% off )"
  }

  $(document).on('click', '#xl-size', xlSizeFunc);

  function xxlSizeFunc(event){
    document.getElementById('product-brand').innerText = "Biggest Boots"
    document.getElementById('product-price').innerText = "$500"
    document.getElementById('product-actual-price').innerText = "$1000"
    document.getElementById('product-discount').innerText = "( 50% off )"
  }

  $(document).on('click', '#xxl-size', xxlSizeFunc);

