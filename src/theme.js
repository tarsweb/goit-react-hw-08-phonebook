
function addUnit(unit, el, index, obj) {
  obj[index] = !el ? 0 : el + unit
}

const space = [0, 2, 4, 8, 16, 32, 64, 128, 256]
space.map( (el , index, obj) =>  addUnit("px", el , index, obj));

space.small = space[2];
space.normal = space[3];
space.large = space[4];

export const theme = {
  colors: {
    primary: '#ffffff',
    secondary: '#e7ecf2',
    accent: '#f3f6f9',
    accentAltenative: "#555c61",
    text: '#7c848f',
    border: '#9aa5b0',
    shadow: `rgba(0, 0, 0, 0.15)`,
    online: "green",
    offline: "red",
    tableText : "#e4e4e4",
    tableMain : "#a9acae",
    tableHead: "#15bdd3",
    tableRow : "#ecf1f3"
  },
  space: space,
  fonts: {
    normal: 1.2
  },
  fontSizes: {
    "12": '12px',
    "20": '20px',
    "24": '24px',
    "30": '30px' 
  },
  fontWeights: {
    normal : 400,
    medium : 500,
    bold: 700,
  },
  lineHeights: {},
  borders : {
    normal: '1px'
  },
  radii: {
    none: '0',
    normal: '4px',
    round: '50%',
  },
  shadow:{
    main: ''
  }
}