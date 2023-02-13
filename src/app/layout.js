import Header from '@/components/Header'
import Provider from './Provider'
import './globals.css'
import Nav from '@/components/Nav'
import SearchBar from '@/components/SearchBar'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
  
      <head />
      <body>
        <Provider>   
        <Header />
        <Nav />
        <SearchBar />
        
        
        {children}
        </Provider>
        </body>
    </html>
  )
}
