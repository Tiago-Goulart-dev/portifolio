import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
  fontSize?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'cyan' : 'green')};
  font-size: ${(props) => props.fontSize || '16px'};
`

const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: #fff;

  span {
    text-decoration: line-through;
  }
`

function Teste() {
  return (
    <>
      <Botao fontSize="18px" principal>
        Clique aqui
      </Botao>
      <Botao fontSize="14px" principal={false}>
        Clique aqui
      </Botao>
      <BotaoPerigo as="a" principal>
        <span>Não clique</span>
      </BotaoPerigo>
    </>
  )
}

export default Teste
