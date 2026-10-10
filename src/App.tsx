import { useState } from 'react'
import { 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Plane, 
  Map, 
  MessageSquare,
  Menu
} from 'lucide-react'
import './App.css'
import fleet1 from './assets/images/fleet-1.jpg'
import fleet2 from './assets/images/fleet-2.jpg'
import fleet5 from './assets/images/fleet-5.jpg'
import fleet7 from './assets/images/fleet-7.jpg'
import fleet9 from './assets/images/fleet-9.jpg'

const WHATSAPP_NUMBER = '918754875559'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    from: '',
    to: '',
    date: '',
    hour: '12',
    minute: '00',
    ampm: 'AM',
    passengers: '1'
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `*Taxi Booking Request*\n\n*Name:* ${formData.name}\n*From:* ${formData.from}\n*To:* ${formData.to}\n*Date:* ${formData.date}\n*Time:* ${formData.hour}:${formData.minute} ${formData.ampm}\n*Passengers:* ${formData.passengers}`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank')
  }

  return (
    <div className="app">
      <header>
        <div className="container nav-container">
          <div className="logo">
            <svg width="32" height="32" viewBox="0 0 512 512" fill="currentColor">
              <path fill-rule="evenodd" d="M496 280h-48v-80c0-26.5-21.5-48-48-48H112c-26.5 0-48 21.5-48 48v80H16c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h48c0 35.3 28.7 64 64 64s64-28.7 64-64h128c0 35.3 28.7 64 64 64s64-28.7 64-64h48c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16zM128 408c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm256 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zM416 280H96v-80c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v80z"/>
            </svg>
            <span>Vallioor Taxi</span>
          </div>
          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#gallery">Our Fleet</a>
            <a href="#contact">Contact</a>
          </nav>
          <button className="mobile-menu-btn" style={{ display: 'none' }}>
            <Menu />
          </button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="hero" style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.85)), url(${fleet9})` }}>
          <div className="container">
            <h1>Reliable Taxi Service in Vallioor</h1>
            <p>24/7 Premium Taxi Service for Local and Outstation travel. Professional Drivers. Comfortable Rides. Fixed Fair Pricing.</p>
            <div className="hero-ctas">
              <button 
                className="cta-button" 
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book Now <MessageSquare size={20} />
              </button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="section-padding">
          <div className="container">
            <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '16px' }}>Our Services</h2>
            <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '40px' }}>Whatever your destination, we have the right ride for you.</p>
            
            <div className="services-grid">
              <div className="service-card">
                <MapPin className="service-icon" size={40} />
                <h3>Local Rides</h3>
                <p>Easy and quick commuting within Vallioor town and surrounding areas. Available 24/7.</p>
              </div>
              <div className="service-card">
                <Map className="service-icon" size={40} />
                <h3>Outstation</h3>
                <p>Safe and comfortable travel to Nagercoil, Tirunelveli, Madurai, or any city of your choice.</p>
              </div>
              <div className="service-card">
                <Plane className="service-icon" size={40} />
                <h3>Airport Transfers</h3>
                <p>Timely pickups and drops for Trivandrum (TRV) or Tuticorin (TCR) airports. Never miss a flight.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section id="about" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
          <div className="container">
            <div className="about-grid">
              <div className="about-text">
                <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Why Choose Vallioor Taxi?</h2>
                <div className="about-points" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div className="about-point" style={{ display: 'flex', gap: '16px' }}>
                    <ShieldCheck color="var(--accent)" size={24} />
                    <div>
                      <h4 style={{ fontSize: '1.2rem', marginBottom: '4px' }}>Safe & Secure</h4>
                      <p style={{ color: 'var(--text-secondary)' }}>Verified drivers and well-maintained vehicles for your peace of mind.</p>
                    </div>
                  </div>
                  <div className="about-point" style={{ display: 'flex', gap: '16px' }}>
                    <Clock color="var(--accent)" size={24} />
                    <div>
                      <h4 style={{ fontSize: '1.2rem', marginBottom: '4px' }}>24/7 Availability</h4>
                      <p style={{ color: 'var(--text-secondary)' }}>We are always ready to pick you up, any time of the day or night.</p>
                    </div>
                  </div>
                  <div className="about-point" style={{ display: 'flex', gap: '16px' }}>
                    <svg width="24" height="24" viewBox="0 0 512 512" fill="var(--accent)">
                      <path fill-rule="evenodd" d="M496 280h-48v-80c0-26.5-21.5-48-48-48H112c-26.5 0-48 21.5-48 48v80H16c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h48c0 35.3 28.7 64 64 64s64-28.7 64-64h128c0 35.3 28.7 64 64 64s64-28.7 64-64h48c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16zM128 408c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm256 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zM416 280H96v-80c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v80z"/>
                    </svg>
                    <div>
                      <h4 style={{ fontSize: '1.2rem', marginBottom: '4px' }}>Premium Fleet</h4>
                      <p style={{ color: 'var(--text-secondary)' }}>Clean, sanitized, and comfortable cars for a pleasant journey.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-images">
                <div className="about-img-container">
                  <img src={fleet1} alt="Vallioor Taxi Fleet" className="about-img" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fleet & Vehicle Gallery Section */}
        <section id="gallery" className="section-padding">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Our Fleet</h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                Choose the perfect ride for your trip. Clean, well-maintained vehicles driven by courteous professionals.
              </p>
            </div>

            <div className="gallery-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
              {[
                { 
                  id: 1, 
                  title: 'Executive Sedan', 
                  category: 'Sedan Class',
                  desc: 'Ideal for local rides, daily commuting, and quick outstation travel.', 
                  capacity: '4 Passengers • 2 Large Bags • AC',
                  img: fleet7 
                },
                { 
                  id: 2, 
                  title: 'Premium Sedan', 
                  category: 'Sedan Class',
                  desc: 'Extra legroom & smooth comfort for outstation tours and airport drops.', 
                  capacity: '4 Passengers • 3 Large Bags • AC',
                  img: fleet5 
                },
                { 
                  id: 3, 
                  title: 'Spacious SUV / MPV', 
                  category: 'SUV / MPV Class',
                  desc: 'Generous seating & extra luggage space for family trips and group travel.', 
                  capacity: '6–7 Passengers • 4 Large Bags • Rear AC',
                  img: fleet2 
                },
              ].map((vehicle) => (
                <div className="gallery-card" key={vehicle.id}>
                  <div className="gallery-img-wrapper">
                    <img src={vehicle.img} alt={vehicle.title} className="gallery-img" />
                    <span className="gallery-badge">{vehicle.category}</span>
                  </div>
                  <div className="gallery-info">
                    <h3>{vehicle.title}</h3>
                    <p style={{ color: 'var(--accent)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px' }}>
                      {vehicle.capacity}
                    </p>
                    <p>{vehicle.desc}</p>
                    <button 
                      className="gallery-btn"
                      onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Book This Vehicle
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Form Section */}
        <section id="booking" className="section-padding">
          <div className="container">
            <div className="booking-section">
              <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Book Your Ride</h2>
                <p style={{ color: 'var(--text-secondary)' }}>Fill in your trip details and we'll confirm via WhatsApp instantly.</p>
              </div>

              <form className="booking-form" onSubmit={handleWhatsAppBooking}>
                <div className="form-group full-width">
                  <label>Full Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Enter your name" 
                    required 
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>From</label>
                  <select 
                    name="from" 
                    required 
                    value={formData.from}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Pickup Location</option>
                    <option value="Vallioor">Vallioor</option>
                    <option value="Tirunelveli">Tirunelveli</option>
                    <option value="Nagercoil">Nagercoil</option>
                    <option value="Thoothukudi Airport">Thoothukudi Airport</option>
                    <option value="Trivandrum Airport">Trivandrum Airport</option>
                    <option value="Madurai Airport">Madurai Airport</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>To</label>
                  <select 
                    name="to" 
                    required 
                    value={formData.to}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Drop Location</option>
                    <option value="Vallioor">Vallioor</option>
                    <option value="Tirunelveli">Tirunelveli</option>
                    <option value="Nagercoil">Nagercoil</option>
                    <option value="Thoothukudi Airport">Thoothukudi Airport</option>
                    <option value="Trivandrum Airport">Trivandrum Airport</option>
                    <option value="Madurai Airport">Madurai Airport</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Date</label>
                  <input 
                    type="date" 
                    name="date" 
                    required 
                    value={formData.date}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Time</label>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <select name="hour" value={formData.hour} onChange={handleInputChange} required>
                      {Array.from({ length: 12 }, (_, i) => i + 1).map(h => <option key={h} value={h.toString().padStart(2, '0')}>{h.toString().padStart(2, '0')}</option>)}
                    </select>
                    <select name="minute" value={formData.minute} onChange={handleInputChange} required>
                      {['00', '15', '30', '45'].map(m => <option key={m} value={m}>{m}</option>)}
                    </select>
                    <select name="ampm" value={formData.ampm} onChange={handleInputChange} required>
                      <option value="AM">AM</option>
                      <option value="PM">PM</option>
                    </select>
                  </div>
                </div>
                <div className="form-group full-width">
                  <label>Passengers</label>
                  <select 
                    name="passengers" 
                    value={formData.passengers}
                    onChange={handleInputChange}
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 Persons</option>
                    <option value="3">3 Persons</option>
                    <option value="4+">4+ Persons</option>
                  </select>
                </div>
                <button type="submit" className="cta-button full-width" style={{ justifyContent: 'center', marginTop: '20px' }}>
                  Confirm Booking on WhatsApp <MessageSquare size={20} />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact">
        <div className="container">
          <div className="footer-content">
            <div className="logo" style={{ justifyContent: 'center' }}>
              <svg width="24" height="24" viewBox="0 0 512 512" fill="currentColor">
                <path fill-rule="evenodd" d="M496 280h-48v-80c0-26.5-21.5-48-48-48H112c-26.5 0-48 21.5-48 48v80H16c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h48c0 35.3 28.7 64 64 64s64-28.7 64-64h128c0 35.3 28.7 64 64 64s64-28.7 64-64h48c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16zM128 408c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm256 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zM416 280H96v-80c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v80z"/>
              </svg>
              <span>Vallioor Taxi</span>
            </div>
            <p>Your trusted travel partner in Vallioor and beyond.</p>
            <div className="footer-links">
              <a href="#" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
            <div style={{ marginTop: '20px', fontSize: '0.9rem' }}>
              <p>Contact: <a href="tel:+918754875559" style={{ color: 'var(--accent)' }}>+91 87548 75559</a></p>
              <p>Address: Main Road, Vallioor, Tamil Nadu</p>
            </div>
            <p style={{ marginTop: '40px', fontSize: '0.8rem' }}>© 2026 Vallioor Taxi Service. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
