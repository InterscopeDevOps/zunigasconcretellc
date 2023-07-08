import React from 'react'

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

const dbColor = [
    {
        name: 'Pink',
        paleta: [
            {
                nameColor: 'Pink',
                hex: '#FFC0CB',
            },
            {
                nameColor: 'LightPink',
                hex: '#FFB6C1',
            },
            {
                nameColor: 'HotPink',
                hex: '#FF69B4',
            },
            {
                nameColor: 'DeepPink',
                hex: '#FF1493',
            },
            {
                nameColor: 'PaleVioletRed',
                hex: '#DB7093',
            },
            {
                nameColor: 'MediumVioletRed',
                hex: '#C71585',
            },
        ]
    },
    {
        name: 'CYAN COLORS',
        paleta: [
            {
                nameColor: 'Aqua',
                hex: '#00FFFF',
            },
            {
                nameColor: 'Cyan',
                hex: '#00FFFF',
            },
            {
                nameColor: 'LightCyan',
                hex: '#E0FFFF',
            },
            {
                nameColor: 'PaleTurquoise',
                hex: '#AFEEEE',
            },
            {
                nameColor: 'Aquamarine',
                hex: '#7FFFD4',
            },
            {
                nameColor: 'Turquoise',
                hex: '#40E0D0',
            },
            {
                nameColor: 'MediumTurquoise',
                hex: '#48D1CC',
            },
            {
                nameColor: 'DarkTurquoise',
                hex: '#00CED1',
            },
        ]
    },
    {
        name: 'PURPLE COLORS',
        paleta: [
            {
                nameColor: 'Lavender',
                hex: '#E6E6FA',
            },
            {
                nameColor: 'Thistle',
                hex: '#D8BFD8',
            },
            {
                nameColor: 'Plum',
                hex: '#DDA0DD',
            },
            {
                nameColor: 'Orchid',
                hex: '#DA70D6',
            },
            {
                nameColor: 'Violet',
                hex: '#EE82EE',
            },
            {
                nameColor: 'Fuchsia',
                hex: '#FF00FF',
            },
            {
                nameColor: 'MediumOrchid',
                hex: '#BA55D3',
            },
            {
                nameColor: 'DarkOrchid',
                hex: '#9932CC',
            },
            {
                nameColor: 'BlueViolet',
                hex: '#8A2BE2',
            },
            {
                nameColor: 'DarkMagenta',
                hex: '#8B008B',
            },
            {
                nameColor: 'Purple',
                hex: '#800080',
            },
            {
                nameColor: 'MediumPurple',
                hex: '#9370DB',
            },
            {
                nameColor: 'MediumSlateBlue',
                hex: '#7B68EE',
            },
            {
                nameColor: 'SlateBlue',
                hex: '#6A5ACD',
            },
            {
                nameColor: 'DarkSlateBlue',
                hex: '#483D8B',
            },
            {
                nameColor: 'RebeccaPurple',
                hex: '#663399',
            },
            {
                nameColor: 'Indigo',
                hex: '#4B0082',
            },
        ]
    },
    {
        name: 'BLUE COLORS',
        paleta: [
            {
                nameColor: 'Aqua',
                hex: '#00FFFF',
            },
            {
                nameColor: 'LightCyan',
                hex: '#E0FFFF',
            },
            {
                nameColor: 'PaleTurquoise',
                hex: '#AFEEEE',
            },
            {
                nameColor: 'Aquamarine',
                hex: '#7FFFD4',
            },
            {
                nameColor: 'Turquoise',
                hex: '#40E0D0',
            },
            {
                nameColor: 'MediumTurquoise',
                hex: '#48D1CC',
            },
            {
                nameColor: 'CadetBlue',
                hex: '#5F9EA0',
            },
            {
                nameColor: 'SteelBlue',
                hex: '#4682B4',
            },
            {
                nameColor: 'LightSteelBlue',
                hex: '#B0C4DE',
            },
            {
                nameColor: 'LightBlue',
                hex: '#ADD8E6',
            },
            {
                nameColor: 'PowderBlue',
                hex: '#B0E0E6',
            },
            {
                nameColor: 'LightSkyBlue',
                hex: '#87CEFA',
            },
            {
                nameColor: 'SkyBlue',
                hex: '#87CEEB',
            },
            {
                nameColor: 'CornflowerBlue',
                hex: '#6495ED',
            },
            {
                nameColor: 'DeepSkyBlue',
                hex: '#00BFFF',
            },
            {
                nameColor: 'DodgerBlue',
                hex: '#1E90FF',
            },
            {
                nameColor: 'RoyalBlue',
                hex: '#4169E1',
            },
            {
                nameColor: 'Blue',
                hex: '#0000FF',
            },
            {
                nameColor: 'MediumBlue',
                hex: '#0000CD',
            },
            {
                nameColor: 'DarkBlue',
                hex: '#00008B',
            },
            {
                nameColor: 'Navy',
                hex: '#000080',
            },
            {
                nameColor: 'MidnightBlue',
                hex: '#191970',
            },
        ]
    },
    {
        name: 'RED COLORS',
        paleta: [
            {
                nameColor: 'LightSalmon',
                hex: '#FFA07A',
            },
            {
                nameColor: 'Salmon',
                hex: '#FA8072',
            },
            {
                nameColor: 'DarkSalmon',
                hex: '#E9967A',
            },
            {
                nameColor: 'LightCoral',
                hex: '#F08080',
            },
            {
                nameColor: 'IndianRed',
                hex: '#CD5C5C',
            },
            {
                nameColor: 'Crimson',
                hex: '#DC143C',
            },
            {
                nameColor: 'Red',
                hex: '#FF0000',
            },
            {
                nameColor: 'FireBrick',
                hex: '#B22222',
            },
            {
                nameColor: 'DarkRed',
                hex: '#8B0000',
            },
        ]
    },
    {
        name: 'BROWN COLORS',
        paleta: [
            {
                nameColor: 'Cornsilk',
                hex: '#FFF8DC',
            },
            {
                nameColor: 'BlanchedAlmond',
                hex: '#FFEBCD',
            },
            {
                nameColor: 'Bisque',
                hex: '#FFE4C4',
            },
            {
                nameColor: 'NavajoWhite',
                hex: '#FFDEAD',
            },
            {
                nameColor: 'Wheat',
                hex: '#F5DEB3',
            },
            {
                nameColor: 'BurlyWood',
                hex: '#DEB887',
            },
            {
                nameColor: 'Tan',
                hex: '#D2B48C',
            },
            {
                nameColor: 'RosyBrown',
                hex: '#BC8F8F',
            },
            {
                nameColor: 'SandyBrown',
                hex: '#F4A460',
            },
            {
                nameColor: 'GoldenRod',
                hex: '#DAA520',
            },
            {
                nameColor: 'DarkGoldenRod',
                hex: '#B8860B',
            },
            {
                nameColor: 'Peru',
                hex: '#CD853F',
            },
            {
                nameColor: 'Chocolate',
                hex: '#D2691E',
            },
            {
                nameColor: 'Olive',
                hex: '#808000',
            },
            {
                nameColor: 'SaddleBrown',
                hex: '#8B4513',
            },
            {
                nameColor: 'Sienna',
                hex: '#A0522D',
            },
            {
                nameColor: 'Brown',
                hex: '#A52A2A',
            },
            {
                nameColor: 'Maroon',
                hex: '#800000',
            },
        ]
    },
    {
        name: 'ORANGE COLORS',
        paleta: [
            {
                nameColor: 'Orange',
                hex: '#FFA500',
            },
            {
                nameColor: 'DarkOrange',
                hex: '#FF8C00',
            },
            {
                nameColor: 'Coral',
                hex: '#FF7F50',
            },
            {
                nameColor: 'Tomato',
                hex: '#FF6347',
            },
            {
                nameColor: 'OrangeRed',
                hex: '#FF4500',
            },
        ]
    },
    {
        name: 'WHITE COLORS',
        paleta: [
            {
                nameColor: 'White',
                hex: '#FFFFFF',
            },
            {
                nameColor: 'Snow',
                hex: '#FFFAFA',
            },
            {
                nameColor: 'HoneyDew',
                hex: '#F0FFF0',
            },
            {
                nameColor: 'MintCream',
                hex: '#F5FFFA',
            },
            {
                nameColor: 'Azure',
                hex: '#F0FFFF',
            },
            {
                nameColor: 'AliceBlue',
                hex: '#F0F8FF',
            },
            {
                nameColor: 'GhostWhite',
                hex: '#F8F8FF',
            },
            {
                nameColor: 'WhiteSmoke',
                hex: '#F5F5F5',
            },
            {
                nameColor: 'SeaShell',
                hex: '#FFF5EE',
            },
            {
                nameColor: 'Beige',
                hex: '#F5F5DC',
            },
            {
                nameColor: 'OldLace',
                hex: '#FDF5E6',
            },
            {
                nameColor: 'FloralWhite',
                hex: '#FFFAF0',
            },
            {
                nameColor: 'Ivory',
                hex: '#FFFFF0',
            },
            {
                nameColor: 'AntiqueWhite',
                hex: '#FAEBD7',
            },
            {
                nameColor: 'Linen',
                hex: '#FAF0E6',
            },
            {
                nameColor: 'LavenderBlush',
                hex: '#FFF0F5',
            },
            {
                nameColor: 'MistyRose',
                hex: '#FFE4E1',
            },
        ]
    },
    {
        name: 'YELLOW COLORS',
        paleta: [
            {
                nameColor: 'Gold',
                hex: '#FFD700',
            },
            {
                nameColor: 'Yellow',
                hex: '#FFFF00',
            },
            {
                nameColor: 'LightYellow',
                hex: '#FFFFE0',
            },
            {
                nameColor: 'LemonChiffon',
                hex: '#FFFACD',
            },
            {
                nameColor: 'LightGoldenRodYellow',
                hex: '#FAFAD2',
            },
            {
                nameColor: 'PapayaWhip',
                hex: '#FFEFD5',
            },
            {
                nameColor: 'Moccasin',
                hex: '#FFE4B5',
            },
            {
                nameColor: 'PeachPuff',
                hex: '#FFDAB9',
            },
            {
                nameColor: 'PaleGoldenRod',
                hex: '#EEE8AA',
            },
            {
                nameColor: 'Khaki',
                hex: '#F0E68C',
            },
            {
                nameColor: 'DarkKhaki',
                hex: '#BDB76B',
            },
        ]
    },
    {
        name: 'GREY COLORS',
        paleta: [
            {
                nameColor: 'Gainsboro',
                hex: '#DCDCDC',
            },
            {
                nameColor: 'LightGray',
                hex: '#D3D3D3',
            },
            {
                nameColor: 'Silver',
                hex: '#C0C0C0',
            },
            {
                nameColor: 'DarkGray',
                hex: '#A9A9A9',
            },
            {
                nameColor: 'DimGray',
                hex: '#696969',
            },
            {
                nameColor: 'Gray',
                hex: '#808080',
            },
            {
                nameColor: 'LightSlateGray',
                hex: '#778899',
            },
            {
                nameColor: 'SlateGray',
                hex: '#708090',
            },
            {
                nameColor: 'DarkSlateGray',
                hex: '#2F4F4F',
            },
            {
                nameColor: 'Black',
                hex: '#000000',
            },
        ]
    },
    {
        name: 'GREEN COLORS',
        paleta: [
            {
                nameColor: 'GreenYellow',
                hex: '#ADFF2F',
            },
            {
                nameColor: 'Chartreuse',
                hex: '#7FFF00',
            },
            {
                nameColor: 'LawnGreen',
                hex: '#7CFC00',
            },
            {
                nameColor: 'Lime',
                hex: '#00FF00',
            },
            {
                nameColor: 'LimeGreen',
                hex: '#32CD32',
            },
            {
                nameColor: 'PaleGreen',
                hex: '#98FB98',
            },
            {
                nameColor: 'LightGreen',
                hex: '#90EE90',
            },
            {
                nameColor: 'MediumSpringGreen',
                hex: '#00FA9A',
            },
            {
                nameColor: 'SpringGreen',
                hex: '#00FF7F',
            },
            {
                nameColor: 'MediumSeaGreen',
                hex: '#3CB371',
            },
            {
                nameColor: 'SeaGreen',
                hex: '#2E8B57',
            },
            {
                nameColor: 'ForestGreen',
                hex: '#228B22',
            },
            {
                nameColor: 'Green',
                hex: '#008000',
            },
            {
                nameColor: 'DarkGreen',
                hex: '#006400',
            },
            {
                nameColor: 'YellowGreen',
                hex: '#9ACD32',
            },
            {
                nameColor: 'OliveDrab',
                hex: '#6B8E23',
            },
            {
                nameColor: 'DarkOliveGreen',
                hex: '#556B2F',
            },
            {
                nameColor: 'MediumAquaMarine',
                hex: '#66CDAA',
            },
            {
                nameColor: 'DarkSeaGreen',
                hex: '#8FBC8F',
            },
            {
                nameColor: 'LightSeaGreen',
                hex: '#20B2AA',
            },
            {
                nameColor: 'DarkCyan',
                hex: '#008B8B',
            },
            {
                nameColor: 'Teal',
                hex: '#008080',
            },
        ]
    },
]


const TableColor = () => {


    return (
        <Accordion className='grid grid-cols-1 md:grid-cols-2 gap-x-0 md:gap-x-5 gap-y-3' allowZeroExpanded={true}>
            {
                dbColor.map((item, index) => {
                    return (
                        <AccordionItem key={index} className='w-full md:w-[450px]'>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    <span className='font-semibold text-[20px]'>{item.name}</span>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <table className='tableColorContent'>
                                    <tr>
                                        <th>Color Name</th>
                                        <th>HEX</th>
                                        <th>Color</th>
                                    </tr>
                                    {
                                        item.paleta.map((items, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td className='px-2 md:px-5'>{items.nameColor}</td>
                                                    <td className='px-2 md:px-5'>{items.hex}</td>
                                                    <td>
                                                        <div
                                                            className='h-8'
                                                            style={{ backgroundColor: `${items.hex}` }}
                                                        ></div>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </table>
                            </AccordionItemPanel>
                        </AccordionItem>
                    )
                })
            }
        </Accordion>
    )
}

export default TableColor

