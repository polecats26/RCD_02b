import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import HomeHours from './HomeHours'

// Mock the officeConfig
vi.mock('../../config/site', () => ({
  officeConfig: {
    appointments: {
      href: 'https://app.nexhealth.com/appt/rangel-chao-dental'
    },
    phone: {
      href: 'tel:424-325-3244'
    }
  }
}))

describe('HomeHours', () => {
  beforeEach(() => {
    // Reset window.open and document.location.href mocks
    window.open = vi.fn()

    Object.defineProperty(window, 'location', {
      value: { href: '' },
      writable: true,
      configurable: true,
    })
  })

  it('renders without crashing', () => {
    render(<HomeHours />)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })

  it('renders the office hours container', () => {
    render(<HomeHours />)
    const container = document.querySelector('.office-hours')
    expect(container).toBeInTheDocument()
  })

  it('opens appointment URL when "open" section is clicked', () => {
    render(<HomeHours />)
    const openButton = screen.getByText(/open/i)

    fireEvent.click(openButton)

    expect(window.open).toHaveBeenCalledWith('https://app.nexhealth.com/appt/rangel-chao-dental')
  })

  it('navigates to phone href when call button is clicked', () => {
    render(<HomeHours />)
    // Find the call button by looking for the parent element that has the click handler
    const callElements = screen.getAllByText('*', { exact: false })
    // The call button should be clickable (has onClick)
    const callButton = callElements.find(el =>
      el.closest('.cursor-pointer') !== null &&
      el.closest('.bg-linear-to-b') !== null
    )

    expect(callButton).toBeTruthy()
    if (callButton) {
      const clickableParent = callButton.closest('.cursor-pointer')
      if (clickableParent) {
        fireEvent.click(clickableParent)
        expect(document.location.href).toBe('tel:424-325-3244')
      }
    }
  })
})
