

    function changeColor(elemtIdPicker, blockId) {

        $(elemtIdPicker).spectrum({
            showPaletteOnly: true,
            showPalette:true,
            color: 'blanchedalmond',
            palette: [
                [
                 'hsv 197  100 94','hsv 204 100 73','hsv 274 70 56','hsv 301 75 57','hsv 358 88 93','hsv 20 87 94',
                 'hsv 32 89 97','hsv 45 95 99','hsv 56 100 100','hsv 86 70 77','hsv 150 99 65','hsv 175 100 66'
                ]
            ],
            
            change: function(color) {
                let cor1 = color.toHsl(color);
                console.log(cor1.h);
                document.querySelector(blockId).style.background = color.toHslString(color);
            }
            });
    }

    changeColor("#showPaletteOnly", '#bloco1');

    changeColor("#showPaletteOnly2", '#bloco2 ');

    function validadePrimaryColor()
    {
        
    }

