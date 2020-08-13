import { borderRadius } from "styled-system"


export const breakpoints = ['20rem','36rem', '48rem', '62rem', '75rem']

export  const mediaQueries= {
  xs: `@media screen and (min-width: ${breakpoints[0]})`,
  sm: `@media screen and (min-width: ${breakpoints[1]})`,
  md: `@media screen and (min-width: ${breakpoints[2]})`,
  lg: `@media screen and (min-width: ${breakpoints[3]})`,
  xl: `@media screen and (min-width: ${breakpoints[4]})`,
}
breakpoints.xs = breakpoints[0]
breakpoints.sm = breakpoints[1]
breakpoints.md = breakpoints[2]
breakpoints.lg = breakpoints[3]
breakpoints.xl = breakpoints[4]


const mainTheme = {
    breakpoints,
    mediaQueries,
    radii: [0, 2, 4, 16, 9999, '100%'],
      colors:{
        gainsboro: 'rgba(220,220,220, 1)',
        blacks: [
            'rgba(0,0,0)',
            'rgba(0,0,0,.0125)',
            'rgba(0,0,0,.025)',
            'rgba(0,0,0,.05)',
            'rgba(0,0,0,.1)',
            'rgba(0,0,0,.2)',
            'rgba(0,0,0,.3)',
            'rgba(0,0,0,.4)',
            'rgba(0,0,0,.5)',
            'rgba(0,0,0,.6)',
            'rgba(0,0,0,.7)',
            'rgba(0,0,0,.8)',
            'rgba(0,0,0,.9)',
          ],
          whites: [
            'rgba(253,253,253)',
            'rgba(253,253,253,.0125)',
            'rgba(253,253,253,.025)',
            'rgba(253,253,253,.05)',
            'rgba(253,253,253,.1)',
            'rgba(253,253,253,.2)',
            'rgba(253,253,253,.3)',
            'rgba(253,253,253,.4)',
            'rgba(253,253,253,.5)',
            'rgba(253,253,253,.6)',
            'rgba(253,253,253,.7)',
            'rgba(253,253,253,.8)',
            'rgba(253,253,253,.9)',
          ],
          greys: [
            'rgba(204, 204, 204,.0125)',
            'rgba(204, 204, 204,.025)',
            'rgba(204, 204, 204,.05)',
            'rgba(204, 204, 204,.1)',
            'rgba(204, 204, 204,.2)',
            'rgba(204, 204, 204,.3)',
            'rgba(204, 204, 204,.4)',
            'rgba(204, 204, 204,.5)',
            'rgba(204, 204, 204,.6)',
            'rgba(204, 204, 204,.7)',
            'rgba(204, 204, 204,.8)',
            'rgba(204, 204, 204,.9)',
            'rgba(204, 204, 204, 1)',
            'rgba(204, 204, 204)'
          ]
      },
      radii: [".25em", ".50em", ".75em", "1rem", "2rem", '100%'],
      buttons:{
        dotted: {
          backgroundColor: 'rgba(0,0,0,.6)',
          border: '1px dotted white',
          borderRadius: '8px',
          textAlign: 'center',
        },
        grey:{
          color: "white",
          background: "rgb(94,94,94)",
          background: "linear-gradient(180deg, rgba(94,94,94,1) 0%, rgba(31,31,31,.7) 98%)"
        },
        primary: {
        }
      },
      paragraph: {
        primary:{
          color: "white",
          fontSize: "1rem",
        }
      }
      
      
      
      
}

export default mainTheme