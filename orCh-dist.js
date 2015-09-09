/* Orientation Checker
 * - This allows the firing of a fucntion or any code on orientation change
 ** - This based on a resize check of screen dimenstions
*/

var checkOrientationChanage = (function() {
    // private variables
    var body = document.body,
        html = document.documentElement;
        height = 1,
        width = 1;

    window.addEventListener('resize', function() {
      _private.setHW();
      var resizeCheck = (width > height) ? true : false;
      if(cOC != resizeCheck) {
        if( resizeCheck == true ) { // landscape changes go here
          _changed.landscape();
        } else { // portrait changes go here
          _changed.portrait();
        }
        cOC = resizeCheck;
      }
    });

    // private subroutines
    var _private = {
      setHW: function() {
        height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight ),
        width = Math.max( body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth );
      }
    }

    // Changes when orientation has changed
    var _changed = {
      landscape: function() { // put lanscape change function or code here (Use Height and Width for screen pref)
        console.log("Landscape"); 
        if(height< 740) {  // Example mobile check after orientation change
            console.log("Changed on Mobile");
        }
      },
      portrait: function() { // put portrait change function or code here  (Use Height and Width for screen pref)
        console.log("Portrait");
      }
    };

    // sub routines from load
    _private.setHW();
    var cOC = (width > height) ? true : false; // true: landscape - false: portrait
    
    // public subroutines
    var _public = {
      getCurOrien: function() {
        if(cOC == true) {
          return 'landscape';
        } else {
          return 'portrait';
        }
      }
      
    return _public;
})();
