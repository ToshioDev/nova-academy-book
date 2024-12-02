import { headers } from 'next/headers'

async function getCountryFromIP() {
  const headersList = headers()
  const ip = headersList.get('x-forwarded-for') || 'Unknown'
  
  try {
    const response = await fetch(`https://ipapi.co/${ip}/json/`)
    const data = await response.json()
    return data.country_code
  } catch (error) {
    console.error('Error fetching country from IP:', error)
    return 'MX' // Default to Mexico if there's an error
  }
}

export async function GeoLocation() {
  const countryCode = await getCountryFromIP()
  
  return (
    <div id="geo-data" data-country-code={countryCode}></div>
  )
}

