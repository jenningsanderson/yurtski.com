
  var wrapper = document.getElementById("signature-pad");
  var canvas = wrapper.querySelector("canvas");
  var signaturePad = new SignaturePad(canvas, {
    backgroundColor: 'rgb(255, 255, 255)'
  });

  function resizeCanvas() {
    // When zoomed out to less than 100%, for some very strange reason,
    // some browsers report devicePixelRatio as less than 1
    // and only part of the canvas is cleared then.
    var ratio =  Math.max(window.devicePixelRatio || 1, 1);

    // This part causes the canvas to be cleared
    canvas.width = canvas.offsetWidth * ratio;
    canvas.height = canvas.offsetHeight * ratio;
    canvas.getContext("2d").scale(ratio, ratio);

    // This library does not listen for canvas changes, so after the canvas is automatically
    // cleared by the browser, SignaturePad#isEmpty might still return false, even though the
    // canvas looks empty, because the internal data of this library wasn't cleared. To make sure
    // that the state of this library is consistent with visual state of the canvas, you
    // have to clear it manually.
    signaturePad.clear();
  }

  // On mobile devices it might make more sense to listen to orientation change,
  // rather than window resize events.
  window.onresize = resizeCanvas;
  resizeCanvas();

  document.getElementById('clear').addEventListener('click', function () {
    signaturePad.clear();
  });

  function completeWaiver(){

    if (signaturePad.isEmpty()){
      alert("Please sign your name")
      return false
    }

    //Capture the signature
    document.getElementById('signature').value = signaturePad.toDataURL();

  }
