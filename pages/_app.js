import { useState } from "react"
import { ThemeProvider } from "styled-components";
import '../styles/global/globals.css';
import { lightTheme, darkTheme, GlobalStyles } from "../styles/global/ThemeConfig" 
import styled from "styled-components";
import Header from '../components/Header'

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light") 

  const toggleTheme = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light')
  }

const Button = styled.button`
  position:fixed;
  top: 10px;
  right: 10px;
  border: none;
  background: transparent;
  &:hover {
    cursor:pointer;
  }
`

  return (
    <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      {/*
        <Button onClick={toggleTheme}>
          {theme=="light" ? 
          <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.425 6.775C15.9734 8.39464 15.7463 10.0686 15.75 11.75C15.75 21.95 24.05 30.25 34.25 30.25C35.95 30.25 37.625 30.025 39.225 29.575C37.9118 32.8018 35.6671 35.5642 32.7774 37.51C29.8876 39.4558 26.4838 40.4967 23 40.5C13.35 40.5 5.5 32.65 5.5 23C5.5 15.675 10.025 9.375 16.425 6.775ZM23 0.5C18.5499 0.5 14.1998 1.8196 10.4997 4.29193C6.79956 6.76427 3.91568 10.2783 2.21271 14.3896C0.509739 18.501 0.0641644 23.025 0.932332 27.3895C1.8005 31.7541 3.94342 35.7632 7.0901 38.9099C10.2368 42.0566 14.2459 44.1995 18.6105 45.0677C22.975 45.9358 27.499 45.4903 31.6104 43.7873C35.7217 42.0843 39.2357 39.2004 41.7081 35.5003C44.1804 31.8002 45.5 27.4501 45.5 23C45.5 21.85 45.4 20.7 45.25 19.6C44.0008 21.3516 42.3503 22.7787 40.4365 23.7616C38.5228 24.7446 36.4014 25.255 34.25 25.25C31.388 25.2501 28.6 24.3411 26.288 22.6541C23.976 20.9672 22.2596 18.5895 21.3863 15.864C20.5131 13.1385 20.5281 10.2061 21.4292 7.48964C22.3303 4.77321 24.0709 2.4132 26.4 0.75C25.3 0.6 24.15 0.5 23 0.5Z" fill="black"/>
          </svg> : <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M28 20.5C32.125 20.5 35.5 23.875 35.5 28C35.5 32.125 32.125 35.5 28 35.5C23.875 35.5 20.5 32.125 20.5 28C20.5 23.875 23.875 20.5 28 20.5ZM28 15.5C21.1 15.5 15.5 21.1 15.5 28C15.5 34.9 21.1 40.5 28 40.5C34.9 40.5 40.5 34.9 40.5 28C40.5 21.1 34.9 15.5 28 15.5ZM3 30.5H8C9.375 30.5 10.5 29.375 10.5 28C10.5 26.625 9.375 25.5 8 25.5H3C1.625 25.5 0.5 26.625 0.5 28C0.5 29.375 1.625 30.5 3 30.5ZM48 30.5H53C54.375 30.5 55.5 29.375 55.5 28C55.5 26.625 54.375 25.5 53 25.5H48C46.625 25.5 45.5 26.625 45.5 28C45.5 29.375 46.625 30.5 48 30.5ZM25.5 3V8C25.5 9.375 26.625 10.5 28 10.5C29.375 10.5 30.5 9.375 30.5 8V3C30.5 1.625 29.375 0.5 28 0.5C26.625 0.5 25.5 1.625 25.5 3ZM25.5 48V53C25.5 54.375 26.625 55.5 28 55.5C29.375 55.5 30.5 54.375 30.5 53V48C30.5 46.625 29.375 45.5 28 45.5C26.625 45.5 25.5 46.625 25.5 48ZM12.975 9.45C12.7437 9.21824 12.469 9.03437 12.1666 8.90892C11.8641 8.78346 11.5399 8.71889 11.2125 8.71889C10.8851 8.71889 10.5609 8.78346 10.2584 8.90892C9.95601 9.03437 9.68128 9.21824 9.45 9.45C9.21824 9.68128 9.03437 9.95601 8.90892 10.2584C8.78346 10.5609 8.71889 10.8851 8.71889 11.2125C8.71889 11.5399 8.78346 11.8641 8.90892 12.1666C9.03437 12.469 9.21824 12.7437 9.45 12.975L12.1 15.625C13.075 16.6 14.675 16.6 15.625 15.625C16.575 14.65 16.6 13.05 15.625 12.1L12.975 9.45ZM43.9 40.375C43.6687 40.1432 43.394 39.9594 43.0916 39.8339C42.7891 39.7085 42.4649 39.6439 42.1375 39.6439C41.8101 39.6439 41.4859 39.7085 41.1834 39.8339C40.881 39.9594 40.6063 40.1432 40.375 40.375C40.1432 40.6063 39.9594 40.881 39.8339 41.1834C39.7085 41.4859 39.6439 41.8101 39.6439 42.1375C39.6439 42.4649 39.7085 42.7891 39.8339 43.0916C39.9594 43.394 40.1432 43.6687 40.375 43.9L43.025 46.55C44 47.525 45.6 47.525 46.55 46.55C46.7818 46.3187 46.9656 46.044 47.0911 45.7416C47.2165 45.4391 47.2811 45.1149 47.2811 44.7875C47.2811 44.4601 47.2165 44.1359 47.0911 43.8334C46.9656 43.531 46.7818 43.2563 46.55 43.025L43.9 40.375ZM46.55 12.975C46.7818 12.7437 46.9656 12.469 47.0911 12.1666C47.2165 11.8641 47.2811 11.5399 47.2811 11.2125C47.2811 10.8851 47.2165 10.5609 47.0911 10.2584C46.9656 9.95601 46.7818 9.68128 46.55 9.45C46.3187 9.21824 46.044 9.03437 45.7416 8.90892C45.4391 8.78346 45.1149 8.71889 44.7875 8.71889C44.4601 8.71889 44.1359 8.78346 43.8334 8.90892C43.531 9.03437 43.2563 9.21824 43.025 9.45L40.375 12.1C39.4 13.075 39.4 14.675 40.375 15.625C41.35 16.575 42.95 16.6 43.9 15.625L46.55 12.975ZM15.625 43.9C15.8568 43.6687 16.0406 43.394 16.1661 43.0916C16.2915 42.7891 16.3561 42.4649 16.3561 42.1375C16.3561 41.8101 16.2915 41.4859 16.1661 41.1834C16.0406 40.881 15.8568 40.6063 15.625 40.375C15.3937 40.1432 15.119 39.9594 14.8166 39.8339C14.5141 39.7085 14.1899 39.6439 13.8625 39.6439C13.5351 39.6439 13.2109 39.7085 12.9084 39.8339C12.606 39.9594 12.3313 40.1432 12.1 40.375L9.45 43.025C8.475 44 8.475 45.6 9.45 46.55C10.425 47.5 12.025 47.525 12.975 46.55L15.625 43.9V43.9Z" fill="black"/>
          </svg>}
      </Button>
      */}
      

      
      <Component {...pageProps} />
    </ThemeProvider>
  ) 
}
export default MyApp