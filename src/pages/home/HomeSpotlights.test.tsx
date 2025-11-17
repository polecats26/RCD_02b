import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import HomeSpotlights from './HomeSpotlights'

const renderHomeSpotlights = () => {
  return render(
    <BrowserRouter>
      <HomeSpotlights />
    </BrowserRouter>
  )
}

describe('HomeSpotlights', () => {
  it('renders without crashing', () => {
    renderHomeSpotlights()
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })

  it('renders three spotlight sections', () => {
    renderHomeSpotlights()
    // Each spotlight has a flex-1 class and relative positioning
    const spotlights = document.querySelectorAll('.flex-1.relative')
    expect(spotlights).toHaveLength(3)
  })

  it('renders three spotlight images', () => {
    renderHomeSpotlights()
    const images = document.querySelectorAll('img')
    expect(images).toHaveLength(3)
  })

  it('renders correct link URLs for each spotlight', () => {
    renderHomeSpotlights()
    const links = screen.getAllByRole('link')

    expect(links[0]).toHaveAttribute('href', '/about-us')
    expect(links[1]).toHaveAttribute('href', '/appointments')
    expect(links[2]).toHaveAttribute('href', '/about-us#services')
  })
})
