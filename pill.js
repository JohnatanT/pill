$("#showPaletteOnly").spectrum({
    showPaletteOnly: true,
    showPalette:true,
    color: 'blanchedalmond',
    palette: [
        ['black', 'white', 'blanchedalmond',
        'rgb(255, 128, 0);', 'hsv 100 70 50'],
        ['red', 'yellow', 'green', 'blue', 'violet']
    ],
    change: function(color) {
        console.log(color.toHexString(color));
        document.querySelector('#bloco1').style.background =color.toHexString(color); 
    }
    });