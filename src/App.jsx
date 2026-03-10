function App() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0f0f0f',
      color: '#ffffff',
      fontFamily: 'sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      textAlign: 'center',
      boxSizing: 'border-box',
      width: '100%'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎬 FilmLog</h1>
      <p style={{ fontSize: '1.2rem', color: '#aaaaaa', maxWidth: '500px', textAlign: 'center' }}>
        Your personal movie tracker. Search films, build your watchlist,
        rate and review movies — all synced to your account.
      </p>
      <div style={{
        marginTop: '2rem',
        display: 'flex',
        gap: '1rem',
        flexWrap: 'wrap',
        justifyContent: 'center',
        maxWidth: '600px'
      }}>
        <span style={{ backgroundColor: '#e50914', padding: '0.5rem 1.2rem', borderRadius: '20px', fontSize: '0.9rem' }}>🔍 Search Movies</span>
        <span style={{ backgroundColor: '#333', padding: '0.5rem 1.2rem', borderRadius: '20px', fontSize: '0.9rem' }}>⭐ Rate & Review</span>
        <span style={{ backgroundColor: '#333', padding: '0.5rem 1.2rem', borderRadius: '20px', fontSize: '0.9rem' }}>📋 Watchlist</span>
      </div>
      <p style={{ marginTop: '3rem', color: '#555', fontSize: '0.85rem' }}>Coming soon — built with React + Supabase + TMDB API</p>
    </div>
  )
}

export default App