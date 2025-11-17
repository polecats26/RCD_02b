import type { NavigationItem } from "../@types/app.ts"

export const officeConfig = {
  address: {
    street1: '12301 Wilshire Blvd., Ste. 405',
    street2: '',
    city: 'Los Angeles',
    state: 'CA',
    zip: '90025',
    href: 'https://www.google.com/maps/place/Drs.+Fred+Chao+%26+Cynthia+Rangel,+DDS/@34.0427445,-118.4697634,713m/data=!3m2!1e3!4b1!4m6!3m5!1s0x80c2a4c941205509:0xc79093e771365bdb!8m2!3d34.0427445!4d-118.4697634!16s%2Fg%2F1tz7673t?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D'
  },
  phone: {
    display: '(424) 325-3244',
    href: 'tel:424-325-3244'
  },
  email: {
    display: 'rangelchaodental@gmail.com',
    href: 'mailto: rangelchaodental@gmail.com'
  },
  appointments: {
    href: 'https://app.nexhealth.com/appt/rangel-chao-dental'
  }
}

export const navigationItems:  NavigationItem[] = [
  {
    label: "Home",
    url: "/"
  },
  {
    label: "About Us",
    url: "/about-us"
  },
  {
    label: "Appointments",
    url: "/appointments"
  },
  // superfluous?
  // {
  //   label: "Contact",
  //   url: "/contact",
  //   classes: "hidd"
  // },
  {
    label: "(424) 325-3244",
    url: "tel:424-325-3244",
    classes: ""
  }
]

export const footerNavigationItems:  NavigationItem[] = [
  {
    label: "Home",
    url: "/"
  },
  {
    label: "About",
    url: "/about-us"
  },
  {
    label: "Appointments",
    url: "/appointments"
  },
  {
    label: "Contact",
    url: "/contact"
  }
]
