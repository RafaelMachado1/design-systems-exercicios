import { ChakraProvider } from '@chakra-ui/react'
import Card from './components/Card'
import { useState } from 'react'


function App() {

const produtos = [{
  marca: "Rafael Cadeiras",
  nome: "Cadeira",
  precoComDEsconto: "20,00",
  precoNormal: "60,00"
}] 

  const [produtosList, setProdutos] = useState(produtos)

  return (

    <ChakraProvider resetCSS>
      {produtosList && produtosList.map((produto) => {
        return <Card
        marca={produto.marca}
        nome={produto.nome}
        precoComDEsconto={produto.precoComDEsconto}
        precoNormal={produto.precoNormal}
        />
      })}

    </ChakraProvider>


  )
}

export default App