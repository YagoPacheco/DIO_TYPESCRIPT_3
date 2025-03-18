import { Box } from "@chakra-ui/react"
import { Header } from "./Header"
import { Footer } from "./Footer"
import '../styles/Main.css'

export const Layout = ({ children }: any) => {
  return (
    <Box minHeight='100vh'>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </Box>
  )
}
