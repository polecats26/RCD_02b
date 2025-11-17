import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Home from './index'

// Mock the child components
vi.mock('./HomeSpotlights', () => ({
  default: () => <div data-testid="home-spotlights">HomeSpotlights</div>
}))

vi.mock('./HomeHours', () => ({
  default: () => <div data-testid="home-hours">HomeHours</div>
}))

vi.mock('../components/GoogleMap', () => ({
  default: () => <div data-testid="google-map">GoogleMap</div>
}))

vi.mock('../components/splash', () => ({
  default: ({ title, children }: { title: React.ReactNode; children: React.ReactNode }) => (
    <div data-testid="splash">
      <div data-testid="splash-title">{title}</div>
      <div data-testid="splash-children">{children}</div>
    </div>
  )
}))

// Mock the officeConfig
vi.mock('../../config/site', () => ({
  officeConfig: {
    appointments: {
      href: 'https://app.nexhealth.com/appt/rangel-chao-dental'
    }
  }
}))

const renderHome = () => {
  return render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  )
}

describe('Home', () => {
  it('renders the home page container', () => {
    renderHome()
    const homeElement = document.querySelector('#home')
    expect(homeElement).toBeInTheDocument()
  })

  it('renders the Splash component', () => {
    renderHome()
    expect(screen.getByTestId('splash')).toBeInTheDocument()
  })

  it('renders the Book Online button with correct link', () => {
    renderHome()
    const bookButton = screen.getByRole('link', { name: /Book Online/i })
    expect(bookButton).toBeInTheDocument()
    expect(bookButton).toHaveAttribute('href', 'https://app.nexhealth.com/appt/rangel-chao-dental')
  })

  it('renders the HomeSpotlights component', () => {
    renderHome()
    expect(screen.getByTestId('home-spotlights')).toBeInTheDocument()
  })

  it('renders the HomeHours component', () => {
    renderHome()
    expect(screen.getByTestId('home-hours')).toBeInTheDocument()
  })

  it('renders the GoogleMapComponent', () => {
    renderHome()
    expect(screen.getByTestId('google-map')).toBeInTheDocument()
  })

  it('renders all major sections in correct order', () => {
    renderHome()
    const homeElement = document.querySelector('#home')
    const children = homeElement?.children

    expect(children?.[0]).toHaveAttribute('data-testid', 'splash')
    expect(children?.[1]).toHaveAttribute('data-testid', 'home-spotlights')
    expect(children?.[2]).toHaveAttribute('data-testid', 'home-hours')
    expect(children?.[3]).toHaveAttribute('data-testid', 'google-map')
  })
})
