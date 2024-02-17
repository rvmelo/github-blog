import React from 'react'
import { Header } from '../header'
import { Outlet } from 'react-router-dom'
import { LayoutContainer, PageContainer } from './styles'

export const DefaultLayout: React.FC = () => {
  return (
    <LayoutContainer>
      <Header />
      <PageContainer>
        <Outlet />
      </PageContainer>
    </LayoutContainer>
  )
}
