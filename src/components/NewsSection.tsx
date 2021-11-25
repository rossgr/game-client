import React from 'react'
import { Container } from './Container'
import { NewsArticle } from './NewsArticle'

export const NewsSection: React.FC = (): React.ReactElement => {
  return (
    <Container class='news-section'>
      <NewsArticle />
    </Container>
  )
}