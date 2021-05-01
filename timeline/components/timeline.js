Vue.component('timeline', {

    template: //html
        `
    <div id="visualization">
    <div class="menu">
     
        <input style="display:none;" id="sliderZoom" type="range" class="range" name="a" min="-1" max="1" step="0.1"
            value="0" />
        <i class="material-icons dp48 buttons-menu" id="fit">home</i>
        <i class="material-icons dp48 buttons-menu" id="moveLeft">arrow_back</i>
        <i class="material-icons dp48 buttons-menu" id="moveRight">arrow_forward</i>
  
    </div>
    </div>
    `,

})