# Vallioor Taxi Service Website - Project Plan

## 1. Objective
Build a high-quality, responsive website that establishes trust and makes it extremely easy for users in or visiting Vallioor to book a taxi via WhatsApp.

## 2. Design Philosophy
- **Premium & Modern**: Sleek dark theme with gold/white accents, clean typography, and a polished, "Uber-like" professional feel.
- **Color Palette**: Deep Charcoal/Black (`#0F172A`) as the primary background, with Gold (`#F59E0B`) or Silver for highlights, and Slate (`#1E293B`) for secondary elements.
- **Mobile First**: Since most taxi bookings happen on mobile, the UI will be highly optimized for small screens.
- **One-Click Booking**: A prominent "Book Now on WhatsApp" button accessible from all sections.

## 3. Key Details
- **WhatsApp Number**: `+91 87548 75559`

## 4. Key Sections
- **Header**: Logo (Vallioor Taxi), Navigation links (Home, Services, About, Contact).
- **Hero Section**: Catchy headline ("Reliable Taxi Service in Vallioor"), Sub-headline ("24/7 Service. Professional Drivers. Comfortable Rides."), and a primary WhatsApp CTA.
- **Service Cards**:
    - **Local Rides**: Easy commuting within Vallioor.
    - **Outstation**: Travel to nearby cities (Tirunelveli, Nagercoil, etc.).
    - **Airport Transfers**: Reliable pickups and drops.
- **Why Choose Us?**: Reliability, Punctuality, Fair Pricing, Professionalism.
- **Testimonials**: (Mock/Placeholder) User reviews from Vallioor residents.
- **Contact/Booking Form**: A simple form where users enter their Trip Details (From, To, Date, Time), which then generates a WhatsApp message.
- **Footer**: Address, Phone number, Quick links, and Social icons.

## 5. Technical Strategy
- **Framework**: React 19 + Vite.
- **Styling**: Standard CSS with CSS Variables for theme consistency, ensuring a polished look without heavy external libraries.
- **Icons**: `lucide-react` for high-quality SVG icons.
- **WhatsApp Integration**: Use `https://wa.me/{phone}?text={message}` format for seamless redirection.

## 6. Implementation Steps

### Phase 1: Setup & Theme
- [x] Install dependencies (`lucide-react`).
- [x] Define CSS variables in `index.css` for the Taxi theme.
- [x] Clean up `App.tsx` and existing styles.

### Phase 2: Component Development
- [x] **Navigation**: Clean, responsive header.
- [x] **Hero**: High-impact section with a "Book Now" CTA.
- [x] **Services**: Grid of service cards with icons.
- [x] **About/WhyUs**: Trust-building content.
- [x] **BookingForm**: Interactive section to pre-fill WhatsApp messages.

### Phase 3: WhatsApp Integration
- [x] Create a utility or helper function to generate WhatsApp links.
- [x] Implement the logic: User fills form -> Clicks button -> Opens WhatsApp with pre-filled details.

### Phase 4: Final Polish
- [x] Add smooth animations (e.g., hover effects on cards).
- [x] Ensure full responsiveness across all screen sizes.
- [x] Final visual check for spacing, alignment, and color consistency.

## 8. Android Application Implementation
- [x] Project Setup (Kotlin/Compose/Gradle)
- [x] Android Manifest & Permissions
- [x] WebView Integration with JS/DOM support
- [x] Native WhatsApp Intent Handling
- [x] Premium Dark Theme Configuration
- [x] Build and Deployment Guide (`ANDROID_APP_GUIDE.md`)

## 9. Verification & Testing
- [x] Verify WhatsApp links work correctly on both desktop and mobile.
- [x] Test form validation (simple).
- [x] Perform a "cross-browser" check for layout stability.
