import 'dotenv/config'
import app from './server'

const PORT = Number(process.env.PORT) || 5555
app.listen(PORT, () => console.log(`Server running at: http://localhost:${PORT}`))
