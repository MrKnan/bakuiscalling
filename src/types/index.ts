export interface Tour {
  id: string
  name: string
  slug: string
  description: string
  short_description: string
  price: number
  duration: string
  difficulty: 'Easy' | 'Moderate' | 'Challenging'
  category: 'cultural' | 'adventure' | 'nature' | 'city'
  region: string
  image_url: string
  gallery: string[]
  highlights: string[]
  included: string[]
  not_included: string[]
  featured: boolean
  rating: number
  review_count: number
}

export interface Booking {
  id: string
  tour_id: string
  name: string
  email: string
  phone: string
  group_size: number
  start_date: string
  end_date: string
  message: string
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
  created_at: string
}

export interface Testimonial {
  id: string
  name: string
  location: string
  content: string
  rating: number
  tour_name: string
  avatar_url?: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image_url: string
}
