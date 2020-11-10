import React from "react"
import styled from "styled-components"

const FooterStyles = styled.footer`
  margin-top: 2rem;
  margin-bottom: 1rem;
  text-align: center;
`

export default function Footer() {
  return (
    <FooterStyles>
      © {new Date().getFullYear()}, Made by Woo.Marc an affiliate of
      {` `}
      <a href="https://www.farfromtheeast.com">FFTE</a>
    </FooterStyles>
  )
}

